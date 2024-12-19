<script setup>
import PageFooter from "./components/PageFooter.vue"
import PageHeader from "./components/PageHeader.vue"
import SearchResults from "./components/SearchResults.vue";

</script>

<template>

  <header>
    <PageHeader>

    </PageHeader>
  </header>

  <main>
    <SearchResults>

    </SearchResults>
  </main>

  <footer>
    <PageFooter>

    </PageFooter>
  </footer>
</template>

<style scoped>
#submit-event {
  display: flex;
  flex-direction: column;
}

header {
  min-height: 150px;
}

main {
  overflow-y: auto;
}

footer {
  max-height: 60px;
  min-height: 60px;
}
</style>
