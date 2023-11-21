
const app = new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data() {
    return {
      expand: true,
      formula: [],
      search: "",
      // simulations: [
      //  [ // section
      //   { select: {}, build: 1 } // row
      //  ]
      // ],
      simulations: [
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
        ]
      ],
    }
  },
  methods: {
    getProduct(row) {
      if (row.select.product) {
        const { product } = row.select
        const { build } = row
        let str = ""
        product.forEach((el, ind, arr) => {
          str += `${el.name}：${el.amount * build}`
          if (ind < arr.length - 1) str += "、"
        })
        return str
      } else {
        return ""
      }
    },
    getCost(row) {
      if (row.select.cost) {
        const { cost } = row.select
        const { build } = row
        let str = ""
        cost.forEach((el, ind, arr) => {
          str += `${el.name}：${el.amount * build}`
          if (ind < arr.length - 1) str += "、"
        })
        return str
      } else {
        return ""
      }
    },
    addRow(section) {
      section.push({ select: {}, build: 1 })
    },
    removeRow(sectionIndex, rowIndex) {
      this.simulations[sectionIndex].splice(rowIndex, 1)
    },
    addSection() {
      this.simulations.push([
        { select: {}, build: 1 }
      ])
    },
    getsimulationResult(section) {
      let obj = {}
      section.forEach(sec => {
        const { select, build } = sec
        const { product, cost } = select
        if (product) {
          product.forEach(pro => {
            const amount = pro.amount * build
            if (obj[pro.name]) {
              obj[pro.name].product += amount
            } else {
              obj[pro.name] = { product: amount, cost: 0 }
            }
          })
        }
        if (cost) {
          cost.forEach(cos => {
            const amount = cos.amount * build
            if (obj[cos.name]) {
              obj[cos.name].cost += amount
            } else {
              obj[cos.name] = { product: 0, cost: amount }
            }
          })
        }
      })
      return obj
    },
    searchFormula() {
      const { search } = this
      if (search) {
        this.formula = formulaData.filter(item => item.name.match(search))
      } else {
        this.formula = formulaData
      }
    },
    calculate(item) {
      return item.product - item.cost
    }
  },
  computed: {

  },
  created() {
    this.formula = formulaData
  },
  mounted() {
  }
})