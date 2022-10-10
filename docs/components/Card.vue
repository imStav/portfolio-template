<script setup>
import { getRepos } from '../api/getGitRepos'
import { ref, onMounted } from 'vue'

const repos = ref("")

onMounted(async () => {
    repos.value = await getRepos()
})
</script>

<template>
<div class="grid">
    <div v-for="repo in repos" :key="repo.id" class="card">
        <div v-if="repo.private === false">
            <div class="card-heading">
                <p class="leading-smallest">{{ repo.name }}</p>
                <a :href="repo.html_url" target="_blank">{{ repo.html_url.slice(8) }}</a>
            </div>

            <div class="card-body">
                <p>{{ repo.description }}</p>
            </div>

            <div class="card-footer">
                <a :href="repo.homepage" target="_blank">{{ repo.homepage }}</a>
                <p v-if="repo.language" class="language">{{ repo.language }}</p>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
a {
    font-size: 1rem;
}

.grid {
    display: flex;
    flex-flow: row wrap;
    gap: 2rem;
}

.card {
    flex-basis: calc(50% - 1rem);
    border: 1px solid #80808088;
    border-radius: .5rem;
    padding: .1rem 1rem;
    height: fit-content;
}

.card-heading {
    font-size: 1.4rem;
    font-weight: 700;
}

.leading-smallest {
    margin-bottom: 0;
}
.card-body {
    margin-block: 1rem;
}

.language {
    font-size: .7rem;
    padding: 0 1rem;
    border-radius: 100rem;
    width: fit-content;
    background-color: #2243d438;
    border: 1px solid #2243d488;
}

@media screen and (max-width: 500px) {
    .grid {
        display: block;
        column-count: 1;
    }

    .card {
        margin-bottom: 2rem;
    }
}
</style>