Vue.component('vueLife', {
  template: '#vue-life',
  props: {
    templatedata: {
      type: String,
      default: '這是預設元件資料'
    }
  },
}
)

const app = new Vue({
  el: '#app',
  data: {
    vueData: 'VueLifeCycle data 資料狀態。'
  },
  methods: {
    dataUpdata() {
      this.vueData = '這是被替換後的資料。'
    }
  },
  beforeCreate: function () {
    console.log('beforeCreate this.$el：' + this.$el)
    console.log('beforeCreate this.data：' + this.vueData)
    document.getElementById('beforeCreate').innerHTML = `
    <h4>----beforeCreate階段----</h4>
    <p>beforeCreate this.$el：<span style="color:red">${this.$el}</span></p>
    <p>beforeCreate this.data：<span style="color:red">${this.vueData}</span></p>
    `
    window.alert(`
    請開啟開發者工具查看Console，了解 vuejs 生命週期。

    1.目前停在beforeCreate。
    此時vue尚未將資料掛載上去，所以 el 及 data 為 undefined
    也可以在這邊發現畫面上的 {{ data }} 還沒替換掉。
    `)
  },
  created: function () {
    console.log('created this.$el：' + this.$el)
    console.log('created this.data：' + this.vueData)
    document.getElementById('created').innerHTML = `
    <h4>----created階段----</h4>
    <p>created this.$el：<span style="color:red">${this.$el}</span></p>
    <p>created this.data：<span style="color:red">${this.vueData}</span></p>
    `
    window.alert(`
    2.目前停在created
    這個時候已經將 data 資料掛載上了。
    但 el 還沒有掛載上去，通常若要做 AJAX，通常都是在這邊執行。
    `)
  },
  beforeMount: function () {
    console.log('beforeMount this.$el：' + this.$el)
    console.log('beforeMount this.data：' + this.vueData)
    document.getElementById('beforeMount').innerHTML = `
    <h4>----beforeMount階段----</h4>
    <p>beforeMount this.$el：<span style="color:red">${this.$el}</span></p>
    <p>beforeMount this.data：<span style="color:red">${this.vueData}</span></p>
    `
    window.alert(`
    3.目前停在beforeMount
    這時候可以發現 vue 已經將 el 掛載上去了。
    `)
  },
  mounted: function () {
    console.log('mounted this.$el：' + this.$el)
    console.log('mounted this.data：' + this.vueData)
    document.getElementById('mounted').innerHTML = `
    <h4>----mounted階段----</h4>
    <p>mounted this.$el：<span style="color:red">${this.$el}</span></p>
    <p>mounted this.data：<span style="color:red">${this.vueData}</span></p>
    `
    window.alert(`
    4.目前停在mounted
    可以發現畫面上的{{ data }}已經替換成 vuejs 的資料。
    元件(component)也掛載上去了。
    `)
  },
  beforeUpdate: function () {
    console.log('beforeUpdate this.$el：' + this.$el)
    console.log('beforeUpdate this.data：' + this.vueData)
    document.getElementById('beforeUpdate').innerHTML = `
    <h4>----beforeUpdate階段----</h4>
    <p>beforeUpdate this.$el：<span style="color:red">${this.$el}</span></p>
    <p>beforeUpdate this.data：<span style="color:red">${this.vueData}</span></p>
    `
    window.alert(`
    5.beforeUpdate
    更新畫面資料時會觸發 beforeUpdate 但這時候畫面還不會出現變化。
    但是 data 資料已經被替換了 !
    `)
  },
  updated: function () {
    console.log('updated this.$el：' + this.$el)
    console.log('updated this.data：' + this.vueData)
    document.getElementById('updated').innerHTML = `
    <h4>----updated階段----</h4>
    <p>updated this.$el：<span style="color:red">${this.$el}</span></p>
    <p>updated this.data：<span style="color:red">${this.vueData}</span></p>
    `
    window.alert(`
    6.updated
    這時候可以發現畫面上的資料已經更新替換了。
    `)
  },
  beforeDestroy: function () {
    console.log('beforeDestroy this.$el：' + this.$el)
    console.log('beforeDestroy this.data：' + this.vueData)
    window.alert(`
    7.beforeDestroy
    準備進入銷毀vue階段前。
    `)
  },
  destroyed: function () {
    console.log('destroyed this.$el：' + this.$el)
    console.log('destroyed this.data：' + this.vueData)
    window.alert(`
    8.destroyed
    vue銷毀。
    `)
  },
})

document.getElementById('delComponent').addEventListener('click',function(){
  app.$destroy()
})
