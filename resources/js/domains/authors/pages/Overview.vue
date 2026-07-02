<script lang="ts" setup>
import { fetchAuthors, getAllAuthors } from '../store';

fetchAuthors();

</script>
<template>
    <h2>Auteur overzicht</h2>
    <table>
        <thead>
            <tr>
                <th>Title</th>
                <th>Summary</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="author in getAllAuthors" :key="author.id">
                <td>{{ author.name }}</td>
                <td>{{ author.description }}</td>
            </tr>
        </tbody>
    </table>
</template>