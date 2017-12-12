// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//模块化加载
import Vue from 'vue'
import App from './App'

//Vue是一个构造函数

console.log(Vue)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  watch:{
    change:function(){}
  }

})
function bind(){
  var self=Array.prototype.slice.call(arguments,1);
  return function fn(self){
    fn.call(self,args)
  }
  return fn;
}

if (!Function.prototype.bind) {
  Function.prototype.bind = function (oThis) {
    var aArgs = Array.prototype.slice.call(arguments, 1),//裁剪this
      fToBind = this,//存了一个this，Function.prototype
      fNOP = function () {},
      fBound = function () {
        return fToBind.apply(this instanceof fNOP
          ? this
          : oThis || this,
          aArgs.concat(Array.prototype.slice.call(arguments)));
      };

    fNOP.prototype = this.prototype;
    fBound.prototype = new fNOP();

    return fBound;
  };
}
