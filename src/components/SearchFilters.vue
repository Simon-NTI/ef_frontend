<script setup>

import { results } from '@/main';

let cities;

try {
    const response = await fetch("http://localhost:3031/city");
    cities = await response.json();
}
catch (err) {
    console.log(err);
}

</script>
<template>
    <select v-model="results.cityFilter">
        <option value=""> Choose a city </option>
        <option v-for="city in cities" v-bind:value="city">{{ city }}</option>
    </select>
</template>