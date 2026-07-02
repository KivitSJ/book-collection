<script lang="ts" setup>
import { fetchBooks, getAllBooks } from '../store';

fetchBooks();

</script>
<template>
    <h2>Boek Overzicht</h2>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Summary</th>
                <th>Options</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="book in getAllBooks" :key="book.id">
                <td>{{ book.title }}</td>
                <td>{{ book.summary }}</td>
                <td><RouterLink :to="{ name: 'books.edit', params: { id: book.id } }"><button>Bewerk</button></RouterLink></td>
            </tr>
        </tbody>
    </table>
</template>