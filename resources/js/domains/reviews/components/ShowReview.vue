<script lang="ts" setup>
import { computed, ref } from 'vue';
import { getReviewsByBookId, Review } from '../store';
import ReviewBox from './ReviewBox.vue';
import Form from './Form.vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const props = defineProps<{ 
    review: Review;
}>();

const edit = ref(false);

const toggleEdit = () => {
    edit.value = !edit.value;
};

const buttonText = () => {

}

</script>

<template>
    <div class="showreview">
        <ReviewBox v-if="!edit" :review="review" />
        <Form :review="review" v-else />
        <button class="editButton" @click="toggleEdit">Review aanpassen</button>
    </div>
</template>

<style scoped>
.showreview{
    padding: 1rem;
    border-radius: 10px;
    display:flex;
    flex-direction: column;
    border: 1px dashed rgb(168, 168, 168);
}

</style>