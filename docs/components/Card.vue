<script setup>
import { getRepos } from '../api/getGitRepos'
import { ref, onMounted } from 'vue'

const repos = ref("");

onMounted(async () => {
    const getReps = await getRepos();
    repos.value = getReps;
});
</script>

<template>
<div class="grid">
    <div v-for="repo in repos" class="card">
        <p class="card-heading">{{ repo.name }}</p>
        <p>{{ repo.description }}</p>
        <a :href="repo.homepage" target="_blank">{{ repo.homepage }}</a>
        <p v-if="repo.language" class="language">{{ repo.language }}</p>
    </div>
</div>
</template>

<style scoped>
.grid {
    margin-block: 2rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    gap: 3rem;
}

.card {
    border: 1px solid #24a76588;
    border-radius: .5rem;
    padding: .1rem 1rem;
    height: fit-content;
}

.card-heading {
    font-size: 1.4rem;
    font-weight: 700;
}

.language {
    font-size: .7rem;
    padding: 0 1rem;
    background-color: #24a76618;
    /*color: #10eb7d;*/
    width: fit-content;
    border: 1px solid #24a76588;
    border-radius: .5rem;
}
</style>