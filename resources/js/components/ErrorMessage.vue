<script setup lang="ts">
import { getMessage } from '../services/error';
</script>

<template>
    <div v-if="getMessage">
        {{ getMessage }}
    </div>
</template>

<style scoped>
div {
    background-color: red;
    border-radius: 10px;
    padding: 0.5rem;
    color: white;
}
</style>
