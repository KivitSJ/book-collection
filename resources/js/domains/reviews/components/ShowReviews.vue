<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { fetchReviews, getAllReviews, getReviewsByBookId, newReview, Review, ReviewType } from '../store';
import { computed, ref } from 'vue';
import ShowReview from './ShowReview.vue';
import Form from './Form.vue';

const route = useRoute();
fetchReviews();

const reviews = getReviewsByBookId(Number(route.params.id));

</script>

<template>
    <div class="container">
        <div>
            <div v-if="reviews.length" v-for="review in reviews">
                <ShowReview :review="review" key="review.id" />
            </div>
            <div v-else>
                Er zijn nog geen reviews achtergelaten
            </div>
        </div>
    </div>
    <div class="container">
        <h2>Laat een beoordeling achter:</h2>
        <Form :review="newReview" />
    </div>
</template>

<style scoped>
.reviewcontainer{
    padding: 1rem;
    border-radius: 10px;
    background-color: rgb(250, 250, 250);;
}
</style>