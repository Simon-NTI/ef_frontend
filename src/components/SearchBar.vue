<script setup>
import { results } from "@/main";
import { ref } from "vue";

let query = ref("");

async function performQuery() {
    if (!query.value) {
        results.noResults = false;
        results.set([]);
        return;
    }

    const processedQuery = query.value.trim();
    const url = "http://localhost:3031/event?title=" + processedQuery + "&city=" + results.cityFilter;
    let response = await fetch(url);

    try {
        const data = await response.json();

        if (!data.length) {
            results.noResults = true;
            results.set([]);
            return;
        }

        results.noResults = false;
        results.set(data);
    }
    catch {
        results.set([]);
    }
}

</script>

<template>
    <div id="search-main">
        <input type="search" placeholder="Search events" v-model="query" @input="performQuery"></input>
    </div>
</template>

<style scoped>
#search-main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}

input {
    margin: 10px;
    min-width: 0;
    max-width: 300px;
    height: 30px;
    font-size: large;
}
</style>