/*
 * monsterType 为当前图片的序列号 用于mainjs的动画指定
 * monsterInfo 按图片区分怪物信息 并且给定属性
 * character 存储需要绘制的人物怪物等的信息
 * 其中 ****Type 对应的是素材中的位置
 * 所以对应雪碧图的为对象{x,y}
 * name 对应的是加载图片后的命名
 * */
/*
 * key
 * x, y
 * 0,0 普通黄钥匙
 * 0,1 普通蓝钥匙
 * 0,2 普通红钥匙
 *
 * */
/*
 *
 *
 * [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
 *
 * */
var globalData = {
    mapCol: 11,
    mapRow: 11,
    size: 32,
    floor: 3,
    playerInfo: {
        LifeValue: 1000,
        Aggressivity: 20,
        DefenseForce: 5,
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
        chara: [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
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
        ],
        goods: [
            [0, 0, 0, 0, 0, 'upFloor', 0, 0, 0, 0, 0],
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
        chara: [
            [0, 0, 0, 'monster0', 'monster1', 'monster0', 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 'monster12', 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 'monster12', 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 'monster2', 0, 0],
            [0, 'monster13', 0, 0, 0, 0, 'monster4', 'monster0', 'monster16', 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 'monster13', 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 'monster8', 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ],
        goods: [
            ['upFloor', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ['agentia0', 0, 0, 'door0', 0, 0, 'agentia0', 'key0', 'agentia0', 0, 0],
            ['key0', 0, 'gem0', 0, 0, 0, 'agentia0', 'key0', 'agentia0', 0, 0],
            [0, 'door0', 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ['key0', 0, 0, 0, 0, 'door0', 0, 0, 0, 0, 0],
            ['gem1', 0, 'key1', 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 'door0', 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 'door2', 0, 0, 0, 'door0', 0],
            ['agentia0', 'agentia1', 'key0', 0, 'key2', 0, 0, 0, 'key0', 0, 'key1'],
            ['agentia0', 'prop0', 'key0', 0, 0, 'downFloor', 0, 0, 'key0', 'key0', 'key0'],
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
        goods: [
            ['downFloor', 0, 0, 0, 0, 0,  'gem0', 'gem1', 'key0', 'key2',0],
            [0, 0, 'gem1', 0, 'agentia1',  0, 'gem0', 'gem1', 'key0', 'key1',0],
            [0, 0, 'key0', 0, 'key0', 0,  'gem0', 'gem1', 'key0', 0,0],
            [0, 0, 'key0', 0, 'key0',  0, 0, 0, 0, 'door0',0],
            [0, 0, 0, 0, 0, 0, 0, 'door0', 0, 0, 0],
            [0, 0, 'door0', 0, 0, 'door0', 0, 0, 'door0', 0, 0],
            [0, 'door3', 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 'door0', 0, 0, 'door1', 0, 'door4', 0, 'door4', 0],
            [0, 0, 'key0', 0, 'agentia1', 'agentia0', 0, 0, 0, 0, 0],
            [0, 0, 'key0', 0, 'agentia1', 'agentia0', 0, 0, 0, 0, 0],
            ['upFloor', 0, 'gem0', 0, 'agentia1', 'agentia0', 0, 0, 0, 0, 0]
        ],
        chara: [
            [0, 0, 0, 'monster23', 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 'monster22', 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 'monster22', 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 'npc0', 0,'npc1', 0]
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
        goods: [
            ['equip0', 0, 'key0', 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 'key0', 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ['key0', 0, 0, 0, 0, 'door0', 0, 0, 0, 0, 0],
            [0, 'door0', 0, 0, 0, 0, 0, 0, 'key0', 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 'key0', 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 'key0', 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 'door0', 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 'gem1', 0, 'key0', 0, 0],
            ['downFloor', 0, 0, 0, 0, 0, 'gem0', 'agentia1', 'key0', 0, 'upFloor']
        ],
        chara: [
            [0, 'monster1', 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ['monster1', 0, 0, 0, 0, 0, 0, 0, 0, 'monster16', 0],
            [0, 'monster12', 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 'monster12', 0, 0, 0, 0, 'monster1'],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'monster16'],
            ['monster0', 0, 0, 'monster16', 'monster1', 'monster16', 0, 0, 0, 0, 'monster1'],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 'monster16', 0, 'monster1', 0, 'monster1', 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 'monster16', 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
        ]
    }]
}
