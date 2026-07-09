<script lang="ts" setup>
import { fetchAuthors, getAllAuthors, deleteAuthor, getAuthorById } from '../store';
import { fetchBooks } from '../../books/store';

fetchAuthors();
fetchBooks();

const handleDelete = async (id: number) => {
    const result = await deleteAuthor(id);
    alert(result);
}

</script>
<template>
    <h2>Auteur overzicht</h2>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Summary</th>
                <th colspan="2">Options</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="author in getAllAuthors" :key="author.id">
                <td>{{ author.name }}</td>
                <td>{{ author.description }}</td>
                <td><RouterLink :to="{ name: 'authors.edit', params: { id: author.id } }"><button>Bewerk</button></RouterLink></td>
                <td><button class="delete" @click="handleDelete(author.id)">🗑️</button></td>
            </tr>
        </tbody>
    </table>
</template>