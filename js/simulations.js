const simulations = [
  [
    {
      "select": {
        "id": "17",
        "name": "自動化線路",
        "product": [
          {
            "name": "自動化線路",
            "amount": 2.5
          }
        ],
        "cost": [
          {
            "name": "定子",
            "amount": 2.5
          },
          {
            "name": "電纜",
            "amount": 50
          }
        ]
      },
      "build": 1
    },
    {
      "select": {
        "id": "20",
        "name": "鋼筋混凝土",
        "product": [
          {
            "name": "鋼筋混凝土",
            "amount": 6
          }
        ],
        "cost": [
          {
            "name": "鋼樑",
            "amount": 24
          },
          {
            "name": "混凝土",
            "amount": 30
          }
        ]
      },
      "build": 1
    },
    {
      "select": {
        "id": "19",
        "name": "馬達",
        "product": [
          {
            "name": "馬達",
            "amount": 5
          }
        ],
        "cost": [
          {
            "name": "轉子",
            "amount": 10
          },
          {
            "name": "定子",
            "amount": 10
          }
        ]
      },
      "build": 1
    },
    {
      "select": {
        "id": "16",
        "name": "定子",
        "product": [
          {
            "name": "定子",
            "amount": 5
          }
        ],
        "cost": [
          {
            "name": "鋼管",
            "amount": 15
          },
          {
            "name": "銅線",
            "amount": 40
          }
        ]
      },
      "build": 3
    },
    {
      "select": {
        "id": "6-1",
        "name": "轉子-2",
        "product": [
          {
            "name": "轉子",
            "amount": 5
          }
        ],
        "cost": [
          {
            "name": "鋼管",
            "amount": 10
          },
          {
            "name": "銅線",
            "amount": 30
          }
        ]
      },
      "build": 2
    },
    {
      "select": {
        "id": "18",
        "name": "多功能骨架",
        "product": [
          {
            "name": "多功能骨架",
            "amount": 5
          }
        ],
        "cost": [
          {
            "name": "模型框架",
            "amount": 2.5
          },
          {
            "name": "鋼樑",
            "amount": 30
          }
        ]
      },
      "build": 1
    },
    {
      "select": {
        "id": "10",
        "name": "鋼樑",
        "product": [
          {
            "name": "鋼樑",
            "amount": 15
          }
        ],
        "cost": [
          {
            "name": "鋼錠",
            "amount": 60
          }
        ]
      },
      "build": 4
    },
    {
      "select": {
        "id": "11",
        "name": "鋼管",
        "product": [
          {
            "name": "鋼管",
            "amount": 20
          }
        ],
        "cost": [
          {
            "name": "鋼錠",
            "amount": 30
          }
        ]
      },
      "build": 4
    },
    {
      "select": {
        "id": "14",
        "name": "電纜",
        "product": [
          {
            "name": "電纜",
            "amount": 30
          }
        ],
        "cost": [
          {
            "name": "銅線",
            "amount": 60
          }
        ]
      },
      "build": 2
    },
    {
      "select": {
        "id": "13",
        "name": "銅線",
        "product": [
          {
            "name": "銅線",
            "amount": 30
          }
        ],
        "cost": [
          {
            "name": "銅錠",
            "amount": 15
          }
        ]
      },
      "build": 10
    }
  ],
  [
    {
      "select": {
        "id": "23",
        "name": "電腦",
        "product": [
          {
            "name": "電腦",
            "amount": 2.5
          }
        ],
        "cost": [
          {
            "name": "塑膠",
            "amount": 45
          },
          {
            "name": "螺絲",
            "amount": 130
          },
          {
            "name": "電路板",
            "amount": 25
          },
          {
            "name": "電纜",
            "amount": 22.5
          }
        ]
      },
      "build": 2
    },
    {
      "select": {
        "id": "22",
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
      "build": 8
    },
    {
      "select": {
        "id": "21",
        "name": "塑膠",
        "product": [
          {
            "name": "塑膠",
            "amount": 20
          },
          {
            "name": "重油殘渣",
            "amount": 10
          }
        ],
        "cost": [
          {
            "name": "原油",
            "amount": 30
          }
        ]
      },
      "build": 18
    },
    {
      "select": {
        "id": "24",
        "name": "油焦",
        "product": [
          {
            "name": "油焦",
            "amount": 120
          }
        ],
        "cost": [
          {
            "name": "重油殘渣",
            "amount": 40
          }
        ]
      },
      "build": 5
    },
    {
      "select": {
        "id": "8",
        "name": "模型框架",
        "product": [
          {
            "name": "模型框架",
            "amount": 2
          }
        ],
        "cost": [
          {
            "name": "鐵棒",
            "amount": 12
          },
          {
            "name": "強化鐵板",
            "amount": 3
          }
        ]
      },
      "build": 6
    },
    {
      "select": {
        "id": "7",
        "name": "智能面板",
        "product": [
          {
            "name": "智能面板",
            "amount": 2
          }
        ],
        "cost": [
          {
            "name": "強化鐵板",
            "amount": 2
          },
          {
            "name": "轉子",
            "amount": 2
          }
        ]
      },
      "build": 4
    },
    {
      "select": {
        "id": "5",
        "name": "強化鐵板",
        "product": [
          {
            "name": "強化鐵板",
            "amount": 5
          }
        ],
        "cost": [
          {
            "name": "鐵板",
            "amount": 30
          },
          {
            "name": "螺絲",
            "amount": 60
          }
        ]
      },
      "build": 6
    },
    {
      "select": {
        "id": "4",
        "name": "螺絲",
        "product": [
          {
            "name": "螺絲",
            "amount": 40
          }
        ],
        "cost": [
          {
            "name": "鐵棒",
            "amount": 10
          }
        ]
      },
      "build": 24
    },
    {
      "select": {
        "id": "3",
        "name": "鐵棒",
        "product": [
          {
            "name": "鐵棒",
            "amount": 15
          }
        ],
        "cost": [
          {
            "name": "鐵錠",
            "amount": 15
          }
        ]
      },
      "build": 26
    },
    {
      "select": {
        "id": "2",
        "name": "鐵板",
        "product": [
          {
            "name": "鐵板",
            "amount": 20
          }
        ],
        "cost": [
          {
            "name": "鐵錠",
            "amount": 30
          }
        ]
      },
      "build": 10
    },
    {
      "select": {
        "id": "6",
        "name": "轉子",
        "product": [
          {
            "name": "轉子",
            "amount": 4
          }
        ],
        "cost": [
          {
            "name": "鐵棒",
            "amount": 20
          },
          {
            "name": "螺絲",
            "amount": 100
          }
        ]
      },
      "build": 3
    }
  ],
  [
    {
      "select": {
        "id": "44",
        "name": "渦輪馬達",
        "product": [
          {
            "name": "渦輪馬達",
            "amount": 1.88
          }
        ],
        "cost": [
          {
            "name": "冷卻系統",
            "amount": 7.5
          },
          {
            "name": "無線控制單元",
            "amount": 3.75
          },
          {
            "name": "馬達",
            "amount": 7.5
          },
          {
            "name": "橡膠",
            "amount": 45
          }
        ]
      },
      "build": 1
    },
    {
      "select": {
        "id": "45",
        "name": "冷卻系統",
        "product": [
          {
            "name": "冷卻系統",
            "amount": 6
          }
        ],
        "cost": [
          {
            "name": "散熱器",
            "amount": 12
          },
          {
            "name": "橡膠",
            "amount": 12
          },
          {
            "name": "氮氣",
            "amount": 150
          }
        ]
      },
      "build": 2
    },
    {
      "select": {
        "id": "46",
        "name": "散熱器",
        "product": [
          {
            "name": "散熱器",
            "amount": 7.5
          }
        ],
        "cost": [
          {
            "name": "鍍鋁板",
            "amount": 37.5
          },
          {
            "name": "銅片",
            "amount": 22.5
          }
        ]
      },
      "build": 4
    },
    {
      "select": {
        "id": "35",
        "name": "鍍鋁板",
        "product": [
          {
            "name": "鍍鋁板",
            "amount": 30
          }
        ],
        "cost": [
          {
            "name": "鋁錠",
            "amount": 30
          },
          {
            "name": "銅錠",
            "amount": 10
          }
        ]
      },
      "build": 5
    },
    {
      "select": {
        "id": "33",
        "name": "鋁錠",
        "product": [
          {
            "name": "鋁錠",
            "amount": 60
          }
        ],
        "cost": [
          {
            "name": "鋁碎塊",
            "amount": 90
          },
          {
            "name": "石英砂",
            "amount": 75
          }
        ]
      },
      "build": 3
    },
    {
      "select": {
        "id": "41",
        "name": "無線控制單元",
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
      "build": 1
    },
    {
      "select": {
        "id": "42",
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
      "build": 2
    }
  ]
]