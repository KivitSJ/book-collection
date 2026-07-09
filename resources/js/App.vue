<script setup>
</script>

<template>
    <nav>
        <router-link :to="{name: 'books.overview'}"><button>Overzicht</button></router-link>
        <router-link :to="{name: 'books.create'}"><button>Nieuw Boek</button></router-link>
        <router-link :to="{name: 'authors.overview'}"><button>Auteuren Overzicht</button></router-link>
        <router-link :to="{name: 'authors.create'}"><button>Nieuwe auteur</button></router-link> 
    </nav>
    <router-view></router-view>
</template>

<style>
body {
    display: flex;
    justify-content: center;
    text-align: center;
}

h2 {
    margin: 10px;
    font-size: larger;
    font-weight: bold;
}

.container {
    width: 60vw;
    background-color: rgb(250, 250, 250);
}

table {
    border-collapse: collapse;
}

input, textarea, select {
    width: 100%;
    border: 2px solid rgb(160, 200, 25);
    padding: 0.5rem;
    border-radius: 5px;
    background-color: white;
}

label {
    font-weight: bold;
}

textarea {
    height: 400px;
}

th {
    color: white;
    background-color: rgb(0, 87, 128);
}

.overviewrow:hover {
    background-color: rgb(245, 245, 245);
}

td, th{
    border: 1px solid rgb(190, 190, 190);
    padding: 2px;
}

button {
    margin: 1rem;
    padding: 0.4rem;
    width: 200px;
    background-color: rgb(25, 80, 200);
    border-radius: 5px;
    color: rgba(255, 255, 255, 0.925);
}

button:hover {
    background-color: rgb(5, 60, 200);
}

.formelement {
    display: flex;
    width: 70%;
    justify-content:space-between;
    margin-top: 1vh;
    margin-bottom: 1vh;
}

.delete {
    width: min-content;
    padding: 5px;
    background-color: red;
}
</style>