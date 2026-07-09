<script lang="ts" setup>
import { ref, onMounted, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Form from '../components/Form.vue';
import { Book, fetchBooks, getBookById, updateBook } from '../store';

const route = useRoute();
const router = useRouter();

fetchBooks();

const book = getBookById(Number(route.params.id));

const handleSubmit = async (data: Book) => {
    await updateBook(Number(route.params.id), data);
    router.push({ name: 'books.overview' });
};

</script>
<template>
    <h2>Boek bewerken</h2>
    <div class="container">
        <Form v-if="book" :book="book" @submit="handleSubmit" />
    </div>
</template>