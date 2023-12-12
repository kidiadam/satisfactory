
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
          str += `${el.name}：${Number((el.amount * build).toFixed(2))}`
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
          str += `${el.name}：${Number((el.amount * build).toFixed(2))}`
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
            const amount = Number((pro.amount * build).toFixed(2))
            if (obj[pro.name]) {
              obj[pro.name].product += amount
              obj[pro.name].product = Number((obj[pro.name].product).toFixed(2))
            } else {
              obj[pro.name] = { product: amount, cost: 0 }
            }
          })
        }
        if (cost) {
          cost.forEach(cos => {
            const amount = Number((cos.amount * build).toFixed(2))
            if (obj[cos.name]) {
              obj[cos.name].cost += amount
              obj[cos.name].cost = Number((obj[cos.name].cost).toFixed(2))

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
      return Number((item.product - item.cost).toFixed(2))
    },
    toggleTable(idx) {
      const display = this.$refs[`simulation${idx}`][0].style.display;
      this.$refs[`simulation${idx}`][0].style.display = display == "none"? "block" : "none"
    }
  },
  computed: {

  },
  created() {
    this.formula = formulaData
    this.allFormula = [...formulaData['初級'], ...formulaData['中級'], ...formulaData['高級'], ...formulaData['特級']]
    this.formulas = this.allFormula
    this.simulations = simulations
  },
})