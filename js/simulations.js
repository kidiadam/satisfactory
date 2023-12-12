const simulations = [
  [
    {
      label: "高級",
      select: {
        id: "c-5-1",
        name: "重型模型框架-2",
        product: [
          {
            name: "重型模型框架",
            amount: 2.8,
          },
        ],
        cost: [
          {
            name: "模型框架",
            amount: 7.5,
          },
          {
            name: "鋼筋混凝土",
            amount: 9.4,
          },
          {
            name: "鋼管",
            amount: 33.75,
          },
          {
            name: "混凝土",
            amount: 21,
          },
        ],
      },
      build: 2,
    },
    {
      select: {
        id: "b-4-1",
        name: "模型框架-2",
        product: [
          {
            name: "模型框架",
            amount: 5,
          },
        ],
        cost: [
          {
            name: "螺絲",
            amount: 140,
          },
          {
            name: "強化鐵板",
            amount: 7.5,
          },
        ],
      },
      build: 4,
      label: "中級",
    },
    {
      select: {
        id: "b-1-1",
        name: "強化鐵板-2",
        product: [
          {
            name: "強化鐵板",
            amount: 15,
          },
        ],
        cost: [
          {
            name: "鐵板",
            amount: 90,
          },
          {
            name: "螺絲",
            amount: 250,
          },
        ],
      },
      build: 2,
      label: "中級",
    },
    {
      select: {
        id: "a-4-1",
        name: "螺絲-2",
        product: [
          {
            name: "螺絲",
            amount: 50,
          },
        ],
        cost: [
          {
            name: "鐵錠",
            amount: 12.5,
          },
        ],
      },
      build: 22,
      label: "初級",
    },
    {
      select: {
        id: "b-6",
        name: "鋼筋混凝土",
        product: [
          {
            name: "鋼筋混凝土",
            amount: 6,
          },
        ],
        cost: [
          {
            name: "鋼樑",
            amount: 24,
          },
          {
            name: "混凝土",
            amount: 30,
          },
        ],
      },
      build: 3.5,
      label: "中級",
    },
    {
      select: {
        id: "a-6",
        name: "鋼樑",
        product: [
          {
            name: "鋼樑",
            amount: 15,
          },
        ],
        cost: [
          {
            name: "鋼錠",
            amount: 60,
          },
        ],
      },
      build: 9,
      label: "初級",
    },
    {
      select: {
        id: "a-7",
        name: "鋼管",
        product: [
          {
            name: "鋼管",
            amount: 20,
          },
        ],
        cost: [
          {
            name: "鋼錠",
            amount: 30,
          },
        ],
      },
      build: 7,
      label: "初級",
    },
    {
      select: {
        id: "a-5-2",
        name: "鋼錠",
        product: [
          {
            name: "鋼錠",
            amount: 60,
          },
        ],
        cost: [
          {
            name: "鐵錠",
            amount: 40,
          },
          {
            name: "煤炭",
            amount: 40,
          },
        ],
      },
      build: 13,
      label: "初級",
    },
    {
      select: {
        id: "b-2-1",
        name: "轉子-2",
        product: [
          {
            name: "轉子",
            amount: 5,
          },
        ],
        cost: [
          {
            name: "鋼管",
            amount: 10,
          },
          {
            name: "銅線",
            amount: 30,
          },
        ],
      },
      build: 2,
      label: "中級",
    },
    {
      select: {
        id: "b-3",
        name: "定子",
        product: [
          {
            name: "定子",
            amount: 5,
          },
        ],
        cost: [
          {
            name: "鋼管",
            amount: 15,
          },
          {
            name: "銅線",
            amount: 40,
          },
        ],
      },
      build: 3,
      label: "中級",
    },
    {
      select: {
        id: "c-3",
        name: "馬達",
        product: [
          {
            name: "馬達",
            amount: 5,
          },
        ],
        cost: [
          {
            name: "轉子",
            amount: 10,
          },
          {
            name: "定子",
            amount: 10,
          },
        ],
      },
      build: 1,
      label: "高級",
    },
    {
      select: {
        id: "c-1",
        name: "自動化線路",
        product: [
          {
            name: "自動化線路",
            amount: 2.5,
          },
        ],
        cost: [
          {
            name: "定子",
            amount: 2.5,
          },
          {
            name: "電纜",
            amount: 50,
          },
        ],
      },
      build: 1,
      label: "高級",
    },
    {
      select: {
        id: "c-2",
        name: "多功能骨架",
        product: [
          {
            name: "多功能骨架",
            amount: 5,
          },
        ],
        cost: [
          {
            name: "模型框架",
            amount: 2.5,
          },
          {
            name: "鋼樑",
            amount: 30,
          },
        ],
      },
      build: 1,
      label: "高級",
    },
    {
      select: {
        id: "a-2",
        name: "鐵板",
        product: [
          {
            name: "鐵板",
            amount: 20,
          },
        ],
        cost: [
          {
            name: "鐵錠",
            amount: 30,
          },
        ],
      },
      build: 9,
      label: "初級",
    },
    {
      select: {
        id: "a-10",
        name: "電纜",
        product: [
          {
            name: "電纜",
            amount: 30,
          },
        ],
        cost: [
          {
            name: "銅線",
            amount: 60,
          },
        ],
      },
      build: 2,
      label: "初級",
    },
    {
      select: {
        id: "a-9",
        name: "銅線",
        product: [
          {
            name: "銅線",
            amount: 30,
          },
        ],
        cost: [
          {
            name: "銅錠",
            amount: 15,
          },
        ],
      },
      build: 10,
      label: "初級",
    },
  ],
  [
    {
      select: {
        id: "a-18",
        name: "氧化鋁溶液",
        product: [
          {
            name: "氧化鋁溶液",
            amount: 120,
          },
          {
            name: "石英砂",
            amount: 50,
          },
        ],
        cost: [
          {
            name: "鋁土礦",
            amount: 120,
          },
          {
            name: "水",
            amount: 180,
          },
        ],
      },
      build: 8,
      label: "初級",
    },
    {
      select: {
        id: "a-19-1",
        name: "鋁碎塊-2",
        product: [
          {
            name: "鋁碎塊",
            amount: 300,
          },
          {
            name: "水",
            amount: 105,
          },
        ],
        cost: [
          {
            name: "氧化鋁溶液",
            amount: 180,
          },
          {
            name: "油焦",
            amount: 60,
          },
        ],
      },
      build: 5,
      label: "初級",
    },
    {
      select: {
        id: "a-20-1",
        name: "鋁錠-2",
        product: [
          {
            name: "鋁錠",
            amount: 30,
          },
        ],
        cost: [
          {
            name: "鋁碎塊",
            amount: 60,
          },
        ],
      },
      build: 7,
      label: "初級",
    },
    {
      select: {
        id: "a-20",
        name: "鋁錠",
        product: [
          {
            name: "鋁錠",
            amount: 60,
          },
        ],
        cost: [
          {
            name: "鋁碎塊",
            amount: 90,
          },
          {
            name: "石英砂",
            amount: 75,
          },
        ],
      },
      build: 12,
      label: "初級",
    },
    {
      select: {
        id: "b-9",
        name: "鋁製外殼",
        product: [
          {
            name: "鋁製外殼",
            amount: 60,
          },
        ],
        cost: [
          {
            name: "鋁錠",
            amount: 90,
          },
        ],
      },
      build: 7,
      label: "中級",
    },
    {
      select: {
        id: "b-10",
        name: "鍍鋁板",
        product: [
          {
            name: "鍍鋁板",
            amount: 30,
          },
        ],
        cost: [
          {
            name: "鋁錠",
            amount: 30,
          },
          {
            name: "銅錠",
            amount: 10,
          },
        ],
      },
      build: 10,
      label: "中級",
    },
  ],
  [
    {
      select: {
        id: "b-8-2",
        name: "渦輪燃油-3",
        product: [
          {
            name: "渦輪燃油",
            amount: 45,
          },
        ],
        cost: [
          {
            name: "重油殘渣",
            amount: 30,
          },
          {
            name: "燃油",
            amount: 15,
          },
          {
            name: "硫磺",
            amount: 22.5,
          },
          {
            name: "油焦",
            amount: 22.5,
          },
        ],
      },
      build: 26,
      label: "中級",
    },
    {
      select: {
        id: "a-16-1",
        name: "燃油-2",
        product: [
          {
            name: "燃油",
            amount: 100,
          },
        ],
        cost: [
          {
            name: "重油殘渣",
            amount: 50,
          },
          {
            name: "水",
            amount: 100,
          },
        ],
      },
      build: 1,
      label: "初級",
    },
    {
      select: {
        id: "a-14",
        name: "重油殘渣",
        product: [
          {
            name: "重油殘渣",
            amount: 40,
          },
          {
            name: "聚合樹脂",
            amount: 20,
          },
        ],
        cost: [
          {
            name: "原油",
            amount: 30,
          },
        ],
      },
      build: 60,
      label: "初級",
    },
    {
      select: {
        id: "a-13-1",
        name: "橡膠-2",
        product: [
          {
            name: "橡膠",
            amount: 20,
          },
        ],
        cost: [
          {
            name: "聚合樹脂",
            amount: 40,
          },
          {
            name: "水",
            amount: 40,
          },
        ],
      },
      build: 9,
      label: "初級",
    },
    {
      select: {
        id: "a-12-1",
        name: "塑膠-2",
        product: [
          {
            name: "塑膠",
            amount: 20,
          },
        ],
        cost: [
          {
            name: "聚合樹脂",
            amount: 60,
          },
          {
            name: "水",
            amount: 20,
          },
        ],
      },
      build: 14,
      label: "初級",
    },
    {
      select: {
        id: "a-15",
        name: "油焦",
        product: [
          {
            name: "油焦",
            amount: 120,
          },
        ],
        cost: [
          {
            name: "重油殘渣",
            amount: 40,
          },
        ],
      },
      build: 8,
      label: "初級",
    },
    {
      select: {
        id: "a-16-1",
        name: "燃油-2",
        product: [
          {
            name: "燃油",
            amount: 100,
          },
        ],
        cost: [
          {
            name: "重油殘渣",
            amount: 50,
          },
          {
            name: "水",
            amount: 100,
          },
        ],
      },
      build: 25,
      label: "初級",
    },
  ],
  [
    {
      "select": {
        "id": "c-14-1",
        "name": "渦輪馬達-2",
        "product": [
          {
            "name": "渦輪馬達",
            "amount": 3.75
          }
        ],
        "cost": [
          {
            "name": "壓力轉換方塊",
            "amount": 1.88
          },
          {
            "name": "定子",
            "amount": 15
          },
          {
            "name": "馬達",
            "amount": 7.5
          },
          {
            "name": "瓶裝氮氣",
            "amount": 45
          }
        ]
      },
      "build": 1,
      "label": "高級"
    },
    {
      "select": {
        "id": "c-17",
        "name": "壓力轉換方塊",
        "product": [
          {
            "name": "壓力轉換方塊",
            "amount": 1
          }
        ],
        "cost": [
          {
            "name": "熔合模型框架",
            "amount": 1
          },
          {
            "name": "無線控制單元",
            "amount": 2
          }
        ]
      },
      "build": 3,
      "label": "高級"
    },
    {
      "select": {
        "id": "c-16",
        "name": "熔合模型框架",
        "product": [
          {
            "name": "熔合模型框架",
            "amount": 1.5
          }
        ],
        "cost": [
          {
            "name": "重型模型框架",
            "amount": 1.5
          },
          {
            "name": "鋁製外殼",
            "amount": 50
          },
          {
            "name": "氮氣",
            "amount": 37.5
          }
        ]
      },
      "build": 4,
      "label": "高級"
    },
    {
      "select": {
        "id": "c-11-1",
        "name": "無線控制單元-2",
        "product": [
          {
            "name": "無線控制單元",
            "amount": 4.5
          }
        ],
        "cost": [
          {
            "name": "石英震盪器",
            "amount": 1.5
          },
          {
            "name": "鋁製外殼",
            "amount": 90
          },
          {
            "name": "電路板",
            "amount": 15
          },
          {
            "name": "橡膠",
            "amount": 45
          }
        ]
      },
      "build": 2,
      "label": "高級"
    },
    {
      "select": {
        "id": "c-12",
        "name": "石英震盪器",
        "product": [
          {
            "name": "石英震盪器",
            "amount": 1
          }
        ],
        "cost": [
          {
            "name": "石英晶體",
            "amount": 18
          },
          {
            "name": "電纜",
            "amount": 14
          },
          {
            "name": "強化鐵板",
            "amount": 2.5
          }
        ]
      },
      "build": 7,
      "label": "高級"
    },
    {
      "select": {
        "id": "c-15-1",
        "name": "冷卻系統-2",
        "product": [
          {
            "name": "冷卻系統",
            "amount": 3.75
          }
        ],
        "cost": [
          {
            "name": "散熱器",
            "amount": 9.38
          },
          {
            "name": "馬達",
            "amount": 1.88
          },
          {
            "name": "氮氣",
            "amount": 45
          }
        ]
      },
      "build": 1,
      "label": "高級"
    },
    {
      "select": {
        "id": "b-12-1",
        "name": "散熱器-2",
        "product": [
          {
            "name": "散熱器",
            "amount": 10
          }
        ],
        "cost": [
          {
            "name": "鋁製外殼",
            "amount": 30
          },
          {
            "name": "橡膠",
            "amount": 30
          }
        ]
      },
      "build": 2,
      "label": "中級"
    },
    {
      "select": {
        "id": "c-4-1",
        "name": "電腦-2",
        "product": [
          {
            "name": "電腦",
            "amount": 2.8
          }
        ],
        "cost": [
          {
            "name": "電路板",
            "amount": 7.5
          },
          {
            "name": "石英震盪器",
            "amount": 2.8
          }
        ]
      },
      "build": 1,
      "label": "高級"
    },
    {
      "select": {
        "id": "b-7",
        "name": "電路板",
        "product": [
          {
            "name": "電路板",
            "amount": 7.5
          }
        ],
        "cost": [
          {
            "name": "塑膠",
            "amount": 30
          },
          {
            "name": "銅片",
            "amount": 15
          }
        ]
      },
      "build": 6,
      "label": "中級"
    },
    {
      "select": {
        "id": "c-13",
        "name": "磁場產生器",
        "product": [
          {
            "name": "磁場產生器",
            "amount": 1
          }
        ],
        "cost": [
          {
            "name": "多功能骨架",
            "amount": 2.5
          },
          {
            "name": "電磁控制棒",
            "amount": 1
          },
          {
            "name": "電池",
            "amount": 5
          }
        ]
      },
      "build": 3,
      "label": "高級"
    },
    {
      "select": {
        "id": "c-9",
        "name": "電磁控制棒",
        "product": [
          {
            "name": "電磁控制棒",
            "amount": 4
          }
        ],
        "cost": [
          {
            "name": "定子",
            "amount": 6
          },
          {
            "name": "AI限制器",
            "amount": 4
          }
        ]
      },
      "build": 2,
      "label": "高級"
    },
    {
      "select": {
        "id": "b-11-1",
        "name": "電池-2",
        "product": [
          {
            "name": "電池",
            "amount": 30
          }
        ],
        "cost": [
          {
            "name": "硫磺",
            "amount": 45
          },
          {
            "name": "鍍鋁板",
            "amount": 52.5
          },
          {
            "name": "塑膠",
            "amount": 60
          },
          {
            "name": "銅線",
            "amount": 90
          }
        ]
      },
      "build": 3,
      "label": "中級"
    },
    {
      "select": {
        "id": "b-13",
        "name": "AI限制器",
        "product": [
          {
            "name": "AI限制器",
            "amount": 5
          }
        ],
        "cost": [
          {
            "name": "快導線",
            "amount": 100
          },
          {
            "name": "銅片",
            "amount": 25
          }
        ]
      },
      "build": 2,
      "label": "中級"
    },
    {
      "select": {
        "id": "c-10",
        "name": "高速連接器",
        "product": [
          {
            "name": "高速連接器",
            "amount": 3.75
          }
        ],
        "cost": [
          {
            "name": "快導線",
            "amount": 210
          },
          {
            "name": "電纜",
            "amount": 37.5
          },
          {
            "name": "電路板",
            "amount": 3.75
          }
        ]
      },
      "build": 1,
      "label": "高級"
    }
  ]
];
