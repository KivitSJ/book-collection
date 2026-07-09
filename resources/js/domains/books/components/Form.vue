<script setup lang="ts">
import { ref } from 'vue';
import { fetchAuthors, getAllAuthors } from '../../authors/store';

fetchAuthors();

const props = defineProps({ book: Object });

const emit = defineEmits(['submit']);

const form = ref({ ...props.book });

const handleSubmit = () => {
    console.log(form)
    emit('submit', form.value)
    };
</script>

<template>
    <form @submit.prevent="handleSubmit">
        <div class="formelement">
            <label>Titel:</label>
            <input v-model="form.title" type="text" required />
        </div>
        <div class="formelement">
            <label>Samenvatting:</label>
            <textarea v-model="form.summary" required></textarea>
        </div>
        <div class="formelement">
            <label>Auteur:</label>
            <select v-model="form.author_id" required>
                <option v-for="author in getAllAuthors" :key="author.id" :value="author.id">
                    {{ author.name }}
                </option>
            </select>           
        </div>

        <button type="submit">Opslaan</button>
    </form>
</template>