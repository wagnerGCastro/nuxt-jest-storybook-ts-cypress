<template>
  <div>
    <p>Times clicked: {{ count }}</p>
    <button type="button" @click="increment">{{ text }}</button>
  </div>
</template>

<script>
export default {
  name: 'ButtonDefault',
  props: {
    text: {
      type: String,
      default: 'increment',
    },
  },
  data: () => ({
    count: 0,
  }),
  methods: {
    increment() {
      this.count++;
    },
  },
};
</script>
