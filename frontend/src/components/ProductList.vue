<template>
  <div>
    <div class="product-header bg-blue-500 p-4 text-white">
      <h1 class="text-2xl">{{ selectedProduct ? selectedProduct.name : 'Listagem de Produtos' }}</h1>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="product-card"
        @click="selectProduct(product)"
      >
        <img :src="product.image" alt="Product Image" class="product-image" />
        <h2 class="product-title">{{ product.name }}</h2>
        <p class="product-description">{{ product.description }}</p>
        <p class="product-price">$ {{ product.price }}</p>
      </div>
    </div>
    <div class="pagination mt-4">
      <button
        class="pagination-button"
        :disabled="currentPage === 1"
        @click="changePage(currentPage - 1)"
      >
        Previous
      </button>
      <button
        class="pagination-button"
        @click="changePage(currentPage + 1)"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      products: [],
      filteredProducts: [],
      selectedProduct: null,
      currentPage: 1,
      perPage: 5,
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.products.length / this.perPage);
    },
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      const apiUrl = `http://localhost:3000/products?page=${this.currentPage}&perPage=${this.perPage}`;
      this.products = [];
      axios.get(apiUrl)
        .then(response => {
          this.products = response.data;
          this.filteredProducts = this.products;
        })
        .catch(error => {
          console.error('Error fetching products: ' + error);
        });
    },
    filterProducts(searchTerm) {
      if (searchTerm === "") {
        this.filteredProducts = this.products;
      } else {
        this.filteredProducts = this.products.filter((product) =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
      }
    },
    selectProduct(product) {
      this.selectedProduct = product;
    },
    changePage(page) {
      console.log('aa');
        this.currentPage = page;
        this.fetchProducts();
    },
  },
};
</script>

<style scoped>
.pagination {
  text-align: center;
  margin-top: 20px;
}

.pagination-button {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
}

.pagination-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.product-header {
  background-color: #333;
  padding: 10px 20px;
}

.product-card {
  background-color: #fff;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  text-align: center;
}

.product-image {
  max-width: 100%;
  height: auto;
}

.product-title {
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
}

.product-description {
  color: #777;
  margin: 10px 0;
}

.product-price {
  font-size: 20px;
  font-weight: bold;
  color: #00f;
  margin: 10px 0;
}
</style>
