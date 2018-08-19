<template>
  <div>

    <div>
      Hi I'm the child, my name is {{name}}
    </div>

    <input type="text" @change="changeName">

  </div>
</template>

<script>

export default {
  props: {
    name: String
  },
  methods: {
    changeName: function ({ target: { value } }) {
      this.$emit('nameChanged', value);
    }
  }
}
    
</script>

<style scoped>
</style>