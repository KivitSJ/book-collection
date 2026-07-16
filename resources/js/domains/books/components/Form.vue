<script setup lang="ts">
import { ref } from 'vue';
import { fetchAuthors, getAllAuthors } from '../../authors/store';
import FormError from '../../../components/FormError.vue';
import ErrorMessage from '../../../components/ErrorMessage.vue';
import { BookType } from '../store';

fetchAuthors();

const props = defineProps<{ 
    book: BookType
}>();

const emit = defineEmits(['submit']);

const form = ref({ ...props.book });

const handleSubmit = () => {
    emit('submit', form.value)
};
</script>

<template>
    <form @submit.prevent="handleSubmit" id="bookform"></form>
    <div>
        <table>
            <tbody>
                <tr>
                    <td><label for="title">Titel:</label></td>
                    <td><input id="title" v-model="form.title" type="text" form="bookform" /></td>
                    <td><FormError name="title" /></td>
                </tr>
                <tr>
                    <td><label for="summary">Samenvatting:</label></td>
                    <td><textarea id="summary" v-model="form.summary" form="bookform"></textarea></td>
                    <td><FormError name="summary" /></td>
                </tr>
                <tr>
                    <td><label for="author">Auteur:</label></td>
                    <td>
                        <select id="author" v-model="form.author_id" form="bookform" >
                            <option id="author" v-for="author in getAllAuthors" :key="author.id" :value="author.id">
                                {{ author.name }}
                            </option>
                        </select>      
                    </td>
                    <td><FormError name="author" /></td>
                </tr>
                <tr>
                    <td></td>
                    <td class="submitbutton"><button type="submit" form="bookform">Opslaan</button></td>
                    <td></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
.submitbutton {
    display: flex;
    justify-content: end;
}

div {
    padding: 2rem;
    display: flex;
    justify-content: center;
    background-color: rgb(250, 250, 250);
}

table {
    width: 70%;
}

table, tbody, tr, td, form {
    border-collapse: collapse;
    border: none;
    text-align: right;
    vertical-align: top;
}
</style>