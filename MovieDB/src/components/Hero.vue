<template>
  <section class="hero">
    <div class="position-relative d-flex flex-column justify-content-center">
      <div class="carousel position-relative d-flex flex-column">
        <figure class="position-absolute w-100 m-0">
          <transition name="fade">
            <img v-if="isTransitioning" class="carousel-movie-background w-100" :src="currentMovie.background"
              :alt="currentMovie.title" key="currentMovie.id" />
          </transition>
        </figure>

        <div class="intro d-none d-none d-lg-flex position-relative row align-items-center justify-content-center text-white g-5 show">
          <div class="col-6 col-xl-5">
            <div class="word">
              <h3 class="mb-3">{{ currentMovie.title }}</h3>
              <p class="">{{ currentMovie.description }}</p>
            </div>
            <div class="action d-none d-lg-flex">
              <button class="btn btn-warning text-white btn-lg px-4 py-2 rounded-pill fw-semibold">Watch Now</button>
            </div>
          </div>
          <div class="offset-xl-1 col-6 col-xl-5">
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

        <ul class="mid-list carousel-list d-none d-md-flex d-xl-none  d-flex justify-content-center gap-3 w-50 mt-5 m-auto">
          <li v-for="movie in movies" :key="movie.id"
            class="bg-dark bg-opacity-75 rounded overflow-hidden shadow-sm text-white text-center w-25"
            :class="{'bg-white text-dark': movie.id === currentMovie.id }">
            <span class="mid-list-element"></span>
          </li>
        </ul>
        
        <button class="carousel-control-prev d-none d-md-block d-xl-none" type="button" @click="showPrev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>

        <button class="carousel-control-next d-none d-md-block d-xl-none" type="button" @click="showNext">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
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
  timer = setTimeout(() => {
    renderMovie(id);
    currentIndex.value = movies.value.findIndex(m => m.id === id);
  }, 500)
}

function resumeAutoPlay() {
  startAutoPlay()
}

function showPrev(){
  clearTimeout(timer);
  currentIndex.value = (currentIndex.value - 1 + movies.value.length) % movies.value.length;
  renderMovie(movies.value[currentIndex.value].id);
  startAutoPlay();
}

function showNext(){
  clearTimeout(timer);
  currentIndex.value = (currentIndex.value + 1) % movies.value.length;
  renderMovie(movies.value[currentIndex.value].id);
  startAutoPlay();
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.mid-list-element{
  height: 5px;
}

/*-----------------------------------*\
 * #MEDIA QUERIES
\*-----------------------------------*/
@media (min-width: 768px){
  .intro{
    width: 80vw;
    margin: auto;
    margin-top: 0;
    margin-bottom:0 ;
  }
  .intro div .word{
    min-width: 400px;
  }
  .mid-list{
    position: absolute;
    bottom: 20px;
    right: 40px;
  }
}

@media (min-width: 992px){
  .mid-list{
    position:relative
  }
}

@media (min-width: 1200px) {
  .carousel {
    height: 100vh;
  }

  .carousel-movie-background {
    height: 100vh;
  }
  
  .intro{
    width: 100vw;
    padding-top: 80px;
  }
}


</style>