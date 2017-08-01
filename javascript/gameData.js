/*
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
 [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
 * */
// function test (a, b) {
//     const c = []
//     for (var index = 0; index < a.length; index++) {
//         c[index] = []
//         for (var i = 0; i < a[index].length; i++) {
//             c[index][i] = a[index][i] === 0 ? b[index][i] : a[index][i]
//         }
//     }
//     return c
// }
var globalData;
globalData = {
  mapCol: 11,
  mapRow: 11,
  size: 32,
  floor: 0, // 5
  playerInfo: {
    HP: 1000,
    ATK: 20,
    DEF: 5,
    status: 'ArrowDown',
    key: {
      yellow: 1,
      blue: 1,
      red: 1
    }
  },
  data: [{
    playerPosition: {
      x: 5,
      y: 10
    },
    map: [
      [1, 2, 2, 2, 2, 0, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 0, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 0, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 0, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 0, 2, 2, 2, 2, 1],
      [1, 2, 2, 2, 2, 0, 2, 2, 2, 2, 1],
      [1, 1, 2, 2, 2, 0, 2, 2, 2, 1, 1],
      [1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1],
      [3, 1, 3, 1, 0, 0, 0, 1, 3, 1, 3],
      [3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3],
      [3, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3]
    ],
    things: [
      [0, 0, 0, 0, 0, "upFloor", 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, "npc3", 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
  }, {
    playerPosition: {
      x: 5,
      y: 9
    },
    map: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
      [0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0],
      [1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0],
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0],
      [0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0],
      [1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1],
      [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0]
    ],
    things: [
      ["upFloor", 0, 0, "monster0", "monster1", "monster0", 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ["agentia0", 0, "monster12", "door0", 0, 0, "agentia0", "key0", "agentia0", 0, 0],
      ["key0", "monster12", "gem0", 0, 0, 0, "agentia0", "key0", "agentia0", 0, 0],
      [0, "door0", 0, 0, 0, 0, 0, 0, "monster2", 0, 0],
      ["key0", "monster13", 0, 0, 0, "door0", "monster4", "monster0", "monster16", 0, 0],
      ["gem1", 0, "key1", 0, 0, 0, 0, 0, 0, 0, 0],
      [0, "door0", 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, "monster13", 0, 0, 0, "door2", 0, 0, 0, "door0", 0],
      ["agentia0", "agentia1", "key0", 0, "key2", 0, 0, 0, "key0", "monster8", "key1"],
      ["agentia0", "prop0", "key0", 0, 0, "downFloor", 0, 0, "key0", "key0", "key0"]
    ]
  }, {
    playerPosition: {
      x: 0,
      y: 1
    },
    map: [
      [0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1],
      [0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1],
      [0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1],
      [0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
      [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1],
      [0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1],
      [0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
      [0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1],
      [0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1]
    ],
    things: [
      ["downFloor", 0, 0, "monster23", 0, 0, "gem0", "gem1", "key0", "key2", 0],
      [0, 0, "gem1", 0, "agentia1", 0, "gem0", "gem1", "key0", "key1", 0],
      [0, 0, "key0", 0, "key0", 0, "gem0", "gem1", "key0", "monster22", 0],
      [0, 0, "key0", 0, "key0", 0, 0, 0, 0, "door0", 0],
      [0, 0, 0, 0, 0, 0, 0, "door0", 0, 0, 0],
      [0, 0, "door0", 0, 0, "door0", 0, 0, "door0", 0, 0],
      [0, "door3", 0, 0, 0, 0, 0, 0, "monster22", 0, 0],
      [0, 0, "door0", 0, 0, "door1", 0, "door4", 0, "door4", 0],
      [0, 0, "key0", 0, "agentia1", "agentia0", 0, 0, 0, 0, 0],
      [0, 0, "key0", 0, "agentia1", "agentia0", 0, 0, 0, 0, 0],
      ["upFloor", 0, "gem0", 0, "agentia1", "agentia0", 0, "npc0", 0, "npc1", 0]
    ]
  }, {
    playerPosition: {
      x: 1,
      y: 10
    },
    map: [
      [0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1],
      [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
      [0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 0],
      [1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0],
      [0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0],
      [0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0],
      [0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0],
      [0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0],
      [1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0],
      [1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
      [0, 0, 1, 1, 1, 1, 0, 0, 0, 1, 0]
    ],
    things: [
      ["equip0", "monster1", "key0", 0, "shop0", "npc4", "shop1", 0, 0, 0, 0],
      ["monster1", "key0", 0, 0, 0, 0, 0, 0, 0, "monster16", 0],
      ["key0", "monster12", 0, 0, 0, "door0", 0, 0, 0, 0, 0],
      [0, "door0", 0, 0, 0, "monster12", 0, 0, "key0", 0, "monster1"],
      [0, 0, 0, 0, 0, 0, 0, 0, "key0", 0, "monster16"],
      ["monster0", 0, 0, "monster16", "monster1", "monster16", 0, 0, "key0", 0, "monster1"],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, "door0", 0, 0, 0],
      [0, 0, 0, 0, "monster16", 0, "monster1", 0, "monster1", 0, 0],
      [0, 0, 0, 0, 0, 0, "gem1", "monster16", "key0", 0, 0],
      ["downFloor", 0, 0, 0, 0, 0, "gem0", "agentia1", "key0", 0, "upFloor"]
    ]
  }, {
    playerPosition: {
      x: 10,
      y: 9
    },
    map: [
      [0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0],
      [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
      [0, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0]
    ],
    things: [
      [0, "monster2", 0, 0, 0, "npc2", 0, 0, 0, "monster2", 0],
      ["door0", 0, "door0", 0, 0, 0, 0, 0, "door0", 0, "door0"],
      [0, 0, 0, 0, 0, "door4", 0, 0, 0, 0, 0],
      [0, 0, "monster12", 0, "monster17", "monster18", "monster17", 0, "monster12", 0, 0],
      ["monster16", 0, "agentia0", 0, "gem1", "monster17", "gem1", 0, "agentia0", 0, "monster16"],
      ["monster16", 0, "agentia0", 0, 0, "door2", 0, 0, "agentia0", 0, "monster16"],
      ["monster1", 0, 0, 0, "monster8", "monster24", "monster8", 0, 0, 0, "monster1"],
      [0, 0, 0, 0, "gem0", "monster8", "gem0", 0, 0, 0, 0],
      [0, 0, 0, 0, 0, "door1", 0, 0, 0, 0, 0],
      [0, 0, 0, 0, "key0", 0, "key0", 0, 0, 0, 0],
      ["upFloor", 0, 0, "monster2", 0, 0, 0, "monster2", 0, 0, "downFloor"]
    ]
  }, {
    playerPosition: {
      x: 0,
      y: 9
    },
    map: [
      [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1],
      [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0],
      [0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0],
      [1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1],
      [0, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1]
    ],
    things: [
      ["key3", 0, "agentia0", 0, "agentia1", "monster4", 0, 0, "monster4", "key0", "key1"],
      [0, 0, "gem0", 0, "monster4", 0, 0, 0, 0, "monster4", "key0"],
      ["monster17", 0, 0, 0, "monster13", 0, 0, 0, "door0", 0, 0],
      [0, "door0", "monster4", 0, "equip1", "monster13", 0, 0, "monster8", "monster13", "npc1"],
      ["monster17", 0, 0, 0, 0, 0, 0, 0, 0, "monster13", 0],
      ["gem0", 0, 0, 0, 0, "monster16", "monster12", 0, 0, 0, 0],
      ["gem1", 0, 0, "monster2", 0, 0, 0, 0, 0, 0, 0],
      [0, "npc0", 0, "monster2", 0, 0, 0, 0, "monster8", "monster24", 0],
      [0, 0, 0, "monster16", 0, "door0", 0, "door1", 0, "door0", 0],
      [0, 0, 0, 0, 0, "monster16", 0, "gem1", "door0", 0, 0],
      ["downFloor", 0, "monster16", 0, 0, 0, 0, "key0", 0, "upFloor", 0]
    ]
  }, {
    playerPosition: {
      x: 9,
      y: 9
    },
    map: [
      [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0],
      [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0],
      [1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
      [0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 1],
      [0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1]
    ],
    things: [
      ["prop1", 0, 0, "gem1", 0, "key0", 0, "article0", 0, "agentia0", "agentia0"],
      [0, "key0", 0, "gem0", 0, 0, "key0", 0, 0, 0, "agentia0"],
      ["key0", "monster18", "door1", 0, "door1", "monster18", 0, "key0", 0, 0, 0],
      [0, 0, 0, "monster24", 0, 0, 0, 0, 0, "monster7", 0],
      [0, 0, 0, "door2", 0, 0, 0, 0, 0, "door0", 0],
      [0, 0, "monster5", 0, "key0", "key0", "key0", 0, "monster5", 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, "monster17", "door0", "monster17", 0, 0, 0, 0, 0, 0],
      [0, 0, "door0", 0, "door0", 0, 0, 0, 0, "door1", 0],
      [0, 0, "monster17", 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, "upFloor", 0, "door0", "door0", 0, "downFloor", 0]
    ]
  }]
};
