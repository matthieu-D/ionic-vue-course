import Vue from "vue";

// Begin: http://localhost:3000/using-vue-with-ionic-4-and-ionic-native-plugins/ 

// import * as GeolocationService from "@ionic-native/geolocation/ngx";

// Vue.config.ignoredElements = ["ion-card", "ion-card-content", "ion-button"];
// const geolocation = new GeolocationService.Geolocation();
// var app = new Vue({
//   el: "#app",
//   data: {
//     loadingPosition: false,
//     geolocation: {}
//   },
//   methods: {
//     getPosition: function() {
//       this.loadingPosition = true;

//       geolocation.getCurrentPosition().then(({ coords }) => {
//         this.loadingPosition = false;
//         this.geolocation = coords;
//       })
//       .catch((error) => {
//         alert(error.message);
//       });
//     }
//   }
// });

// End: http://localhost:3000/using-vue-with-ionic-4-and-ionic-native-plugins/ 

// Begin: https://javascripttuts.com/vue-as-an-angular-alternative-for-ionic-the-services/ 

// import VanillaJsService from "./app/vanilla-js-service";
// import ComponentOne from './app/component-one';
// import ComponentTwo from './app/component-two';

// import CounterService from "./app/counter-service";

// const sharedCounter = new CounterService();

// const FirstComponent = {
//   template: `<div>
//     <button @click="show">
//       Show
//     </button>
//     <button @click="add">
//       Add
//     </button>
//   </div>`,
//   methods: {
//     show: function() {
//       sharedCounter.show();
//     },
//     add: function() {
//       sharedCounter.add();
//     }
//   }
// };

// const SecondComponent = {
//   template: `<div>
//     <button @click="show">
//       Show
//     </button>
//     <button @click="add">
//       Add
//     </button>
//   </div>`,
//   methods: {
//     show: function() {
//       sharedCounter.show();
//     },
//     add: function() {
//       sharedCounter.add();
//     }
//   }
// };

// var app = new Vue({
//   el: "#app",
//   // components: {ComponentOne, ComponentTwo},
//   components: {ComponentOne, ComponentTwo, FirstComponent, SecondComponent},
//   data: function() {
//     return {
//       vanillaJsService: new VanillaJsService()
//     };
//   },
//   methods: {
//     useVanillaJsService: function() {
//       this.vanillaJsService.sayHello();
//     }
//   }
// });

// End: https://javascripttuts.com/vue-as-an-angular-alternative-for-ionic-the-services/ 

import CustomShow from "./app/custom-show";
import CustomIfModule from "./app/custom-if";

const CustomIf = CustomIfModule["custom-if"];

Vue.directive("CustomShow", {
  bind: function(el, binding, vnode) {
    const display = binding.value ? "block" : "none";
    el.style.display = display;
  }
});

var app = new Vue({
  el: "#app",
  directives: { CustomShow, CustomIf }
});

// Begin: https://javascripttuts.com/vue-as-an-angular-alternative-for-ionic-the-components/ 

// Vue.component('global-component', {
//   template: '<div> Hi I am a global component </div>'
// });

// import SimpleTsComponent from "./app/simple-ts-component/simple-ts-component";
// import ComponentWithMethods from "./app/component-with-methods/component-with-methods.vue";

// var app = new Vue({
//   el: "#app",
//   components: { SimpleTsComponent, ComponentWithMethods }
// });

// End: https://javascripttuts.com/vue-as-an-angular-alternative-for-ionic-the-components/ 
