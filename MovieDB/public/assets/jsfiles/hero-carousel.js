const carouselList = document.getElementById("carouselList");
const carousel = document.getElementById("carousel");
const intro = document.getElementById("intro");
let idList = null;
let carouselMoviesList = null;
let currentIndex = 0;
let slideInterval;

fetch("./assets/jsons/carousel-movies.json")
  .then((response) => response.json())
  .then((jsArrayObjects) => {
    carouselMoviesList = jsArrayObjects;
    carouselMoviesList.forEach((carouselMovie) => {
      const carouselListElement = document.createElement("li");
      carouselListElement.className = "carousel-list-element";
      carouselListElement.setAttribute("data-id", carouselMovie.id);
      carouselListElement.innerHTML = `
                <figure class="carousel-list-element-poster">
                    <img src="${carouselMovie.poster}" alt="${carouselMovie.title}"/>
                </figure>
                <div class="carousel-list-element-title">
                    ${carouselMovie.title}
                </div>
            `;
      carouselList.appendChild(carouselListElement);
      carouselListElement.addEventListener("mouseover", () => {
        hoverTimer = setTimeout(() => {
          const clickedId = Number(carouselListElement.getAttribute("data-id"));
          renderCarousel(clickedId);
          currentIndex = idList.indexOf(clickedId);
          stopCarouselAutoPlay();
        }, 700);
      });

      carouselListElement.addEventListener("mouseout", () => {
        clearTimeout(hoverTimer);
        startCarouselAutoPlay();
      });
    });
    idList = carouselMoviesList.map((movie) => movie.id);

    renderCarousel(idList[currentIndex]);
    startCarouselAutoPlay();
  });

const carouselMovieBackground = document.getElementById(
  "carouselMovieBackground"
);
const carouselMovieTitle = document.getElementById("carouselMovieTitle");
const carouselMovieDescription = document.getElementById(
  "carouselMovieDescription"
);
const trailer = document.getElementById("trailer");

function startCarouselAutoPlay() {
  if (slideInterval) {
    clearInterval(slideInterval);
  }
  slideInterval = setInterval(() => {
    currentIndex = (currentIndex + 1) % idList.length;
    renderCarousel(idList[currentIndex]);
  }, 5000);
}

function stopCarouselAutoPlay() {
  clearInterval(slideInterval);
}

function renderCarousel(targetId) {
  carouselMovieBackground.classList.remove("show");
  intro.classList.remove("show");
  setTimeout(() => {
    const foundMovie = carouselMoviesList.find(
      (movie) => movie.id === targetId
    );
    console.log(foundMovie);
    carouselMovieBackground.src = foundMovie.background;
    carouselMovieBackground.alt = foundMovie.title;
    carouselMovieTitle.innerText = foundMovie.title;
    carouselMovieDescription.innerText = foundMovie.description;
    trailer.src = foundMovie.trailer;
    carouselMovieBackground.classList.add("show");
    intro.classList.add("show");
  }, 600);
}
