<template>
  <div>
    <NavBar @search="searchProducts" />
    <ProductList :products="products" ref="productList" />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import ProductList from "@/components/ProductList.vue";

export default {
  components: {
    NavBar,
    ProductList,
  },
  data() {
    return {
      products: [],
    };
  },
  methods: {
    searchProducts(searchTerm) {
      this.$refs.productList.filterProducts(searchTerm);
    },
  },
};
</script>
