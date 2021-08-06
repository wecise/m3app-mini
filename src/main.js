import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'

const m3 = require("@wecise/m3js");
Vue.prototype.m3 = m3;

let init = function(){
  new Vue({
    render: h => h(App),
  }).$mount('#app')
};


if(process.env.NODE_ENV === "development"){

  m3.connect({company: process.env.VUE_APP_M3_COMPANY, username: process.env.VUE_APP_M3_USERNAME, password: process.env.VUE_APP_M3_PASSWORD }).then( ()=>{
    setTimeout(()=>{
      init();
    },500)
  }).catch((err)=>{
    console.log(err);
  });
  
} else {
  m3.init();
  init();
}
