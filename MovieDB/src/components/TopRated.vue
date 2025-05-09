<template>
  <section class="top-rated">
    <div
      class="container d-flex flex-column justify-content-center align-items-center"
    >
      <p class="section-subtitle text-center">Online Streaming</p>

      <h2 class="h2 section-title">Top Rated Movies</h2>

      <ul
        class="filter-list d-flex justify-content-center align-items-center gap-3 p-0"
      >
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

      <TransitionGroup
        name="fade-slide"
        tag="ul"
        class="movies-list-type p-0"
        id="topRatedMovies"
      >
        <MovieCard
          v-for="(movie, index) in visibleMovies"
          :key="movie.title"
          :movie="movie"
        />
      </TransitionGroup>

      <button
        class="btn btn-outline-warning mt-3"
        style="
          background: linear-gradient(to right, #f59e0b, #ec4899);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        "
        @click="toggleView"
      >
        {{ toggleText }}
      </button>
    </div>
  </section>
</template>

<script setup>
import MovieCard from "./MovieCard.vue";
import { ref, computed, onMounted } from "vue";

const movies = ref([]);

const showAll = ref(false);

const visibleMovies = computed(() => {
  return showAll.value ? movies.value : movies.value.slice(0, 8);
});

const toggleText = computed(() => (showAll.value ? "Collapse" : "View All"));

const toggleView = () => {
  showAll.value = !showAll.value;
};

onMounted(async () => {
  const res = await fetch("/assets/jsons/top-rated.json");
  movies.value = await res.json();
});
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
  font-size: var(--fs-12);
  padding: 8px 13px;
  border-radius: 4px;
  background: var(--rich-black-fogra-39);
  border: none;
}

.movies-list-type {
  display: grid;
  gap: 60px 30px;
  grid-template-columns: repeat(2, 1fr);
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.4s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.fade-slide-enter-to,
.fade-slide-leave-from {
  opacity: 1;
  transform: translateY(0);
}

@media (min-width: 768px) {
  .movies-list-type {
    grid-template-columns: repeat(3, 1fr);
  }
  .top-rated .container .filter-list .filter-btn {
  font-size: var(--fs-11);
  padding: 17px 25px;
  }

}

@media (min-width: 992px) {
  .movies-list-type {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
