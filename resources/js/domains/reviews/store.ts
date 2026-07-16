
import { computed, ref } from 'vue';
import { storeModuleFactory } from '../../services/store';
import { getBookById } from '../books/store';
export interface ReviewType extends Record<string, unknown> {
    name: string;
    review: string;
    stars: number;
}
export interface Review extends ReviewType {
    book_id: number;
    updated: string;
    created: string;
    id: number;
}

const reviewStore = storeModuleFactory<Review>('reviews');


export const getAllReviews = computed(() => reviewStore.getters.all.value );

export const fetchReviews = async () => {
    return await reviewStore.actions.getAll();
};

export const createReview = async (newBook: Review) => {
    await reviewStore.actions.create(newBook);
};

export const getReviewById = (id: number) => reviewStore.getters.getById(id);

export const getReviewsByBookId = (id: number) => computed(() => getAllReviews.value.filter((review) => review.book_id === id));

export const updateReview = async (id: number, updatedReview: Review) => {
    await reviewStore.actions.update(id, updatedReview)
};

export const deleteReview = async (id: number) => {
        await reviewStore.actions.delete(id);
};

export const newReview = ref<ReviewType>({
    name: "",
    review: "",
    stars: 5,
});