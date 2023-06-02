<template>
  <button><router-link :to="{ name: 'Books' }">Back</router-link></button>

  <AddEditBook id="" />
</template>

<script>
import AddEditBook from "@/components/AddEditBook.vue";

export default {
  name: "AddBookView",
  components: {
    AddEditBook,
  },
};
</script>

<style scoped>
button {
  background: rgb(252, 226, 186);
  color: rgb(84, 84, 84);
  padding: 7px 20px;
  border-radius: 8px;
  box-shadow: 2px 3px 2px 2px rgb(252, 226, 186);
  border: 2px solid salmon;
  font-size: 1rem;
  font-weight: 600;
}
</style>
