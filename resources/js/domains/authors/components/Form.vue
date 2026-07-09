<script setup lang="ts">
import { ref } from 'vue';
import { fetchAuthors, getAllAuthors } from '../../authors/store';
import FormError from '../../../components/FormError.vue';
import ErrorMessage from '../../../components/ErrorMessage.vue';

fetchAuthors();

const props = defineProps({ author: Object });

const emit = defineEmits(['submit']);

const form = ref({ ...props.author });

const handleSubmit = () => emit('submit', form.value);
</script>

<template>
    <form @submit.prevent="handleSubmit" id="authorform"></form>
    <div>
        <table>
            <tbody>
                <tr>
                    <td colspan="3"><ErrorMessage /></td>
                </tr>
                <tr>
                    <td><label form="authorform">Naam:</label></td>
                    <td><input id="name" v-model="form.name" type="text" form="authorform"/></td>
                    <td><FormError name="name" /></td>
                </tr>                              
                <tr>
                    <td><label form="authorform">Bescrijving:</label></td>
                    <td><textarea id="description" v-model="form.description" form="authorform"></textarea></td>
                    <td></td>
                </tr>                
                <tr>
                    <td></td>
                    <td class="submitbutton"><button type="submit" form="authorform">Opslaan</button></td>
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