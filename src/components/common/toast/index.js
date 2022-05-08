import toast from "./toast";

const obj = {};

obj.install = function (Vue) {
  //1.创建组件构造器
  const toastContrustor = Vue.extend(toast);
  //2.new的方式，根据组件构造器，可以构造出一个组件
  const atoast = new toastContrustor();
  //3.将组件对象挂载到某个元素上
  atoast.$mount(document.createElement('div'));
  //4.toast.$el对应的就是div
  document.body.appendChild(atoast.$el);

  Vue.prototype.$toast = atoast
}
export default obj;
