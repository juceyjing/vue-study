// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  // template: '<App/>',
  // components: {App},
  data: function () {
    return {
      name: 'gujing',
      lists: [1, 2, 3]
    }
  },
  methods: {
    getList() {
      return "getList"

    }
  },
  beforeCreate() {
    console.log("beforeCreate", this.name)
  },
  created() {
    console.log("created", this.name, this.getList())
  },
  beforeMount() {

  },
  mounted() {

  },
  beforeUpdate() {

  },
  updated() {

  },
  beforeDestroy() {

  },
  destroyed() {

  },
  activated() {

  },
  deactivated() {

  },
  errorCaptured() {

  }

})
