<script lang="ts" setup>
import { ref } from 'vue';
import Form from '../components/Form.vue';
import { Book, BookType, createBook } from '../store';
import { useRouter } from 'vue-router';
import ErrorMessage from '../../../components/ErrorMessage.vue';

const router = useRouter();

const book = ref<BookType>({
    title: "",
    summary: "",
    author_id: null,
});

const handleSubmit = async (data: Book) => {
    await createBook(data);
    router.push({name: 'books.overview'});
};
</script>
<template>
    <h2>Nieuw boek toevoegen</h2>
    <ErrorMessage />
    <div class="container">
        <Form :book="book" @submit="handleSubmit" />
    </div>
</template>