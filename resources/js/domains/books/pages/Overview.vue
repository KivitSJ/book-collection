<script lang="ts" setup>
import { fetchBooks, getAllBooks, deleteBook } from '../store';
import { fetchAuthors, getAuthorById } from '../../authors/store';

fetchBooks();
fetchAuthors();

</script>
<template>
    <h2>Boek Overzicht</h2>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Summary</th>
                <th>Auteur</th>
                <th colspan="2">Options</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="book in getAllBooks" :key="book.id">
                <td>{{ book.title }}</td>
                <td>{{ book.summary }}</td>
                <!-- <td>{{ getAuthorById(Number(book.author_id)).value?.name }}</td> -->
                <td><RouterLink :to="{ name: 'books.edit', params: { id: book.id } }"><button>Bewerk</button></RouterLink></td>
                <td><button class="delete" @click="deleteBook(Number(book.id))">🗑️</button></td>
            </tr>
        </tbody>
    </table>
</template>