const TETROMINOS = {
  I: [['','','',''], ['i','i','i','i'], ['','','',''], ['','','','']],
  J: [['j','',''], ['j','j','j'], ['','','']],
  L: [['','','l'], ['l','l','l'], ['','','']],
  O: [['o','o'], ['o','o']],
  S: [['','s','s'], ['s','s',''], ['','','']],
  T: [['','t',''], ['t','t','t'], ['','','']],
  Z: [['z','z',''], ['','z','z'], ['','','']],
}

const TETROMINOS_NEXT_QUEUE = {
  I: {
    shape: [['i','i','i','i']],
    gridColumn: 4,
    gridRow: 1,
  },
  J: {
    shape: [['j','',''], ['j','j','j']],
    gridColumn: 3,
    gridRow: 2
  },
  L: {
    shape: [['','','l'], ['l','l','l']],
    gridColumn: 3,
    gridRow: 2,
  },
  O: {
    shape: [['o','o'], ['o','o']],
    gridColumn: 2,
    gridRow: 2,
  },
  S: {
    shape: [['','s','s'], ['s','s','']],
    gridColumn: 3,
    gridRow: 2,
  },
  T: {
    shape: [['','t',''], ['t','t','t']],
    gridColumn: 3,
    gridRow: 2,
  },
  Z: {
    shape: [['z','z',''], ['','z','z']],
    gridColumn: 3,
    gridRow: 2,
  },
}

export { TETROMINOS, TETROMINOS_NEXT_QUEUE };

