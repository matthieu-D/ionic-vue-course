import { Directive } from "vue-ts-decorate";

@Directive({ name: "customIf", local: true })
export default class CustomIf {
  bind(el, binding, vnode) {
    const display = vnode.data.attrs.display;
    const delay = binding.arg;

    if (display === false) {
      setTimeout(() => vnode.elm.remove(), delay);
    }
  }
}