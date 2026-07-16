<script lang="ts" setup>
import { computed, ref } from 'vue';
import { Review } from '../store';

const props = defineProps<{ 
    review: Review;
}>();

const dates = computed(() => {
    const updatedDate = new Date(props.review.updated);
    const createdDate = new Date(props.review.created);
    const currentDate = new Date();
    const isSameDate = updatedDate.toDateString() === createdDate.toDateString();
    const updatedString = updatedDate.toDateString() === currentDate.toDateString() ? 
                            updatedDate.toTimeString() : 
                            `${updatedDate.toLocaleDateString()} - ${updatedDate.toLocaleTimeString()}`;
    const dateString = isSameDate ? 
                            `Beoordeling geplaatst op: ${createdDate.toLocaleDateString()}` : 
                            `Beoordeling geplaatst op: ${createdDate.toLocaleDateString()} Geupdated: ${updatedString}`;
    return dateString;

});

</script>

<template>
<div class="review">
    <div class="header">
        <div class="Name">
            Beoordeling door: {{ review.name }}
        </div>
        <div class="createdupdatedandrating">
            <div class="createdUpdated">
                {{ dates }} | waardering: ({{ review.stars }}/5)
            </div>
        </div>
    </div>
    <div class="content">
        {{ review.review }}
    </div>
</div>
</template>

<style scoped>
.createdupdatedandrating{
    display: flex;
}

.review {
    border-radius: 10px;
    padding: 1rem;
    text-align: left;
    background-color: rgb(231, 231, 231);
}

.header {
    font-weight: bold;
    padding:0.5rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgb(197, 197, 197);
}

.content {
    padding: 1rem;
}

</style>