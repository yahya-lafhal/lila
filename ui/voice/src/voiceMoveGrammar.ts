// *************************** this file is generated. see ui/voice/@build/README.md ***************************

export type Sub = { to: string; cost: number };
export type Entry = { in: string; tok: string; tags: string[]; val?: string; subs?: Sub[] };

export const lexicon: Entry[] = [
  {
    in: 'a',
    tok: 'a',
    tags: ['file', 'move'],
    subs: [
      { to: '', cost: 0.37 },
      { to: 'e', cost: 0.46 },
      { to: 'f', cost: 0.47 },
      { to: '8', cost: 0.47 },
      { to: 'a8', cost: 0.53 },
      { to: 'h', cost: 0.57 },
      { to: '8a', cost: 0.75 },
    ],
  },
  {
    in: 'b',
    tok: 'b',
    tags: ['file', 'move'],
    subs: [
      { to: '', cost: 0.5 },
      { to: 'd', cost: 0.48 },
      { to: 'e', cost: 0.59 },
      { to: 'b8', cost: 0.68 },
    ],
  },
  {
    in: 'c',
    tok: 'c',
    tags: ['file', 'move'],
    subs: [
      { to: '', cost: 0.5 },
      { to: '3', cost: 0.71 },
      { to: '6', cost: 0.74 },
      { to: 'g', cost: 0.74 },
      { to: 'c8', cost: 0.76 },
    ],
  },
  {
    in: 'd',
    tok: 'd',
    tags: ['file', 'move'],
    subs: [
      { to: '', cost: 0.5 },
      { to: 'g', cost: 0.49 },
      { to: 'b', cost: 0.5 },
      { to: 'e', cost: 0.61 },
      { to: 'd8', cost: 0.71 },
      { to: '3', cost: 0.73 },
      { to: '8d', cost: 0.84 },
      { to: 'a', cost: 0.86 },
      { to: 'c', cost: 0.89 },
    ],
  },
  {
    in: 'e',
    tok: 'e',
    tags: ['file', 'move'],
    subs: [
      { to: '', cost: 0.47 },
      { to: 'a', cost: 0.48 },
      { to: 'b', cost: 0.51 },
      { to: 'd', cost: 0.51 },
      { to: 'g', cost: 0.53 },
      { to: 'c', cost: 0.55 },
      { to: 'e8', cost: 0.7 },
    ],
  },
  {
    in: 'f',
    tok: 'f',
    tags: ['file', 'move'],
    subs: [
      { to: '', cost: 0.5 },
      { to: 'a', cost: 0.68 },
      { to: 'h', cost: 0.71 },
      { to: 'e', cost: 0.83 },
      { to: '8f', cost: 0.86 },
    ],
  },
  {
    in: 'g',
    tok: 'g',
    tags: ['file', 'move'],
    subs: [
      { to: '', cost: 0.5 },
      { to: 'd', cost: 0.5 },
      { to: 'g8', cost: 0.56 },
      { to: 'c', cost: 0.84 },
      { to: '8g', cost: 0.85 },
    ],
  },
  {
    in: 'h',
    tok: 'h',
    tags: ['file', 'move'],
    subs: [
      { to: '', cost: 0.5 },
      { to: '8', cost: 0.52 },
      { to: 'a', cost: 0.64 },
      { to: '8h', cost: 0.79 },
      { to: 'e', cost: 0.88 },
    ],
  },
  {
    in: 'one',
    tok: '1',
    tags: ['rank', 'move'],
    subs: [
      { to: '', cost: 0.5 },
      { to: 'P', cost: 0.6 },
      { to: 'e1', cost: 0.62 },
      { to: 'f1', cost: 0.81 },
    ],
  },
  {
    in: 'two',
    tok: '2',
    tags: ['rank', 'move'],
    subs: [
      { to: '', cost: 0.34 },
      { to: 'g', cost: 0.63 },
      { to: 'e2', cost: 0.64 },
      { to: '3', cost: 0.69 },
      { to: 'd', cost: 0.87 },
      { to: 'f2', cost: 0.88 },
    ],
  },
  {
    in: 'three',
    tok: '3',
    tags: ['rank', 'move'],
    subs: [
      { to: '', cost: 0.5 },
      { to: '3e', cost: 0.52 },
      { to: 'e3', cost: 0.7 },
      { to: '3a', cost: 0.77 },
      { to: 'f3', cost: 0.78 },
    ],
  },
  {
    in: 'four',
    tok: '4',
    tags: ['rank', 'move'],
    subs: [
      { to: '', cost: 0.5 },
      { to: 'f4', cost: 0.61 },
      { to: 'e4', cost: 0.72 },
      { to: '4f', cost: 0.8 },
      { to: '4a', cost: 0.89 },
    ],
  },
  {
    in: 'five',
    tok: '5',
    tags: ['rank', 'move'],
    subs: [
      { to: '', cost: 0.5 },
      { to: 'f5', cost: 0.59 },
      { to: '5f', cost: 0.62 },
      { to: 'e5', cost: 0.72 },
      { to: '5a', cost: 0.83 },
    ],
  },
  {
    in: 'six',
    tok: '6',
    tags: ['rank', 'move'],
    subs: [
      { to: '', cost: 0.5 },
      { to: 'f6', cost: 0.69 },
      { to: 'e6', cost: 0.77 },
      { to: '6a', cost: 0.79 },
      { to: 'h6', cost: 0.81 },
      { to: 'c6', cost: 0.9 },
    ],
  },
  {
    in: 'seven',
    tok: '7',
    tags: ['rank', 'move'],
    subs: [
      { to: '', cost: 0.5 },
      { to: 'h7', cost: 0.78 },
      { to: 'e7', cost: 0.82 },
      { to: '7f', cost: 0.84 },
      { to: '7a', cost: 0.87 },
      { to: 'f7', cost: 0.87 },
    ],
  },
  {
    in: 'eight',
    tok: '8',
    tags: ['rank', 'move'],
    subs: [
      { to: '', cost: 0.5 },
      { to: 'a', cost: 0.44 },
      { to: 'a8', cost: 0.45 },
      { to: 'h', cost: 0.46 },
      { to: 'e', cost: 0.56 },
      { to: '8a', cost: 0.65 },
      { to: 'e8', cost: 0.73 },
    ],
  },
  {
    in: 'pawn',
    tok: 'P',
    tags: ['role', 'move'],
    subs: [
      { to: '', cost: 0.5 },
      { to: 'Pa', cost: 0.58 },
      { to: 'Pe', cost: 0.76 },
      { to: 'Pf', cost: 0.8 },
    ],
  },
  {
    in: 'knight',
    tok: 'N',
    tags: ['role', 'move'],
    subs: [
      { to: '', cost: 0.45 },
      { to: 'K', cost: 0.56 },
      { to: 'Na', cost: 0.68 },
      { to: 'Nd', cost: 0.82 },
    ],
  },
  {
    in: 'bishop',
    tok: 'B',
    tags: ['role', 'move'],
    subs: [
      { to: '', cost: 0.5 },
      { to: 'Bf', cost: 0.75 },
      { to: 'Ba', cost: 0.78 },
    ],
  },
  {
    in: 'rook',
    tok: 'R',
    tags: ['role', 'move'],
    subs: [
      { to: '', cost: 0.47 },
      { to: 'Ra', cost: 0.62 },
    ],
  },
  {
    in: 'queen',
    tok: 'Q',
    tags: ['role', 'move'],
    subs: [
      { to: '', cost: 0.5 },
      { to: 'Qe', cost: 0.65 },
      { to: '8Q', cost: 0.66 },
    ],
  },
  {
    in: 'king',
    tok: 'K',
    tags: ['role', 'move'],
    subs: [
      { to: '', cost: 0.34 },
      { to: 'Ka', cost: 0.55 },
      { to: 'Kf', cost: 0.59 },
      { to: 'Ke', cost: 0.6 },
      { to: 'N', cost: 0.66 },
    ],
  },
  {
    in: 'castle',
    val: 'castle',
    tok: '!',
    tags: ['move', 'exact'],
    subs: [{ to: '', cost: 0.5 }],
  },
  {
    in: 'short castle',
    val: 'O-O',
    tok: 'r!',
    tags: ['move', 'exact'],
  },
  {
    in: 'king side castle',
    val: 'O-O',
    tok: 'Ks!',
    tags: ['move', 'exact'],
  },
  {
    in: 'castle king side',
    val: 'O-O',
    tok: '!Ks',
    tags: ['move', 'exact'],
  },
  {
    in: 'long castle',
    val: 'O-O-O',
    tok: 't!',
    tags: ['move', 'exact'],
  },
  {
    in: 'castle queen side',
    val: 'O-O-O',
    tok: '!Qs',
    tags: ['move', 'exact'],
  },
  {
    in: 'queen side castle',
    val: 'O-O-O',
    tok: 'Qs!',
    tags: ['move', 'exact'],
  },
  {
    in: 'take',
    val: 'x',
    tok: '#',
    tags: ['move'],
    subs: [{ to: '', cost: 0.5 }],
  },
  {
    in: 'takes',
    val: 'x',
    tok: '$',
    tags: ['move'],
    subs: [
      { to: '', cost: 0.5 },
      { to: '6', cost: 0.49 },
      { to: 'h', cost: 0.63 },
    ],
  },
  {
    in: 'capture',
    val: 'x',
    tok: '%',
    tags: ['move'],
    subs: [{ to: '', cost: 0.5 }],
  },
  {
    in: 'captures',
    val: 'x',
    tok: '&',
    tags: ['move'],
    subs: [
      { to: '', cost: 0.5 },
      { to: '&R', cost: 0.58 },
    ],
  },
  {
    in: 'promote',
    val: '=',
    tok: '(',
    tags: ['move'],
    subs: [
      { to: '', cost: 0.5 },
      { to: '8(', cost: 0.49 },
    ],
  },
  {
    in: 'promotes',
    val: '=',
    tok: ')',
    tags: ['move'],
    subs: [{ to: '', cost: 0.5 }],
  },
  {
    in: 'promotion',
    val: '=',
    tok: '*',
    tags: ['move'],
    subs: [{ to: '', cost: 0.5 }],
  },
  {
    in: 'oops',
    val: 'takeback',
    tok: '+',
    tags: ['command', 'rounds', 'exact'],
    subs: [{ to: '', cost: 0.5 }],
  },
  {
    in: 'undo',
    val: 'takeback',
    tok: '-',
    tags: ['command', 'rounds', 'exact'],
    subs: [{ to: '', cost: 0.5 }],
  },
  {
    in: 'draw',
    val: 'draw',
    tok: '.',
    tags: ['command', 'rounds', 'exact'],
    subs: [{ to: '', cost: 0.5 }],
  },
  {
    in: 'offer draw',
    val: 'draw',
    tok: 'u.',
    tags: ['command', 'rounds', 'exact'],
  },
  {
    in: 'accept draw',
    val: 'draw',
    tok: 'v.',
    tags: ['command', 'rounds', 'exact'],
  },
  {
    in: 'resign',
    val: 'resign',
    tok: '/',
    tags: ['command', 'rounds', 'exact'],
    subs: [{ to: '', cost: 0.5 }],
  },
  {
    in: 'rematch',
    val: 'rematch',
    tok: '0',
    tags: ['command', 'rounds', 'exact'],
    subs: [{ to: '', cost: 0.5 }],
  },
  {
    in: 'clock',
    val: 'clock',
    tok: '9',
    tags: ['command', 'rounds', 'exact'],
    subs: [{ to: '', cost: 0.5 }],
  },
  {
    in: 'opponent',
    val: 'who',
    tok: ':',
    tags: ['command', 'rounds', 'exact'],
    subs: [{ to: '', cost: 0.5 }],
  },
  {
    in: 'next',
    val: 'next',
    tok: ';',
    tags: ['command', 'puzzle', 'exact'],
    subs: [{ to: '', cost: 0.5 }],
  },
  {
    in: 'continue',
    val: 'next',
    tok: '<',
    tags: ['command', 'puzzle', 'exact'],
    subs: [{ to: '', cost: 0.5 }],
  },
  {
    in: 'help',
    val: 'help',
    tok: '=',
    tags: ['command', 'exact'],
    subs: [{ to: '', cost: 0.5 }],
  },
  {
    in: 'stop',
    val: 'stop',
    tok: '>',
    tags: ['command', 'exact'],
    subs: [{ to: '', cost: 0.5 }],
  },
  {
    in: 'yes',
    val: 'yes',
    tok: '?',
    tags: ['choice', 'exact'],
    subs: [
      { to: '', cost: 0.23 },
      { to: 'e', cost: 0.42 },
      { to: 'e8', cost: 0.46 },
    ],
  },
  {
    in: 'confirm',
    val: 'yes',
    tok: '@',
    tags: ['choice', 'exact'],
    subs: [{ to: '', cost: 0.5 }],
  },
  {
    in: 'no',
    val: 'no',
    tok: 'A',
    tags: ['choice', 'exact'],
    subs: [
      { to: '', cost: 0.5 },
      { to: 'N', cost: 0.42 },
    ],
  },
  {
    in: 'clear',
    val: 'no',
    tok: 'C',
    tags: ['choice', 'exact'],
    subs: [{ to: '', cost: 0.5 }],
  },
  {
    in: 'close',
    val: 'no',
    tok: 'D',
    tags: ['choice', 'exact'],
    subs: [{ to: '', cost: 0.5 }],
  },
  {
    in: 'cancel',
    val: 'no',
    tok: 'E',
    tags: ['choice', 'exact'],
    subs: [{ to: '', cost: 0.5 }],
  },
  {
    in: 'abort',
    val: 'no',
    tok: 'F',
    tags: ['choice', 'exact'],
    subs: [{ to: '', cost: 0.5 }],
  },
  {
    in: 'blue',
    val: 'blue',
    tok: 'G',
    tags: ['choice', 'exact'],
    subs: [
      { to: '', cost: 0.5 },
      { to: '2', cost: 0.41 },
      { to: 'b', cost: 0.43 },
    ],
  },
  {
    in: 'green',
    val: 'green',
    tok: 'H',
    tags: ['choice', 'exact'],
    subs: [
      { to: '', cost: 0.5 },
      { to: 'Q', cost: 0.4 },
      { to: '3', cost: 0.43 },
    ],
  },
  {
    in: 'yellow',
    val: 'yellow',
    tok: 'I',
    tags: ['choice', 'exact'],
    subs: [{ to: '', cost: 0.5 }],
  },
  {
    in: 'red',
    val: 'red',
    tok: 'J',
    tags: ['choice', 'exact'],
    subs: [
      { to: '', cost: 0.5 },
      { to: '8', cost: 0.44 },
    ],
  },
  {
    in: 'pink',
    val: 'pink',
    tok: 'L',
    tags: ['choice', 'exact'],
    subs: [{ to: '', cost: 0.5 }],
  },
  {
    in: 'purple',
    val: 'purple',
    tok: 'M',
    tags: ['choice', 'exact'],
    subs: [{ to: '', cost: 0.5 }],
  },
  {
    in: 'orange',
    val: 'orange',
    tok: 'O',
    tags: ['choice', 'exact'],
    subs: [{ to: '', cost: 0.5 }],
  },
  {
    in: 'grey',
    val: 'grey',
    tok: 'S',
    tags: ['choice', 'exact'],
    subs: [{ to: '', cost: 0.5 }],
  },
  {
    in: 'alfa',
    val: 'a',
    tok: 'T',
    tags: ['file', 'move', 'nato'],
    subs: [{ to: '', cost: 0.5 }],
  },
  {
    in: 'bravo',
    val: 'b',
    tok: 'U',
    tags: ['file', 'move', 'nato'],
    subs: [{ to: '', cost: 0.5 }],
  },
  {
    in: 'charlie',
    val: 'c',
    tok: 'V',
    tags: ['file', 'move', 'nato'],
    subs: [{ to: '', cost: 0.5 }],
  },
  {
    in: 'delta',
    val: 'd',
    tok: 'W',
    tags: ['file', 'move', 'nato'],
    subs: [{ to: '', cost: 0.5 }],
  },
  {
    in: 'echo',
    val: 'e',
    tok: 'X',
    tags: ['file', 'move', 'nato'],
    subs: [{ to: '', cost: 0.5 }],
  },
  {
    in: 'foxtrot',
    val: 'f',
    tok: 'Y',
    tags: ['file', 'move', 'nato'],
    subs: [{ to: '', cost: 0.5 }],
  },
  {
    in: 'golf',
    val: 'g',
    tok: 'Z',
    tags: ['file', 'move', 'nato'],
    subs: [{ to: '', cost: 0.5 }],
  },
  {
    in: 'hotel',
    val: 'h',
    tok: '[',
    tags: ['file', 'move', 'nato'],
    subs: [{ to: '', cost: 0.5 }],
  },
  {
    in: 'mate',
    val: '',
    tok: '\\',
    tags: ['move', 'ignore'],
    subs: [
      { to: '', cost: 0.0 },
      { to: 'N', cost: 0.45 },
      { to: 'b', cost: 0.53 },
    ],
  },
  {
    in: 'check',
    val: '',
    tok: ']',
    tags: ['move', 'ignore'],
    subs: [{ to: '', cost: 0.0 }],
  },
  {
    in: 'puzzle',
    val: '',
    tok: '^',
    tags: ['ignore'],
    subs: [{ to: '', cost: 0.0 }],
  },
  {
    in: 'and',
    val: '',
    tok: '_',
    tags: ['ignore'],
    subs: [{ to: '', cost: 0.0 }],
  },
  {
    in: 'oh',
    val: '',
    tok: '`',
    tags: ['ignore'],
    subs: [{ to: '', cost: 0.0 }],
  },
  {
    in: 'um',
    val: '',
    tok: 'i',
    tags: ['ignore'],
    subs: [{ to: '', cost: 0.0 }],
  },
  {
    in: 'uh',
    val: '',
    tok: 'j',
    tags: ['ignore'],
    subs: [{ to: '', cost: 0.0 }],
  },
  {
    in: 'hmm',
    val: '',
    tok: 'k',
    tags: ['ignore'],
    subs: [{ to: '', cost: 0.0 }],
  },
  {
    in: 'huh',
    val: '',
    tok: 'l',
    tags: ['ignore'],
    subs: [{ to: '', cost: 0.0 }],
  },
  {
    in: 'his',
    val: '',
    tok: 'm',
    tags: ['ignore'],
    subs: [{ to: '', cost: 0.0 }],
  },
  {
    in: 'her',
    val: '',
    tok: 'n',
    tags: ['ignore'],
    subs: [{ to: '', cost: 0.0 }],
  },
  {
    in: 'the',
    val: '',
    tok: 'o',
    tags: ['ignore'],
    subs: [{ to: '', cost: 0.0 }],
  },
  {
    in: 'their',
    val: '',
    tok: 'p',
    tags: ['ignore'],
    subs: [{ to: '', cost: 0.0 }],
  },
  {
    in: 'training',
    val: '',
    tok: 'q',
    tags: ['ignore'],
    subs: [{ to: '', cost: 0.0 }],
  },
  {
    in: 'short',
    tok: 'r',
    tags: ['part'],
    subs: [{ to: '', cost: 0.5 }],
  },
  {
    in: 'side',
    tok: 's',
    tags: ['part'],
    subs: [{ to: '', cost: 0.5 }],
  },
  {
    in: 'long',
    tok: 't',
    tags: ['part'],
    subs: [
      { to: '', cost: 0.5 },
      { to: '1', cost: 0.4 },
      { to: 'P', cost: 0.41 },
    ],
  },
  {
    in: 'offer',
    tok: 'u',
    tags: ['part'],
    subs: [{ to: '', cost: 0.5 }],
  },
  {
    in: 'accept',
    tok: 'v',
    tags: ['part'],
    subs: [{ to: '', cost: 0.5 }],
  },
];
