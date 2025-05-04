const upcomingMovies = document.getElementById("upcomingMovies");
const topRatedMovies = document.getElementById("topRatedMovies");
const tvSeries = document.getElementById("tvSeries");

fetchMovies("./assets/jsons/upcoming.json", upcomingMovies);
fetchMovies("./assets/jsons/top-rated.json", topRatedMovies);
fetchMovies("./assets/jsons/world-best-TV-series.json", tvSeries);


function fetchMovies(path,aimElement) {
  letMoviesList = null;
  fetch(path)
    .then((response) => response.json())
    .then((jsArrayObjects) => {
      MoviesList = jsArrayObjects;
      console.log(MoviesList);
      fullfillLists(MoviesList, aimElement);
    });
};


function fullfillLists(list, aimElement) {
  list.forEach((movie) => {
    const card = document.createElement("li");
    card.className = "card";
    card.innerHTML = `
          <div class="movie-card">
            <figure class="card-banner">
              <img src="${movie.image}" alt="${movie.title}"/>
            </figure>
            <div class="title-wrapper">
              <h3 class="card-title">${movie.title}</h3>
              <time class="time">${movie.year}</time>
            </div>
            <div class="card-meta">
              <div class="badge badge-outline">${movie.badge}</div>
              <div class="duration">
                <ion-icon name="time-outline"></ion-icon>
                <div>${movie.duration}</div>
              </div>
              <div class="rating">
                <ion-icon name="star"></ion-icon>
                <div>${movie.rating}</div>
              </div>
            </div>

          </div>
        `;
    aimElement.appendChild(card);
  });
}
