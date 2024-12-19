<script setup>
import { results } from '@/main';

function getTimeString(item) {
    function process(input) {
        return new Date(input).toString().split(":").splice(0, 2).join(":");
    }

    //.split(" ").splice(0).join()


    return process(item.start) + " - " + process(item.end);
}
</script>

<template>
    <!-- <h1>Try searching for something!</h1> -->
    <div id="results">
        <h1 id="search-alert" v-show="results.items.length == 0 && !results.noResults">Search for anything</h1>

        <h1 id="search-alert" v-show="results.noResults">No results</h1>

        <div class="result-item" v-for="item in results.items">
            <div id="result-img-div">
                <h1>IMG</h1>
            </div>
            <h2 id="result-name"> {{ item.title }} </h2>

            <p id="result-date-and-location">{{ getTimeString(item) }}</p>

            <p id="result-description">{{ item.description }}</p>

            <h3 id="result-organiser">{{ item.organiser }}</h3>
        </div>
    </div>
</template>

<style scoped>
p,
h1,
h2,
h3 {
    text-align: left;
}

#search-alert {
    padding-top: 50px;
}

#results {
    overflow-y: auto;

    background-color: lightgray;
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    text-align: center;
}

#result-description {
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;

    /* margin-top: 10px; */
    padding-left: 10px;
}

#result-organiser {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    padding-left: 10px;
}

.result-item {
    min-width: 300px;
    max-width: 800px;
    width: 75%;
    height: 200px;
    display: grid;

    grid-template-rows: 1fr 1fr 3fr 1fr;
    grid-template-columns: 25% 1fr;

    margin-top: 15px;
    margin-bottom: 15px;

    border: 0.2rem solid black;
}

#result-date-and-location {
    grid-row: 2;
    grid-column: 2;

    text-align: left;
    padding-left: 10px;
}

#result-name {
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    padding-top: 10px;
    padding-left: 10px;
}

#result-img-div {
    grid-row-start: 1;
    grid-row-end: span all;
    background-color: orange;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 200px;
    width: 100%;
    height: 100%;
}
</style>