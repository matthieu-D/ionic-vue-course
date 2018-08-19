import CounterService from "./counter-service";

export default {
  template: `<div>

    <button @click="show">
      Show
    </button>

    <button @click="add">
      Add
    </button>

  </div>`,
  data: function() {
    return {
      counterService: new CounterService()
    };
  },
  methods: {
    show: function() {
      this.counterService.show();
    },
    add: function() {
      this.counterService.add();
    }
  }
};