
const app = new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data() {
    return {
      expand: false,
      formula: {},
      allFormula: [], // 全部配方
      formulas: [],// 顯示的配方
      search: "",
      simulations: [
       [ // section
        { label: "", select: {}, build: 1 } // row
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
      console.log(section)
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
      const { search, allFormula } = this
      const formulas = JSON.parse(JSON.stringify(allFormula))
      if (search) {
        this.formulas = formulas.filter(item => item.name.match(search))
      } else {
        this.formulas = formulas
      }
    },
    calculate(item) {
      return ((item.product * 100) - (item.cost * 100)) / 100
    }
  },
  computed: {

  },
  created() {
    this.formula = formulaData
    this.allFormula = [...formulaData['初級'], ...formulaData['中級'], ...formulaData['高級'], ...formulaData['特級']]
    this.formulas = this.allFormula
    // this.simulations = simulations
  },
})