<template>
    <section class="upcoming">
        <div class="container d-flex flex-column">

            <div class="flex-wrapper d-flex justify-content-between">

                <div class="title-wrapper d-flex flex-column justify-content-center">
                    <p class="section-subtitle">Online Streaming</p>
                    <h2 class="h2 section-title">Upcoming Movies</h2>
                </div>

                <ul class="filter-list d-flex justify-content-center align-content-center gap-2 p-0">

                    <li>
                        <button @click="currentType = 'movies'" class="filter-btn">Movies</button>
                    </li>

                    <li>
                        <button @click="currentType = 'tvSeries'" class="filter-btn">TV Shows</button>
                    </li>

                    <li>
                        <button @click="currentType = 'animes'" class="filter-btn">Anime</button>
                    </li>

                </ul>

            </div>

            <ul class="has-scrollbar d-flex flex-row justify-content-between gap-3 pb-3 ps-0" id="upcomingMovies">
                <MovieCard v-for="item in currentData" :key="item.title" :movie="item">
                </MovieCard>
            </ul>

        </div>
    </section>
</template>

<script setup>
import MovieCard from './MovieCard.vue';
import { ref, onMounted, computed, reactive} from 'vue';


const currentType= ref('movies');
const mediaData = reactive({
    movies: [],
    tvSeries: [],
    animes:[]
});

const currentData = computed(()=>{
   return mediaData[currentType.value];
});

onMounted(async () => {
    const resMovie = await fetch('/assets/jsons/upcoming.json');
    mediaData.movies = await resMovie.json()
    const resTV = await fetch('/assets/jsons/world-best-TV-series.json');
    mediaData.tvSeries = await resTV.json()
    const resAnime = await fetch('/assets/jsons/world-best-TV-series.json');
    mediaData.animes = await resAnime.json()
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
    font-size: var(--fs-12);
    padding: 6px 10px;
    border-radius: 20px;
    background: var(--raisin-black);
    border: 2px solid var(--gunmetal-1);
    color: var(--white);
}


/*-----------------------------------*\
 * #MEDIA QUERIES
\*-----------------------------------*/
@media (min-width: 992px) {
    .top-rated {
        padding-bottom: 50px;
    }
    .upcoming .container .flex-wrapper .filter-list .filter-btn {
    font-size: var(--fs-11);
    padding: 12px 26px;
    }
}

@media (min-width: 1200px) {
    .top-rated {
        padding-bottom: 100px;
    }
}
</style>