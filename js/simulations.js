const simulations = [
  [
    {
      "label": "高級",
      "select": {
        "id": "c-5-1",
        "name": "重型模型框架-2",
        "product": [
          {
            "name": "重型模型框架",
            "amount": 2.8
          }
        ],
        "cost": [
          {
            "name": "模型框架",
            "amount": 7.5
          },
          {
            "name": "鋼筋混凝土",
            "amount": 9.4
          },
          {
            "name": "鋼管",
            "amount": 33.75
          },
          {
            "name": "混凝土",
            "amount": 21
          }
        ]
      },
      "build": 2
    },
    {
      "select": {
        "id": "b-4-1",
        "name": "模型框架-2",
        "product": [
          {
            "name": "模型框架",
            "amount": 5
          }
        ],
        "cost": [
          {
            "name": "螺絲",
            "amount": 140
          },
          {
            "name": "強化鐵板",
            "amount": 7.5
          }
        ]
      },
      "build": 4,
      "label": "中級"
    },
    {
      "select": {
        "id": "b-1-1",
        "name": "強化鐵板-2",
        "product": [
          {
            "name": "強化鐵板",
            "amount": 15
          }
        ],
        "cost": [
          {
            "name": "鐵板",
            "amount": 90
          },
          {
            "name": "螺絲",
            "amount": 250
          }
        ]
      },
      "build": 2,
      "label": "中級"
    },
    {
      "select": {
        "id": "a-4-1",
        "name": "螺絲-2",
        "product": [
          {
            "name": "螺絲",
            "amount": 50
          }
        ],
        "cost": [
          {
            "name": "鐵錠",
            "amount": 12.5
          }
        ]
      },
      "build": 22,
      "label": "初級"
    },
    {
      "select": {
        "id": "b-6",
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
      "build": 3.5,
      "label": "中級"
    },
    {
      "select": {
        "id": "a-6",
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
      "build": 9,
      "label": "初級"
    },
    {
      "select": {
        "id": "a-7",
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
      "build": 7,
      "label": "初級"
    },
    {
      "select": {
        "id": "a-5-2",
        "name": "鋼錠",
        "product": [
          {
            "name": "鋼錠",
            "amount": 60
          }
        ],
        "cost": [
          {
            "name": "鐵錠",
            "amount": 40
          },
          {
            "name": "煤炭",
            "amount": 40
          }
        ]
      },
      "build": 13,
      "label": "初級"
    },
    {
      "select": {
        "id": "b-2-1",
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
      "build": 2,
      "label": "中級"
    },
    {
      "select": {
        "id": "b-3",
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
      "build": 3,
      "label": "中級"
    },
    {
      "select": {
        "id": "c-3",
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
      "build": 1,
      "label": "高級"
    },
    {
      "select": {
        "id": "c-1",
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
      "build": 1,
      "label": "高級"
    },
    {
      "select": {
        "id": "c-2",
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
      "build": 1,
      "label": "高級"
    },
    {
      "select": {
        "id": "a-2",
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
      "build": 9,
      "label": "初級"
    },
    {
      "select": {
        "id": "a-10",
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
      "build": 2,
      "label": "初級"
    },
    {
      "select": {
        "id": "a-9",
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
      "build": 10,
      "label": "初級"
    }
  ]
]