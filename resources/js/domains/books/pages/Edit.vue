<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router';
import Form from '../components/Form.vue';
import { fetchBooks, getBookById, updateBook } from '../store';
import type { Book } from '../store';
import ErrorMessage from '../../../components/ErrorMessage.vue';

const route = useRoute();
const router = useRouter();

fetchBooks();

const book = getBookById(Number(route.params.id)).value;

const handleSubmit = async (data: Book) => {
    await updateBook(Number(route.params.id), data);
    router.push({ name: 'books.overview' });
};

</script>
<template>
    <h2>Boek bewerken</h2>
    <ErrorMessage />
    <div class="container">
        <Form v-if="book" :book="book" @submit="handleSubmit" />
    </div>
</template>