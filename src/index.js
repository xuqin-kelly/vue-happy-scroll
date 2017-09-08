import HappyScroll from './scroll.vue'


//如果vue是全局变量,使用自动全局安装。
if (typeof window !== 'undefined' && window.Vue) {
  Vue.component('happy-scroll', HappyScroll)
}

export default {
  install (Vue) {
    Vue.component('happy-scroll', HappyScroll)
  }
}

export {
  HappyScroll
}
