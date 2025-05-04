<template>
  <section class="hero">
    <div class="position-relative d-flex flex-column justify-content-center">
      <div class="carousel position-relative d-flex flex-column">
        <figure class="position-absolute w-100 m-0">
          <img class="carousel-movie-background w-100" :src="currentMovie.background" :alt="currentMovie.title"
            :class="{ show: isTransitioning }" />
        </figure>

        <div class="intro position-relative row align-items-center justify-content-center text-white g-5 show wh-100">
          <div class="col-5">
            <h3 class="mb-3">{{ currentMovie.title }}</h3>
            <p>{{ currentMovie.description }}</p>
            <div class="action d-none d-lg-flex">
              <button class="btn btn-warning text-white btn-lg px-4 py-2 rounded-pill fw-semibold">Watch Now</button>
            </div>
          </div>
          <div class="offset-1 col-5">
            <video class="trailer w-100 rounded-5" :src="currentMovie.trailer" autoplay loop muted controls></video>
          </div>
        </div>

        <ul class="carousel-list d-none d-xl-flex position-relative d-flex justify-content-center gap-3 w-50 mt-5">
          <li v-for="movie in movies" :key="movie.id"
            class="bg-dark bg-opacity-75 rounded overflow-hidden shadow-sm text-white text-center w-25"
            @mouseover="handleHover(movie.id)" @mouseout="resumeAutoPlay">
            <figure class="mb-2">
              <img class="w-100 img-fluid rounded-top" :src="movie.poster" :alt="movie.title" />
            </figure>
            <div class="small px-2 py-1">{{ movie.title }}</div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>


<script setup>
import { ref, onMounted, render } from 'vue';
const movies = ref([]);
const currentIndex = ref(0);
const currentMovie = ref({});
const isTransitioning = ref(true);
let timer = null;

function renderMovie(id) {
  const movie = movies.value.find(m => m.id === id);
  if (!movie) return;
  isTransitioning.value = false;
  setTimeout(() => {
    currentMovie.value = movie;
    isTransitioning.value = true;
  }, 600)
}

function startAutoPlay() {
  clearInterval(timer);
  timer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % movies.value.length;
    renderMovie(movies.value[currentIndex.value].id);
  }, 5000)
}

function handleHover(id) {
  clearTimeout(timer);
  renderMovie(id);
  currentIndex.value = movies.value.findIndex(m => m.id === id);
}

function resumeAutoPlay() {
  startAutoPlay()
}

onMounted(async () => {
  const res = await fetch('/assets/jsons/carousel-movies.json');
  movies.value = await res.json();
  currentMovie.value = movies.value[0];
  startAutoPlay();
})

</script>

<style scoped>
.hero {
  overflow: hidden;
  position: relative;
  background: var(--rich-black-fogra-39);
}

.intro {
  padding-top: 150px;
  min-height: 500px;
}

.intro div .word {
  height: 200px;
}

.tralier {
  aspect-ratio: 16 / 9;
  width: 100%;
}

.carousel-list-element figure img {
  width: 200px;
  border-radius: 20px;
}


/*-----------------------------------*\
 * #MEDIA QUERIES
\*-----------------------------------*/

@media (min-width: 1200px) {
  .carousel {
    height: 100vh;
  }

  .carousel-movie-background {
    height: 100vh;
  }
}
</style>