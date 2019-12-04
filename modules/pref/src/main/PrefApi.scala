package lila.pref

import play.api.mvc.RequestHeader
import reactivemongo.api.bson._
import scala.concurrent.duration.FiniteDuration

import lila.db.dsl._
import lila.user.User

final class PrefApi(
    coll: Coll,
    asyncCache: lila.memo.AsyncCache.Builder,
    cacheTtl: FiniteDuration
) {

  import PrefHandlers._

  private def fetchPref(id: String): Fu[Option[Pref]] = coll.ext.find($id(id)).uno[Pref]

  private val cache = asyncCache.multi(
    name = "pref.fetchPref",
    f = fetchPref,
    expireAfter = _.ExpireAfterAccess(cacheTtl)
  )

  def saveTag(user: User, tag: Pref.Tag.type => String, value: String) =
    coll.update.one(
      $id(user.id),
      $set(s"tags.${tag(Pref.Tag)}" -> value),
      upsert = true
    ).void >>- { cache refresh user.id }

  def getPrefById(id: String): Fu[Pref] = cache get id dmap (_ getOrElse Pref.create(id))
  val getPref = getPrefById _
  def getPref(user: User): Fu[Pref] = getPref(user.id)
  def getPref(user: Option[User]): Fu[Pref] = user.fold(fuccess(Pref.default))(getPref)

  def getPref[A](user: User, pref: Pref => A): Fu[A] = getPref(user) map pref
  def getPref[A](userId: String, pref: Pref => A): Fu[A] = getPref(userId) map pref

  def getPref(user: User, req: RequestHeader): Fu[Pref] =
    getPref(user) map RequestPref.queryParamOverride(req)

  def followable(userId: String): Fu[Boolean] =
    coll.ext.find($id(userId), $doc("follow" -> true)).uno[Bdoc] map {
      _ flatMap (_.getAsOpt[Boolean]("follow")) getOrElse Pref.default.follow
    }

  def unfollowableIds(userIds: List[String]): Fu[Set[String]] =
    coll.distinctEasy[String, Set]("_id", ($inIds(userIds) ++ $doc(
      "follow" -> false
    )))

  def followableIds(userIds: List[String]): Fu[Set[String]] =
    unfollowableIds(userIds) map userIds.toSet.diff

  def followables(userIds: List[String]): Fu[List[Boolean]] =
    followableIds(userIds) map { followables => userIds map followables.contains }

  def setPref(pref: Pref): Funit =
    coll.update.one($id(pref.id), pref, upsert = true).void >>- {
      cache refresh pref.id
    }

  def setPref(user: User, change: Pref => Pref): Funit =
    getPref(user) map change flatMap setPref

  def setPref(userId: String, change: Pref => Pref): Funit =
    getPref(userId) map change flatMap setPref

  def setPrefString(user: User, name: String, value: String): Funit =
    getPref(user) map { _.set(name, value) } orFail
      s"Bad pref ${user.id} $name -> $value" flatMap setPref

  def setBot(user: User): Funit =
    setPref(user, (p: Pref) => p.copy(
      takeback = Pref.Takeback.NEVER,
      moretime = Pref.Moretime.NEVER,
      insightShare = Pref.InsightShare.EVERYBODY
    ))

  def saveNewUserPrefs(user: User, req: RequestHeader): Funit = {
    val reqPref = RequestPref fromRequest req
    (reqPref != Pref.default) ?? setPref(reqPref.copy(_id = user.id))
  }
}
