<template>
  <header class="sticky-top bg-dark bg-opacity-90">
    <nav class="navbar navbar-expand-lg navbar-dark p-1">
      <div class="container">
        <!-- Logo -->
        <router-link class="navbar-brand d-flex align-items-center" to="/">
          <div
            class="rounded-circle bg-gradient p-2 me-2"
            style="background: linear-gradient(to right, #f59e0b, #ec4899)"
          >
            <img src="/assets/images/logo.svg" class="logo_icon" width="30px" />
          </div>
          <span
            class="fw-bold"
            style="
              background: linear-gradient(to right, #f59e0b, #ec4899);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            "
            >MovieDB</span
          >
        </router-link>

        <!-- Mobile menu button -->
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Main navigation -->
        <nav class="collapse navbar-collapse" id="navbarContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <!-- Movies dropdown -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Movies
              </a>
              <ul class="dropdown-menu dropdown-menu-dark bg-secondary">
                <li>
                  <router-link class="dropdown-item" to="/movies/popular"
                    >Popular</router-link
                  >
                </li>
                <li>
                  <router-link class="dropdown-item" to="/movies/now-playing"
                    >Now Playing</router-link
                  >
                </li>
                <li>
                  <router-link class="dropdown-item" to="/movies/upcoming"
                    >Upcoming</router-link
                  >
                </li>
                <li>
                  <router-link class="dropdown-item" to="/movies/top-rated"
                    >Top Rated</router-link
                  >
                </li>
              </ul>
            </li>

            <!-- TV Shows dropdown -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                TV Shows
              </a>
              <ul class="dropdown-menu dropdown-menu-dark bg-secondary">
                <li>
                  <router-link class="dropdown-item" to="/tv/popular"
                    >Popular</router-link
                  >
                </li>
                <li>
                  <router-link class="dropdown-item" to="/tv/airing-today"
                    >Airing Today</router-link
                  >
                </li>
                <li>
                  <router-link class="dropdown-item" to="/tv/on-tv"
                    >On TV</router-link
                  >
                </li>
                <li>
                  <router-link class="dropdown-item" to="/tv/top-rated"
                    >Top Rated</router-link
                  >
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <router-link class="nav-link" to="/celebrities"
                >Celebrities</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/news">News</router-link>
            </li>
          </ul>

          <!-- Right side elements -->
          <div class="d-flex align-items-center gap-4">
            <!-- Search form -->
            <form class="d-flex me-3" @submit.prevent="handleSearch">
              <div class="input-group">
                <input
                  v-model="searchQuery"
                  class="form-control bg-dark text-white border-secondary"
                  type="search"
                  placeholder="Search movies..."
                />
                <button class="btn btn-outline-secondary" type="submit">
                  <ion-icon name="search-outline"></ion-icon>
                </button>
              </div>
            </form>

            <!-- Language selector -->
            <div class="dropdown me-3">
              <button
                class="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
              >
                <i class="fas fa-globe me-1"></i> EN
              </button>
              <ul class="dropdown-menu dropdown-menu-dark bg-secondary">
                <li><a class="dropdown-item" href="#">English (EN)</a></li>
                <li><a class="dropdown-item" href="#">Español (ES)</a></li>
                <li><a class="dropdown-item" href="#">Français (FR)</a></li>
                <li><a class="dropdown-item" href="#">Deutsch (DE)</a></li>
              </ul>
            </div>

            <!-- Sign in button -->
            <button
              class="btn btn-primary"
              style="
                background: linear-gradient(to right, #f59e0b, #ec4899);
                border: none;
              "
              @click="handleSignIn"
            >
              Sign In
            </button>
          </div>
        </nav>
      </div>
    </nav>
  </header>
</template>

<script setup></script>

<style scoped></style>
