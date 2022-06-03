<template>
  <form data-testid="search-form" class="search-form d-flex" @submit.prevent="doSearch">
    <input v-model="term" class="w-full border rounded-md" type="search" placeholder="Search" />
    <v-icon dense class="icon search-form__icon">mdi-magnify</v-icon>
  </form>
</template>

<script>
export default {
  name: 'Search',
  data() {
    return {
      term: '',
    };
  },
  watch: {
    term() {
      if (this.term === '') {
        this.doSearch();
      }
    },
  },
  methods: {
    doSearch() {
      this.$emit('doSearch', { term: this.term });
    },
  },
};
</script>

<style scoped>
.search-form {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 2px 5px;
}

.search-form [type='search'] {
  color: #999;
}

.search-form__icon {
  position: absolute;
  right: 5px;
  outline: none;
}
</style>
