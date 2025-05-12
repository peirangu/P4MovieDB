<template>
  <li class="movie-card">
    <div class="d-flex flex-column align-items-center justify-content-between h-100">
      <figure class="card-banner w-100 rounded-2">
        <img class="w-100 h-100" :src="movie.image" :alt="movie.title" />
      </figure>
      <div class="title-wrapper w-100 d-flex justify-content-between mt-2">
        <p class="text-white fw-bold small">{{ movie.title }}</p>
        <time class=" small">{{ movie.year }}</time>
      </div>
      <div class="w-100 d-flex justify-content-between gap-2 mt-1">
        <div class="badge py-1 px-2 border border-white small">
          {{ movie.badge }}
        </div>
        <div class="d-flex align-items-center ms-auto text-white small">
          <ion-icon name="time-outline" />
          <span class="ms-1">{{ movie.duration }}</span>
        </div>
        <div class="d-flex align-items-center text-white small">
          <ion-icon name="star" />
          <span class="ms-1">{{ movie.rating }}</span>
        </div>
      </div>
    </div>
  </li>
</template>

<script setup>
const props = defineProps({
  movie: Object,
});
</script>

<style scoped>
.movie-card {
  overflow: hidden;
  width: 150px;
  height: 350px;
  flex: 0 0 auto;
  min-width: 150px;
}

.card-banner {
  height: 225px;
}

.movie-card .title-wrapper p {
  font-size: var(--fs-12);
}

.card-banner {
  overflow: hidden;
}

.movie-card .title-wrapper p {
  width: 70%;
  font-weight: var(--fw-700);
}

.title-wrapper .time {
  color: var(--citrine);
  font-size: var(--fs-12);
}

.badge {
  color: var(--citrine);
  font-size: var(--fs-12);
  font-weight: var(--fw-700);
}

.duration div {
  color: var(--white);
  font-size: var(--fs-12);
}

.rating div {
  color: var(--white);
  font-size: var(--fs-12);
}

.movie-card div div div ion-icon {
  color: var(--citrine);
  font-size: var(--fs-13);
}


/*-----------------------------------*\
 * #MEDIA QUERIES
\*-----------------------------------*/

@media (min-width: 550px) {
  .movie-card {
    width: 200px;
    height: 400px;
    flex: 0 0 auto;
    min-width: 200px;
  }

  .card-banner {
    height: 300px;
  }

  .movie-card .title-wrapper p {
    font-size: var(--fs-10);
  }

  .title-wrapper .time {
    font-size: var(--fs-9);
  }

  .badge {
    font-size: var(--fs-10);
  }

  .duration div {
    font-size: var(--fs-9);
  }

  .rating div {
    font-size: var(--fs-9);
  }

  .movie-card div div div ion-icon {
    font-size: var(--fs-9);
  }
}


@media (min-width: 992px) {
  .movie-card {
    width: 200px;
    height: 400px;
  }

  .card-banner {
    height: 300px;
  }

  .movie-card .title-wrapper p {
    font-size: var(--fs-10);
  }

  .title-wrapper .time {
    font-size: var(--fs-7);
  }
}

@media (min-width: 1200px) {
  .movie-card {
    width: 300px;
    height: 570px;
  }

  .card-banner {
    height: 450px;
  }

  .movie-card .title-wrapper p {
    font-size: var(--fs-6);
  }

}
</style>
