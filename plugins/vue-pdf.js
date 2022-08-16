import Vue from 'vue'
import pdf from "vue-pdf";

Vue.component('VuePdf', pdf)

export default (ctx, inject) => {
    inject('pdf', pdf)
  }