<template>
  <button>
    <router-link :to="{ name: 'BookDetails', params: { isbn: book.isbn } }"
      >Back</router-link
    >
  </button>
  <div>test</div>
</template>
