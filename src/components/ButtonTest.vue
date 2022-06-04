<template>
  <button type="button" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'ButtonTest',
  props: {
    text: {
      type: String,
      default: 'Teste Storybook',
    },
  },
  methods: {
    onClick() {
      this.$emit('click');
    },
  },
};
</script>

<style scoped>
button {
  border: 1px solid #ccc;
  border-radius: 3px;
  background-color: #999;
  cursor: pointer;
  font-size: 15pt;
  padding: 3px 10px;
  margin: 10px;
  color: #000;
}
</style>
