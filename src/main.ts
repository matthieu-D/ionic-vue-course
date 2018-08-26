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

// import CustomShow from "./app/custom-show";
// import CustomIfModule from "./app/custom-if";

// const CustomIf = CustomIfModule["custom-if"];

// Vue.directive("CustomShow", {
//   bind: function(el, binding, vnode) {
//     const display = binding.value ? "block" : "none";
//     el.style.display = display;
//   }
// });

// var app = new Vue({
//   el: "#app",
//   directives: { CustomShow, CustomIf }
// });


// End: https://javascripttuts.com/vue-as-an-angular-alternative-for-ionic-the-services/ 

//  Begin: https://javascripttuts.com/using-vue-as-an-angular-alternative-for-ionic-parent-children-communication/ 

// import TsParentNode from "./app/parent-children/typescript-components/parent-node";
// import VueParentNode from "./app/parent-children/vue-components/parent-node.vue";

// var app = new Vue({
//   el: "#app",
//   components: {
//     TsParentNode,
//     VueParentNode
//   }
// });

// End: https://javascripttuts.com/using-vue-as-an-angular-alternative-for-ionic-parent-children-communication/ 

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


// Begin: https://javascripttuts.com/using-vue-as-an-angular-alternative-for-ionic-vuex-in-one-go/ 

// import Vuex from "vuex";
// Vue.use(Vuex);

// const store = new Vuex.Store({
//   state: {
//     count: 0
//   },
//   mutations: {
//     increment(state, payload) {
//       state.count += payload;
//     },
//     decrement(state, payload) {
//       state.count -= payload;
//     }
//   }
// });

// var app = new Vue({
//   el: "#app",
//   store,
//   methods: {
//     incrementCounter: function() {
//       this.$store.commit("increment", 1);
//     },
//     decrementCounter: function() {
//       this.$store.commit("decrement", 1);
//     }
//   }
// });

// End: https://javascripttuts.com/using-vue-as-an-angular-alternative-for-ionic-vuex-in-one-go/ 

// Begin: https://javascripttuts.com/using-vue-as-an-angular-alternative-for-ionic-the-filters/

// import TsSum from "./app/typescript-filters/sum.filter";
// import VanillaSum from "./app/vanilla-filters/sum.filter";


// var app = new Vue({
//   el: "#app",
//   filters: {
//     TsSum,
//     VanillaSum
//   },
//   computed: {
//     computedSum: function () {
//       return this.originalValue + 1;
//     }
//   },
//   methods: {
//     useSumFilter: function () {
//       const vanilaSumFunction = this.$options.filters["VanillaSum"];
//       return vanilaSumFunction(1, 2, 3);
//     }
//   },
//   data: function() {
//     return { originalValue: 0 };
//   }
// });

// End: https://javascripttuts.com/using-vue-as-an-angular-alternative-for-ionic-the-filters/

// Begin: https://javascripttuts.com/using-vue-as-an-angular-alternative-for-ionic-routing-part-1/

import VueRouter from "vue-router";

Vue.use(VueRouter);

const About = {
  template: "<div>About view</div>",
  mounted: function() {
    console.log("Welcome to the About view");
    const userId = this.$route.params.id;

    if (userId) {
      console.log("You are viewing the user:", userId);
    }
  },
  destroyed: function() {
    console.log("Thanks for visiting to the About view");
  }
};

const Contact = {
  props: ["id"],
  template: "<div>Contact view</div>",
  mounted: function() {
    console.log("Welcome to the Contact view");
    const userId = this.id;

    if (userId) {
      console.log("You are viewing the user", userId);
    }
  },
  destroyed: function() {
    console.log("Thanks for visiting to the Contact view");
  }
};

const NamedRoute = {
  template: "<div>Named route content</div>"
};

const routes = [
  {
    path: "/about/create",
    component: About
  },
  {
    path: "/about/:id",
    component: About
  },
  {
    path: "/contact/:id",
    component: Contact,
    props: true
  },
  {
    path: "/black",
    name: "white",
    component: NamedRoute
  }
];

const router = new VueRouter({ routes });

const app = new Vue({ router }).$mount("#app");
// End: https://javascripttuts.com/using-vue-as-an-angular-alternative-for-ionic-routing-part-1/

