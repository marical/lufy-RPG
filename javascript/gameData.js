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
var globalData;
globalData = {
  mapCol: 11,
  mapRow: 11,
  size: 32,
  floor: 7, // 7
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
      [0, 0, 0, 0, 0, "goods_0_1", 0, 0, 0, 0, 0],
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
      ["goods_0_1", 0, 0, "monster0", "monster1", "monster0", 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      ["goods_2_0", 0, "monster10", "goods_1_0", 0, 0, "goods_2_0", "goods_3_0", "goods_2_0", 0, 0],
      ["goods_3_0", "monster10", "goods_0_2", 0, 0, 0, "goods_2_0", "goods_3_0", "goods_2_0", 0, 0],
      [0, "goods_1_0", 0, 0, 0, 0, 0, 0, "monster2", 0, 0],
      ["goods_3_0", "monster11", 0, 0, 0, "goods_1_0", "monster4", "monster0", "monster14", 0, 0],
      ["goods_0_2", 0, "goods_3_1", 0, 0, 0, 0, 0, 0, 0, 0],
      [0, "goods_1_0", 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, "monster11", 0, 0, 0, "goods_1_2", 0, 0, 0, "goods_1_0", 0],
      ["goods_2_0", "goods_2_1", "goods_3_0", 0, "goods_3_2", 0, 0, 0, "goods_3_0", "monster8", "goods_3_1"],
      ["goods_2_0", "goods_2_3", "goods_3_0", 0, 0, "goods_0_0", 0, 0, "goods_3_0", "goods_3_0", "goods_3_0"]
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
      ["goods_0_0", 0, 0, "monster19", 0, 0, "goods_0_2", "goods_0_3", "goods_3_0", "goods_3_2", 0],
      [0, 0, "goods_0_3", 0, "goods_2_1", 0, "goods_0_2", "goods_0_3", "goods_3_0", "goods_3_1", 0],
      [0, 0, "goods_3_0", 0, "goods_3_0", 0, "goods_0_2", "goods_0_3", "goods_3_0", "monster18", 0],
      [0, 0, "goods_3_0", 0, "goods_3_0", 0, 0, 0, 0, "goods_1_0", 0],
      [0, 0, 0, 0, 0, 0, 0, "goods_1_0", 0, 0, 0],
      [0, 0, "goods_1_0", 0, 0, "goods_1_0", 0, 0, "goods_1_0", 0, 0],
      [0, "goods_1_3", 0, 0, 0, 0, 0, 0, "monster18", 0, 0],
      [0, 0, "goods_1_0", 0, 0, "goods_1_1", 0, "goods_4_0", 0, "goods_4_0", 0],
      [0, 0, "goods_3_0", 0, "goods_2_1", "goods_2_0", 0, 0, 0, 0, 0],
      [0, 0, "goods_3_0", 0, "goods_2_1", "goods_2_0", 0, 0, 0, 0, 0],
      ["goods_0_1", 0, "goods_0_2", 0, "goods_2_1", "goods_2_0", 0, "npc0", 0, "npc1", 0]
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
      ["goods_4_1", "monster1", "goods_3_0", 0, "goods_5_1", "npc4", "goods_5_2", 0, 0, 0, 0],
      ["monster1", "goods_3_0", 0, 0, 0, 0, 0, 0, 0, "monster14", 0],
      ["goods_3_0", "monster10", 0, 0, 0, "goods_1_0", 0, 0, 0, 0, 0],
      [0, "goods_1_0", 0, 0, 0, "monster10", 0, 0, "goods_3_0", 0, "monster1"],
      [0, 0, 0, 0, 0, 0, 0, 0, "goods_3_0", 0, "monster14"],
      ["monster0", 0, 0, "monster14", "monster1", "monster14", 0, 0, "goods_3_0", 0, "monster1"],
      ["monster0", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, "goods_1_0", 0, 0, 0],
      [0, 0, 0, 0, "monster14", 0, "monster1", 0, "monster1", 0, 0],
      [0, 0, 0, 0, 0, 0, "goods_0_3", "monster14", "goods_3_0", 0, 0],
      ["goods_0_0", 0, 0, 0, 0, 0, "goods_0_2", "goods_2_1", "goods_3_0", 0, "goods_0_1"]
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
      ["goods_1_0", 0, "goods_1_0", 0, 0, 0, 0, 0, "goods_1_0", 0, "goods_1_0"],
      [0, 0, 0, 0, 0, "goods_4_0", 0, 0, 0, 0, 0],
      [0, 0, "monster10", 0, "monster15", "monster16", "monster15", 0, "monster10", 0, 0],
      ["monster14", 0, "goods_2_0", 0, "goods_0_3", "monster15", "goods_0_3", 0, "goods_2_0", 0, "monster14"],
      ["monster14", 0, "goods_2_0", 0, 0, "goods_1_2", 0, 0, "goods_2_0", 0, "monster14"],
      ["monster1", 0, 0, 0, "monster8", "monster20", "monster8", 0, 0, 0, "monster1"],
      [0, 0, 0, 0, "goods_0_2", "monster8", "goods_0_2", 0, 0, 0, 0],
      [0, 0, 0, 0, 0, "goods_1_1", 0, 0, 0, 0, 0],
      [0, 0, 0, 0, "goods_3_0", 0, "goods_3_0", 0, 0, 0, 0],
      ["goods_0_1", 0, 0, "monster2", 0, 0, 0, "monster2", 0, 0, "goods_0_0"]
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
      ["goods_3_3", 0, "goods_2_0", 0, "goods_2_1", "monster4", 0, 0, "monster4", "goods_3_0", "goods_3_1"],
      [0, 0, "goods_0_2", 0, "monster4", 0, 0, 0, 0, "monster4", "goods_3_0"],
      ["monster15", 0, 0, 0, "monster11", 0, 0, 0, "goods_1_0", 0, 0],
      [0, "goods_1_0", "monster4", 0, "goods_4_2", "monster11", 0, 0, "monster8", "monster11", "npc1"],
      ["monster15", 0, 0, 0, 0, 0, 0, 0, 0, 0, "monster11"],
      ["goods_0_2", 0, 0, 0, 0, "monster14", "monster10", 0, 0, 0, 0],
      ["goods_0_3", 0, 0, "monster2", 0, 0, 0, 0, 0, 0, 0],
      [0, "npc0", 0, "monster2", 0, 0, 0, 0, "monster8", "monster20", 0],
      [0, 0, 0, "monster14", 0, "goods_1_0", 0, "goods_1_1", 0, "goods_1_0", 0],
      [0, 0, 0, 0, 0, "monster14", 0, "goods_0_3", "goods_1_0", 0, 0],
      ["goods_0_0", 0, "monster14", 0, 0, 0, 0, "goods_3_0", 0, "goods_0_1", 0]
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
      ["goods_4_3", "monster12", 0, "goods_0_3", 0, "goods_3_0", "monster3", "goods_5_0", 0, "goods_2_1", "goods_2_1"],
      ["monster12", "goods_3_0", 0, "goods_0_2", 0, 0, "goods_3_0", "monster3", 0, 'monster23', "goods_2_1"],
      ["goods_3_0", "monster16", "goods_1_1", 0, "goods_1_1", "monster16", 0, "goods_3_0", 0, 0, 'monster23'],
      [0, 0, 0, "monster20", 0, 0, 0, 0, 0, "monster7", 0],
      [0, 0, 0, "goods_1_2", 0, 0, 0, 0, 0, "goods_1_0", 0],
      [0, 0, "monster5", 0, "goods_3_0", "goods_3_0", "goods_3_0", 0, "monster5", 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, "monster15", "goods_1_0", "monster15", 0, 0, 0, 0, 0, 0],
      [0, 0, "goods_1_0", 0, "goods_1_0", 0, 0, 0, 0, "goods_1_1", 0],
      [0, 0, "monster15", 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, "goods_0_1", 0, "goods_1_0", "goods_1_0", 0, "goods_0_0", 0]
    ]
  }, {
    playerPosition: {
      x: 5,
      y: 10
    },
    map: [
      [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
      [1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1],
      [1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1],
      [0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0],
      [0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0],
      [0, 1, 0, 0, 1, 0, 1, 0, 0, 1, 0],
      [0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0],
      [0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]
    ],
    things: [
      ['goods_0_1', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 'monster16', 0, 'goods_1_1', 0, 'monster12', 0, 0, 0],
      [0, 0, 'monster16', 'goods_0_3', 0, 'monster24', 0, 'goods_0_2', 'monster12', 0, 0],
      [0, 0, 0, 0, 0, 'goods_4_0', 0, 0, 0, 0, 0],
      [0, 0, 'goods_1_1', 'monster24', 'goods_4_0', 0, 'goods_4_0', 'monster24', 'goods_1_1', 0, 0],
      [0, 0, 0, 0, 0, 'goods_4_0', 0, 0, 0, 0, 0],
      [0, 0, 'goods_2_0', 'goods_0_2', 0, 'monster24', 0, 'goods_0_3', 'goods_2_0', 0, 0],
      [0, 0, 'goods_3_0', 'goods_2_0', 0, 'goods_1_1', 0, 'goods_2_0', 'goods_3_0', 0, 0],
      [0, 0, 0, 'goods_3_1', 'goods_3_1', 'goods_2_1', 'goods_3_1', 'goods_3_1', 0, 0, 0],
      [0, 0, 0, 0, 0, 'goods_1_2', 0, 0, 0, 0, 0],
      [0, 0, 0, 'goods_1_1', 'goods_0_0', 0, 0, 'goods_1_1', 0, 0, 0]
    ]
  }]
};
