<script setup>
import SearchBar from './SearchBar.vue';
import SearchFilters from './SearchFilters.vue';
</script>

<template>

    <div id="header-area">
        <div id="title">
            <h1>Event Finder</h1>
        </div>
        <div id="searchbar">
            <SearchBar />
        </div>
        <div>
            <Suspense>
                <SearchFilters />
            </Suspense>
        </div>
    </div>
</template>
<style scoped>
#header-area {
    background-color: darkgray;
    height: 100%;

    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: center;
}

#searchbar {
    width: 100%;
    margin-bottom: 10px;
}

#title {
    display: flex;
    justify-content: center;
    text-align: center;
    width: 200px;
    padding-top: 5px;
    margin-bottom: 10px;
}

main div {
    display: flex;
}
</style>