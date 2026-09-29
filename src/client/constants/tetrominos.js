const TETROMINO_DEFINITIONS = {
  I: [['','','',''], ['i','i','i','i'], ['','','',''], ['','','','']],
  J: [['j','',''], ['j','j','j'], ['','','']],
  L: [['','','l'], ['l','l','l'], ['','','']],
  O: [['o','o'], ['o','o']],
  S: [['','s','s'], ['s','s',''], ['','','']],
  T: [['','t',''], ['t','t','t'], ['','','']],
  Z: [['z','z',''], ['','z','z'], ['','','']],
}

const PREVIEW_TETROMINO_CONFIGS = {
  I: {
    matrix: [['i','i','i','i']],
    columns: 4,
    rows: 1,
  },
  J: {
    matrix: [['j','',''], ['j','j','j']],
    columns: 3,
    rows: 2
  },
  L: {
    matrix: [['','','l'], ['l','l','l']],
    columns: 3,
    rows: 2,
  },
  O: {
    matrix: [['o','o'], ['o','o']],
    columns: 2,
    rows: 2,
  },
  S: {
    matrix: [['','s','s'], ['s','s','']],
    columns: 3,
    rows: 2,
  },
  T: {
    matrix: [['','t',''], ['t','t','t']],
    columns: 3,
    rows: 2,
  },
  Z: {
    matrix: [['z','z',''], ['','z','z']],
    columns: 3,
    rows: 2,
  },
}

export { TETROMINO_DEFINITIONS , PREVIEW_TETROMINO_CONFIGS };

