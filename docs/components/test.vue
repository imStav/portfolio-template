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
<div v-for="repo in repos">
    <p>{{ repo.name }}</p>
    <p>{{ repo.description }}</p>
    <p>{{ repo.homepage }}</p>
    <p>{{ repo.language }}</p>
</div>
</template>