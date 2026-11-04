const TETROMINOS = {
  I: {
    matrix: [
      [0, 0, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ],
    preview: {
      matrix: [
        [1, 1, 1, 1]
      ],
      columns: 4,
      rows: 1,
    },
    color: 'cyan',
  },
  J: {
    matrix: [
      [1,0,0],
      [1, 1, 1],
      [0, 0, 0]
    ],
    preview: {
      matrix: [
        [1, 0, 0],
        [1, 1, 1]
      ],
      columns: 3,
      rows: 2,
    },
    color: 'blue',
  },
  L: {
    matrix: [
      [0, 0, 1],
      [1, 1, 1],
      [0, 0, 0]
    ],
    preview: {
      matrix: [
        [0, 0, 1],
        [1, 1, 1]
      ],
      columns: 3,
      rows: 2,
    },
    color: 'orange',
  },
  O: {
    matrix: [
      [1, 1],
      [1, 1]
    ],
    preview: {
      matrix: [
        [1, 1],
        [1, 1]
      ],
      columns: 2,
      rows: 2,
    },
    color: 'yellow',
  },
  S: {
    matrix: [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0]
    ],
    preview: {
      matrix: [
        [0, 1, 1],
        [1, 1,0]
      ],
      columns: 3,
      rows: 2,
    },
    color: 'green',
  },
  T: {
    matrix: [
      [0, 1, 0],
      [1, 1, 1],
      [0, 0, 0]
    ],
    preview: {
      matrix: [
        [0, 1, 0],
        [1, 1, 1]
      ],
      columns: 3,
      rows: 2,
    },
    color: 'purple'
  },
  Z: {
    matrix: [
      [1, 1,0],
      [0, 1, 1],
      [0, 0, 0]
    ],
    preview: {
      matrix: [
        [1, 1, 0],
        [0, 1, 1]
      ],
      columns: 3,
      rows: 2,
    },
    color: 'red'
  },
}

export default TETROMINOS;
