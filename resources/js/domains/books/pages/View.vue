<script lang="ts" setup>
import { computed } from 'vue';
import { fetchBooks, getBookById } from '../store';
import { useRoute, useRouter } from 'vue-router';
import ErrorMessage from '../../../components/ErrorMessage.vue';
import ShowReview from '../../reviews/components/ShowReview.vue';
import { fetchReviews, getAllReviews, getReviewsByBookId, getReviewById } from '../../reviews/store';
import { fetchAuthors, getAuthorById } from '../../authors/store';
import ShowReviews from '../../reviews/components/ShowReviews.vue';

fetchBooks();
fetchAuthors();
fetchReviews();

const route = useRoute();
const router = useRouter();
const book = getBookById(Number(route.params.id));
const review = getReviewsByBookId(Number(route.params.id));

</script>

<template>
    <h2 v-if="book">Boek: {{ book.title }}</h2>
    <ErrorMessage />
    <div v-if="book" class="container">
        <div class="bookview">
            <div class="row">
                <div class="property">Auteur:</div>
                <div class="value">{{ getAuthorById(Number(book.author_id)).value?.name }}</div>
            </div>
            <div class="row">
                <div class="property">Titel:</div>
                <div class="value">{{ book.title }}</div>
            </div>
            <div class="row">
                <div class="property">Omschrijving:</div>
                <div class="value">{{ book.summary }}</div>
            </div>
        </div>
    </div>
    <div v-else class="container">
        Book not found
    </div>
    <ShowReviews />
</template>

<style scoped>
.bookview {
    display: flex;
    flex-direction: column;
    justify-content: left;
}
.property {
    text-align: left;
    width: 20%;
    font-weight: bolder;
}

.row {
    display: flex;
    padding: 1rem;
    border-bottom: 1px solid rgb(222, 222, 222);
}
.value {
    text-align: left;
    width: 80%;
}
</style>