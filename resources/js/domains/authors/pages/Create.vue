<script lang="ts" setup>
    import { ref } from 'vue';
    import Form from '../components/Form.vue';
    import { Author, createAuthor } from '../store';
    import { useRouter } from 'vue-router';

    const router = useRouter();

    const author = ref({
        name: '',
        description: '',
    });

    const handleSubmit = async (data: Author) => {
        await createAuthor(data);
        router.push({name: 'authors.overview'});
    };
</script>
<template>
    <div>
        <h2>Nieuwe auteur toevoegen</h2>
        <Form :author="author" @submit="handleSubmit" />
    </div>
</template>

<style>
</style>