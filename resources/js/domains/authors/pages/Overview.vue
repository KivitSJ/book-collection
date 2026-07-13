<script lang="ts" setup>
import { fetchAuthors, getAllAuthors, deleteAuthor, getAuthorById } from '../store';
import { fetchBooks, getBooksByAuthorId } from '../../books/store';
import ErrorMessage from '../../../components/ErrorMessage.vue';

fetchAuthors();
fetchBooks();

const handleDelete = async (id: number) => {
    const result = await deleteAuthor(id);
}

</script>
<template>
    <h2>Auteuren overzicht</h2>
    <div class="container">
        <ErrorMessage/>
        <table>
            <thead>
                <tr>
                    <th>Naam</th>
                    <th>Beschrijving</th>
                    <th>Boeken</th>
                    <th colspan="2">Options</th>
                </tr>
            </thead>
            <tbody>
                <tr class="overviewrow" v-for="author in getAllAuthors" :key="author.id">
                    <td>{{ author.name }}</td>
                    <td>{{ author.description }}</td>
                    <td>{{getBooksByAuthorId(author.id).value.join(", ")}}.</td>
                    <td><RouterLink :to="{ name: 'authors.edit', params: { id: author.id } }"><button>Bewerk</button></RouterLink></td>
                    <td><button class="delete" @click="handleDelete(author.id)">🗑️</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>