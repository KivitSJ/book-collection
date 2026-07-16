<script lang="ts" setup>
import { ref } from 'vue';
import { ReviewType } from '../store';

const props = defineProps<{ 
    review: ReviewType;
}>();

const emit = defineEmits(['submit']);

// const form = ref({ ...props.review });

// const handleSubmit = () => {
//     emit("submit", form.value);
// }
// @submit.prevent="handleSubmit"

</script>

<template>
    <div class="review">
    <form id="reviewform">
            <div class="header">
                <div>
                    <label for="name" class="name">
                        Je naam:
                    </label>
                    <input id="name" class="nameField" type="text" :value="review.name" />
                </div>
                <div>
                    <label for="rating" class="Rating">
                        Je waardering:
                    </label>
                    (<select id="rating" class="ratingSelect">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5" selected>5</option>
                    </select>
                    / 5 )
                </div>
            </div>
            <div class="content">
                <textarea name="" id="" :value="review.review"></textarea>
            </div>
            <div class="footer"><button class="submitButton" type="submit">Plaats Beoordeling</button></div>
        </form>
    </div>
</template>

<style scoped>
.footer {
    display:flex;
    justify-content: flex-end;
}
.name, .submitButton {
    width: 10vw;
}

.createdUpdated{
    margin-right:10px;
}

.nameField {
    width: 20vw;
}

.ratingSelect{
    width: 2.3vw;
}

.nameField, .ratingSelect {
    height: 2vw;
}

.review {
    width: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    padding: 5px;
    background-color: rgb(231, 231, 231);
}

.header {
    display: flex;
    justify-content:space-between;
    border-bottom: 1px solid rgb(197, 197, 197);
}

.header *{
    margin:10px;
}

.content {
    padding: 1rem;
}

</style>