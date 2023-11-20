
const app = new Vue({
  el: "#app",
  vuetify: new Vuetify(),
  data () {
    return {
      expand: true,
      formula: [],
      search: "",
      simulations: [
       [ // section
        { select: {}, build: 1 } // row
       ]
      ],
      test:{"鐵定": 1111, "銅錠": 222}
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
    addSection() {
      this.simulations.push([
      { select: {}, build: 1 }
     ])
    },
    getsimulationResult(section) {
      let obj = {}
      section.forEach(sec => {
        const { select } = sec
        const { product, cost } = select
        if (product) {
          product.forEach(pro => {
            if (obj[pro.name]) {
              obj[pro.name].product += pro.amount
            } else {
              obj[pro.name] = { product: pro.amount, cost: 0 }
            }
          })
        }
        if (cost) {
          cost.forEach(cos => {
            if (obj[cos.name]) {
              obj[cos.name].cost += cos.amount
            } else {
              obj[cos.name] = { product: 0, cost: cos.amount }
            }
          })
        }
      })
      console.log(obj)
      return obj
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