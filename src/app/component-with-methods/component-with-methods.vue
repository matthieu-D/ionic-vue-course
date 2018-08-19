<template>
  <div>
    <div @click="showFirstThis()">Show current this object</div>
    <div @click="showSecondThis()">Show global this object</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    // Careful of () =>
    showFirstThis: function() {
      console.log('Basic function', this);
    },
    showSecondThis: () => {
      console.log('Fat arrow', this);
    }
  }
}
</script>

<style>
div {
  width: 100%;
}
</style>
