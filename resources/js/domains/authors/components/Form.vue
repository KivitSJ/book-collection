<script setup lang="ts">
import { ref } from 'vue';
import { fetchAuthors, getAllAuthors } from '../../authors/store';

fetchAuthors();

const props = defineProps({ author: Object });

const emit = defineEmits(['submit']);

const form = ref({ ...props.author });

const handleSubmit = () => emit('submit', form.value);
</script>

<template>
    <form @submit.prevent="handleSubmit">
        <div class="formelement">
            <label>Naam:</label>
            <input v-model="form.name" type="text" required />
        </div>
        <div class="formelement">
            <label>Bescrijving:</label>
            <textarea v-model="form.description" required></textarea>
        </div>

        <button type="submit">Opslaan</button>
    </form>
</template>