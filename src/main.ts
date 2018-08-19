import Vue from "vue";

import * as GeolocationService from "@ionic-native/geolocation/ngx";

Vue.config.ignoredElements = ["ion-card", "ion-card-content", "ion-button"];
const geolocation = new GeolocationService.Geolocation();

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

// Begin: http://localhost:3000/using-vue-with-ionic-4-and-ionic-native-plugins/ 
var app = new Vue({
  el: "#app",
  data: {
    loadingPosition: false,
    geolocation: {}
  },
  methods: {
    getPosition: function() {
      this.loadingPosition = true;

      geolocation.getCurrentPosition().then(({ coords }) => {
        this.loadingPosition = false;
        this.geolocation = coords;
      })
      .catch((error) => {
        alert(error.message);
      });
    }
  }
});
// End: http://localhost:3000/using-vue-with-ionic-4-and-ionic-native-plugins/ 
