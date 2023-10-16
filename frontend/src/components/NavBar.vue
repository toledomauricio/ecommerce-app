<template>
  <div class="navbar">
    <input
      v-model="searchTerm"
      class="search-input"
      type="text"
      placeholder="Pesquisar..."
      @input="search"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: "",
    };
  },
  methods: {
    search() {
      this.$emit("search", this.searchTerm);
    },
  },
};
</script>

<style scoped>
.navbar {
  background-color: #333;
  padding: 10px 20px;
}
.search-input {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  background-color: #444;
  color: white;
  border: none;
  border-radius: 5px;
}
</style>
