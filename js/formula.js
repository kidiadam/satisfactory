const formulaData = [
  {
    id: "1",
    name: "鐵錠",
    product: [
      { name: "鐵錠", amount: 30 }
    ],
    cost: [
      { name: "鐵礦", amount: 30 }
    ]
    
  },
  {
    id: "2",
    name: "鐵板",
    product: [
      { name: "鐵板", amount: 20 }
    ],
    cost: [
      { name: "鐵錠", amount: 30 }
    ]
  },
  {
    id: "3",
    name: "鐵棒",
    product: [
      { name: "鐵棒", amount: 15 }
    ],
    cost: [
      { name: "鐵錠", amount: 15 }
    ]
  },
  {
    id: "4",
    name: "螺絲",
    product: [
      { name: "螺絲", amount: 40 }
    ],
    cost: [
      { name: "鐵棒", amount: 10 }
    ]
  },
  {
    id: "5",
    name: "強化鐵板",
    product: [
      { name: "強化鐵板", amount: 5 }
    ],
    cost: [
      { name: "鐵板", amount: 30 },
      { name: "螺絲", amount: 60 }
    ]
  },
  {
    id: "5-1",
    name: "強化鐵板-2",
    product: [
      { name: "強化鐵板", amount: 15 }
    ],
    cost: [
      { name: "鐵板", amount: 90 },
      { name: "螺絲", amount: 250 }
    ]
  },
  {
    id: "6",
    name: "轉子",
    product: [
      { name: "轉子", amount: 4 }
    ],
    cost: [
      { name: "鐵棒", amount: 20 },
      { name: "螺絲", amount: 100 }
    ]
  },
  {
    id: "6-1",
    name: "轉子-2",
    product: [
      { name: "轉子", amount: 5 }
    ],
    cost: [
      { name: "鋼管", amount: 10 },
      { name: "銅線", amount: 30 }
    ]
  },
  {
    id: "7",
    name: "智能面板",
    product: [
      { name: "智能面板", amount: 2 }
    ],
    cost: [
      { name: "強化鐵板", amount: 2 },
      { name: "轉子", amount: 2 }
    ]
  },
  {
    id: "8",
    name: "模型框架",
    product: [
      { name: "模型框架", amount: 2 }
    ],
    cost: [
      { name: "鐵棒", amount: 12 },
      { name: "強化鐵板", amount: 3 }
    ]
  },
  {
    id: "9",
    name: "鋼錠",
    product: [
      { name: "鋼錠", amount: 45 }
    ],
    cost: [
      { name: "鐵礦", amount: 45 },
      { name: "煤炭", amount: 45 }
    ]
  },
  {
    id: "9-1",
    name: "鋼錠-2",
    product: [
      { name: "鋼錠", amount: 100 }
    ],
    cost: [
      { name: "鐵礦", amount: 75 },
      { name: "油焦", amount: 75 }
    ]
  },
  {
    id: "10",
    name: "鋼樑",
    product: [
      { name: "鋼樑", amount: 15 }
    ],
    cost: [
      { name: "鋼錠", amount: 60 },
    ]
  },
  {
    id: "11",
    name: "鋼管",
    product: [
      { name: "鋼管", amount: 20 }
    ],
    cost: [
      { name: "鋼錠", amount: 30 },
    ]
  },
  {
    id: "12",
    name: "銅錠",
    product: [
      { name: "銅錠", amount: 30 }
    ],
    cost: [
      { name: "銅礦", amount: 30 },
    ]
  },
  {
    id: "13",
    name: "銅線",
    product: [
      { name: "銅線", amount: 30 }
    ],
    cost: [
      { name: "銅錠", amount: 15 },
    ]
  },
  {
    id: "14",
    name: "電纜",
    product: [
      { name: "電纜", amount: 30 }
    ],
    cost: [
      { name: "銅線", amount: 60 },
    ]
  },
  {
    id: "15",
    name: "銅片",
    product: [
      { name: "銅片", amount: 10 }
    ],
    cost: [
      { name: "銅錠", amount: 20 },
    ]
  },
  {
    id: "16",
    name: "定子",
    product: [
      { name: "定子", amount: 5 }
    ],
    cost: [
      { name: "鋼管", amount: 15 },
      { name: "銅線", amount: 40 },
    ]
  },
  {
    id: "17",
    name: "自動化線路",
    product: [
      { name: "自動化線路", amount: 2.5 }
    ],
    cost: [
      { name: "定子", amount: 2.5 },
      { name: "電纜", amount: 50 },
    ]
  },
  {
    id: "18",
    name: "多功能骨架",
    product: [
      { name: "多功能骨架", amount: 5 }
    ],
    cost: [
      { name: "模型框架", amount: 2.5 },
      { name: "鋼樑", amount: 30 }
    ]
  },
  {
    id: "19",
    name: "馬達",
    product: [
      { name: "馬達", amount: 5 }
    ],
    cost: [
      { name: "轉子", amount: 10 },
      { name: "定子", amount: 10 }
    ]
  },
  {
    id: "20",
    name: "鋼筋混凝土",
    product: [
      { name: "鋼筋混凝土", amount: 6 }
    ],
    cost: [
      { name: "鋼樑", amount: 24 },
      { name: "混凝土", amount: 30 }
    ]
  },
  {
    id: "21",
    name: "塑膠",
    product: [
      { name: "塑膠", amount: 20 },
      { name: "重油殘渣", amount: 10 }
    ],
    cost: [
      { name: "原油", amount: 30 },
    ]
  },
  {
    id: "22",
    name: "電路板",
    product: [
      { name: "電路板", amount: 7.5 }
    ],
    cost: [
      { name: "塑膠", amount: 30 },
      { name: "銅片", amount: 15 },
    ]
  },
  {
    id: "22-1",
    name: "電路板",
    product: [
      { name: "電路板", amount: 5 }
    ],
    cost: [
      { name: "橡膠", amount: 30 },
      { name: "油焦", amount: 45 },
    ]
  },
  {
    id: "23",
    name: "電腦",
    product: [
      { name: "電腦", amount: 2.5 }
    ],
    cost: [
      { name: "塑膠", amount: 45 },
      { name: "螺絲", amount: 130 },
      { name: "電路板", amount: 25 },
      { name: "電纜", amount: 22.5 },
    ]
  },
  {
    id: "24",
    name: "油焦",
    product: [
      { name: "油焦", amount: 120 }
    ],
    cost: [
      { name: "重油殘渣", amount: 40 },
    ]
  },
  {
    id: "25",
    name: "重型模型框架",
    product: [
      { name: "重型模型框架", amount: 2 }
    ],
    cost: [
      { name: "模型框架", amount: 10 },
      { name: "鋼管", amount: 30 },
      { name: "鋼筋混凝土", amount: 10 },
      { name: "螺絲", amount: 200 },
    ]
  },
  {
    id: "25-1",
    name: "重型模型框架-2",
    product: [
      { name: "重型模型框架", amount: 2.8 }
    ],
    cost: [
      { name: "模型框架", amount: 7.5 },
      { name: "鋼筋混凝土", amount: 9.4 },
      { name: "鋼管", amount: 33.75 },
      { name: "混凝土", amount: 21 },
    ]
  },
  {
    id: "25-2",
    name: "重型模型框架-3",
    product: [
      { name: "重型模型框架", amount: 3.75 }
    ],
    cost: [
      { name: "模型框架", amount: 18.75 },
      { name: "鋼筋混凝土", amount: 11.25 },
      { name: "橡膠", amount: 75 },
      { name: "螺絲", amount: 390 },
    ]
  },
  {
    id: "26",
    name: "模型引擎",
    product: [
      { name: "模型引擎", amount: 1 }
    ],
    cost: [
      { name: "馬達", amount: 2 },
      { name: "橡膠", amount: 15 },
      { name: "智能面板", amount: 2 },
    ]
  },
  {
    id: "27",
    name: "自適應單元",
    product: [
      { name: "自適應單元", amount: 1 }
    ],
    cost: [
      { name: "自動化線路", amount: 7.5 },
      { name: "電路板", amount: 5 },
      { name: "重型模型框架", amount: 1 },
      { name: "電腦", amount: 1 },
    ]
  },
  {
    id: "28",
    name: "燃油",
    product: [
      { name: "燃油", amount: 40 },
      { name: "聚合樹脂", amount: 30 },
    ],
    cost: [
      { name: "原油", amount: 60 },
    ]
  },
  {
    id: "29",
    name: "渦輪燃油",
    product: [
      { name: "渦輪燃油", amount: 18.75 },
    ],
    cost: [
      { name: "燃油", amount: 22.5 },
      { name: "混合炭", amount: 15 },
    ]
  },
  {
    id: "30",
    name: "混合炭",
    product: [
      { name: "混合炭", amount: 25 },
    ],
    cost: [
      { name: "煤炭", amount: 25 },
      { name: "硫磺", amount: 25 },
    ]
  },
  {
    id: "31",
    name: "氧化鋁溶液",
    product: [
      { name: "氧化鋁溶液", amount: 120 },
      { name: "石英砂", amount: 50 },
    ],
    cost: [
      { name: "鋁土礦", amount: 120 },
    ]
  },
  {
    id: "32",
    name: "鋁碎塊",
    product: [
      { name: "鋁碎塊", amount: 360 },
    ],
    cost: [
      { name: "氧化鋁溶液", amount: 240 },
      { name: "煤炭", amount: 120 },
    ]
  },
  {
    id: "33",
    name: "鋁錠",
    product: [
      { name: "鋁錠", amount: 60 },
    ],
    cost: [
      { name: "鋁碎塊", amount: 90 },
      { name: "石英砂", amount: 75 },
    ]
  },
  {
    id: "34",
    name: "鋁製外殼",
    product: [
      { name: "鋁製外殼", amount: 60 },
    ],
    cost: [
      { name: "鋁錠", amount: 90 },
    ]
  },
  {
    id: "35",
    name: "鍍鋁板",
    product: [
      { name: "鍍鋁板", amount: 30 },
    ],
    cost: [
      { name: "鋁錠", amount: 30 },
      { name: "銅錠", amount: 10 },
    ]
  },
  {
    id: "36",
    name: "電池",
    product: [
      { name: "電池", amount: 20 },
    ],
    cost: [
      { name: "硫酸", amount: 50 },
      { name: "氧化鋁溶液", amount: 40 },
      { name: "鋁製外殼", amount: 20 },
    ]
  },
  {
    id: "37",
    name: "硫酸",
    product: [
      { name: "硫酸", amount: 50 },
    ],
    cost: [
      { name: "硫磺", amount: 50 },
    ]
  },
  {
    id: "38",
    name: "超級電腦",
    product: [
      { name: "超級電腦", amount: 3 },
    ],
    cost: [
      { name: "無線控制單元", amount: 9 },
      { name: "冷卻系統", amount: 9 },
    ]
  },
  {
    id: "39",
    name: "電磁控制棒",
    product: [
      { name: "電磁控制棒", amount: 4 },
    ],
    cost: [
      { name: "定子", amount: 6 },
      { name: "AI限制器", amount: 4 },
    ]
  },
  {
    id: "40",
    name: "高速連接器",
    product: [
      { name: "高速連接器", amount: 3.75 },
    ],
    cost: [
      { name: "快導線", amount: 210 },
      { name: "電纜", amount: 37.5 },
      { name: "電路板", amount: 3.75 },
    ]
  },
  {
    id: "40-1",
    name: "高速連接器-2",
    product: [
      { name: "高速連接器", amount: 3 },
    ],
    cost: [
      { name: "快導線", amount: 90 },
      { name: "石英砂", amount: 37.5 },
      { name: "電路板", amount: 3 },
    ]
  },
  {
    id: "41",
    name: "無線控制單元",
    product: [
      { name: "無線控制單元", amount: 4.5 },
    ],
    cost: [
      { name: "石英震盪器", amount: 1.5 },
      { name: "鋁製外殼", amount: 90 },
      { name: "電路板", amount: 15},
      { name: "橡膠", amount: 45},
    ]
  },
  {
    id: "42",
    name: "石英震盪器",
    product: [
      { name: "石英震盪器", amount: 1 },
    ],
    cost: [
      { name: "石英晶體", amount: 18 },
      { name: "電纜", amount: 14 },
      { name: "強化鐵板", amount: 2.5},
    ]
  },
  {
    id: "43",
    name: "磁場產生器",
    product: [
      { name: "磁場產生器", amount: 1 },
    ],
    cost: [
      { name: "多功能骨架", amount: 2.5 },
      { name: "電磁控制棒", amount: 1 },
      { name: "電池", amount: 5},
    ]
  },
]