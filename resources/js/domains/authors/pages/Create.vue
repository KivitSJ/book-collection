<script lang="ts" setup>
    import { ref } from 'vue';
    import Form from '../components/Form.vue';
    import { Author, AuthorType, createAuthor, getAuthorById } from '../store';
    import { useRouter, useRoute } from 'vue-router';
    import ErrorMessage from '../../../components/ErrorMessage.vue';

    const router = useRouter();
    const route = useRoute();

    const author = ref<AuthorType>({
        name: "",
        description: "",
    });

    const handleSubmit = async (data: Author) => {
        await createAuthor(data);
        router.push({name: 'authors.overview'});
    };
</script>
<template>
    <h2>Nieuwe auteur toevoegen</h2>
    <ErrorMessage />
    <div class="container">
        <Form :author="author" @submit="handleSubmit" />
    </div>
</template>