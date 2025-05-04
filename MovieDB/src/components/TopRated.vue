<template>
    <section class="top-rated">
        <div class="container d-flex flex-column justify-content-center align-items-center">

            <p class="section-subtitle text-center">Online Streaming</p>

            <h2 class="h2 section-title">Top Rated Movies</h2>

            <ul class="filter-list d-flex justify-content-center align-items-center gap-3">

                <li>
                    <button class="filter-btn">Movies</button>
                </li>

                <li>
                    <button class="filter-btn">TV Shows</button>
                </li>

                <li>
                    <button class="filter-btn">Documentary</button>
                </li>

                <li>
                    <button class="filter-btn">Sports</button>
                </li>

            </ul>

            <ul class="movies-list-type p-0" id="topRatedMovies">
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
    const res = await fetch('/assets/jsons/top-rated.json');
    movies.value = await res.json()
})
</script>

<style scoped>
.top-rated {
    padding-top: 100px;
}

.top-rated .container .section-title {
    margin-bottom: 50px;
}

.top-rated .container .filter-list {
    margin-bottom: 50px;
}

.top-rated .container .filter-list .filter-btn {
    font-size: var(--fs-10);
    font-weight: var(--fw-700);
    color: var(--light-gray);
    font-size: var(--fs-11);
    padding: 17px 25px;
    border-radius: 4px;
    background: var(--rich-black-fogra-39);
    border: none;
}

.movies-list-type {
    display: grid;
    gap: 60px 30px;
    grid-template-columns: repeat(2, 1fr);
}

@media (min-width: 768px) {
    .movies-list-type {
        grid-template-columns: repeat(3, 1fr);
    }
}

@media (min-width: 992px) {
    .movies-list-type {
        grid-template-columns: repeat(4, 1fr);
    }
}
</style>
