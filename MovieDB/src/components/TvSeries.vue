<template>
    <section class="tv-series">
        <div class="container d-flex flex-column">

            <p class="section-subtitle">Best TV Series</p>

            <h2 class="h2 section-title">World Best TV Series</h2>

            <ul class="has-scrollbar d-flex flex-row justify-content-between gap-3 pb-3 ps-0" id="tvSeries">
                <MovieCard v-for="movie in movies" :key="movie.title" :movie="movie">
                </MovieCard>
            </ul>
        </div>
    </section>
</template>

<script setup>
import MovieCard from './MovieCard.vue';
import { ref, onMounted } from 'vue';

const movies = ref([])

onMounted(async () => {
    const res = await fetch('/assets/jsons/world-best-TV-series.json');
    movies.value = await res.json()
})
</script>

<style scoped>
.tv-series {
    padding-top: 100px;
    padding-bottom: 100px;
}

.tv-series .container .section-title {
    text-align: center;
    margin-bottom: 50px;
}
</style>