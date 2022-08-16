<script setup>
import { getRepos } from './docs/api/getGitRepos'
import { ref, onMounted } from 'vue'

const repos = ref("")

onMounted(async () => {
    const getReps = await getRepos()
    repos.value = getReps
})
</script>

<template>
<div class="grid">
    <div v-for="repo in repos" :key="repo.id" class="card">
        <div v-if="repo.private === false" class="wrapper">
            <div class="card-heading">
                <p class="leading-smallest">{{ repo.name }}</p>
                <a :href="repo.html_url" target="_blank">{{ repo.svn_url.slice(8) }}</a>
            </div>

            <div class="card-body">
                <p>{{ repo.description }}</p>
            </div>

            <div class="card-footer">
                <a :href="repo.homepage" target="_blank">{{ repo.homepage }}</a>

                <p v-if="repo.language == 'Vue'" class="lang-vue">{{ repo.language }}</p>
                <p v-else-if="repo.language == 'HTML'" class="lang-html">{{ repo.language }}</p>
                <p v-else-if="repo.language == 'CSS'" class="lang-css">{{ repo.language }}</p>
                <p v-else-if="repo.language == 'JavaScript'" class="lang-js">{{ repo.language }}</p>
                <p v-else-if="repo.language == 'PHP'" class="lang-php">{{ repo.language }}</p>
                <p v-else-if="repo.language == 'Python'" class="lang-py">{{ repo.language }}</p>
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
    margin-block: 2rem;
    gap: 2rem;
    column-count: 2;
}

.card {
    border: 1px solid #80808088;
    border-radius: .5rem;
    padding: .1rem 1rem;
    margin-bottom: 2rem;
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

.lang-vue,
.lang-html,
.lang-css,
.lang-js,
.lang-php,
.lang-py {
    font-size: .7rem;
    padding: 0 1rem;
    border-radius: 100rem;
    width: fit-content;
}

.lang-vue {
    background-color: #24a76618;
    border: 1px solid #24a76688;
}

.lang-html {
    background-color: #a73e2418;
    border: 1px solid #a73e2488;
}

.lang-css {
    background-color: #246ca718;
    border: 1px solid #246ca788;
}

.lang-js {
    background-color: #a5a72418;
    border: 1px solid #a5a72488;
}

.lang-php {
    background-color: #3824a718;
    border: 1px solid #3824a788;
}

.lang-py {
    background-color: #243ca718;
    border: 1px solid #243ca788;
}

@media screen and (max-width: 500px) {
    .grid {
        column-count: 1;
    }
}
</style>