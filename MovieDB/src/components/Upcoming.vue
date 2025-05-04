<template>
    <section class="upcoming">
        <div class="container d-flex flex-column">

            <div class="flex-wrapper d-flex justify-content-between">

                <div class="title-wrapper d-flex flex-column justify-content-center">
                    <p class="section-subtitle">Online Streaming</p>

                    <h2 class="h2 section-title">Upcoming Movies</h2>
                </div>

                <ul class="filter-list d-flex justify-content-center align-content-center gap-2">

                    <li>
                        <button class="filter-btn">Movies</button>
                    </li>

                    <li>
                        <button class="filter-btn">TV Shows</button>
                    </li>

                    <li>
                        <button class="filter-btn">Anime</button>
                    </li>

                </ul>

            </div>

            <ul class="has-scrollbar d-flex flex-row justify-content-between gap-3 pb-3 ps-0" id="upcomingMovies">
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
    const res = await fetch('/assets/jsons/upcoming.json');
    movies.value = await res.json()
})

</script>

<style scoped>
.upcoming {
    padding-top: 100px;
}

.upcoming .container .flex-wrapper {
    margin-bottom: 50px;
}

.upcoming .container .flex-wrapper .title-wrapper .section-subtitle {
    text-align: left;
}

.upcoming .container .flex-wrapper .filter-list .filter-btn {
    color: var(--white);
    font-size: var(--fs-11);
    padding: 12px 26px;
    border-radius: 20px;
    background: var(--raisin-black);
    border: 2px solid var(--gunmetal-1);
}


/*-----------------------------------*\
 * #MEDIA QUERIES
\*-----------------------------------*/
@media (min-width: 992px) {
    .top-rated {
        padding-bottom: 50px;
    }
}

@media (min-width: 1200px) {
    .top-rated {
        padding-bottom: 100px;
    }
}
</style>