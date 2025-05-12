<script setup>
import Header from './components/Header.vue'
import Hero from './components/Hero.vue';
import Upcoming from './components/Upcoming.vue';
import TopRated from './components/TopRated.vue';
import TvSeries from './components/TvSeries.vue';
import QA from './components/QA.vue';
import Footer from './components/Footer.vue';
</script>


<template>
 <body id="top" class="bg-dark text-white">
  <Header></Header>
  <main>
    <article>
      <Hero></Hero>
      <Upcoming></Upcoming>
      <TopRated></TopRated>
      <TvSeries></TvSeries>
    </article>
    <section>
      <QA></QA>
    </section>
  </main>
  <Footer></Footer>
 </body>
</template>

<style scoped>
</style>
