<template>
    <div class="flex justify-center mt-4">
      <ul class="flex space-x-2">
        <li v-if="currentPage > 1">
          <button @click="changePage(currentPage - 1)">Previous</button>
        </li>
        <li v-for="page in totalPages" :key="page">
          <button
            @click="changePage(page)"
            :class="currentPage === page ? 'font-bold' : ''"
          >{{ page }}</button>
        </li>
        <li v-if="currentPage < totalPages">
          <button @click="changePage(currentPage + 1)">Next</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      currentPage: Number,
      totalPages: Number,
    },
    methods: {
      changePage(page) {
        this.$emit("page-changed", page);
      },
    },
  };
  </script>
  