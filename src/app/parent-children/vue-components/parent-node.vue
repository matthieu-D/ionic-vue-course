
<template>
  <div>
    <child-node v-on:nameChanged="changeName" :name="name"></child-node>
  </div>
</template>

<script>

import Vue from "vue";
import ChildNode from "./child-node.vue";

export default Vue.extend({
  data() {
    return {
      name: "Child 2"
    };
  },
  methods: {
    changeName: function(newName) {
      this.name = newName;
    }
  },
  components: { ChildNode }
});

</script>

<style scoped>
</style>