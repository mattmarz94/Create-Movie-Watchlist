// API Key e099eae9

const movieForm = document.querySelector("#movie-search-form")
const moviesContainer = document.querySelector('#movies-container')
const watchlistContainer = document.querySelector(".watchlist-container")

let moviesArray = []
let movieWatchlist = []

async function handleMovieInfo(movie) {
    const moviesIds = movie.map(m => m.imdbID);

    await Promise.all(moviesIds.map(async id => {
        if (!moviesArray.some(film => film.Title === film.Title)) {
            try {
                const response = await fetch(`http://www.omdbapi.com/?apikey=e099eae9&i=${id}`);
                const data = await response.json();
                moviesArray.push(data);
            } catch (error) {
                console.error('Error fetching movie data:', error);
            }
        }
    }));

    renderMovies();
}


if (movieForm) {
    movieForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const userInput = document.getElementById("user-input");

        try {
            const response = await fetch(`http://www.omdbapi.com/?apikey=e099eae9&s=${userInput.value}`);
            const data = await response.json();
            
            handleMovieInfo(data.Search);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    });
}


function renderMovies(){
    let renderedMoviesHtml = ''

    for(let movie of moviesArray) {
        renderedMoviesHtml += `
        <div class="rendered-movies-container">
            <img src = "${movie.Poster}">
            <div class="movie-container">
                <div class="title-container">
                    <h2>${movie.Title}</h2>
                    <i class="fa-solid fa-star"></i>
                    <p class="movie-rating">${movie.imdbRating}</p>
                </div>
                <div class = "time-genre-add-container">
                    <p class ="movie-runtime">${movie.Runtime}</p>
                    <p class ="movie-genre">${movie.Genre}</p>
                    <i class="fa-solid fa-circle-plus" data-watchlist=${movie.imdbID}></i>
                    <p class="watchlist" data-watchlist=${movie.imdbID}>Watchlist</p>
                </div>
                <div class ="movie-plot-container">
                    <p class="movie-plot">${movie.Plot}</p>
                </div>
            </div>
        </div>
        <hr/>
        `
    }
    moviesContainer.innerHTML = renderedMoviesHtml
}

moviesContainer.addEventListener('click', (e) => {
    addToWatchlist(e.target.dataset.watchlist)
})

function addToWatchlist(id){
    for (let movie of moviesArray){
        if (movie.imdbID === id){
            if(!movieWatchlist.some(film => film.Title === movie.Title)){
                movieWatchlist.push(movie)
                const popup = document.createElement("div")
                popup.classList.add("pop-up")
                popup.textContent = "Movie added to watchlist!"

                document.body.appendChild(popup);

                setTimeout(() => {
                    popup.remove()
                }, 2000);
                updateWatchlist()
            }else{
                const popup = document.createElement("div")
                popup.classList.add("pop-up")
                popup.textContent = "Movie already added to watchlist!"
                document.body.appendChild(popup);

                setTimeout(() => {
                    popup.remove()
                }, 2000);
                updateWatchlist()
            }
        }
        
    }
}

function updateWatchlist(){
    localStorage.setItem("watchlist", JSON.stringify(movieWatchlist))
}

function renderWatchlist(){
    let renderedMoviesHtml = ''

    for (let movie of movieWatchlist){
        renderedMoviesHtml += `
        <div class="rendered-movies-container">
            <img src = "${movie.Poster}">
            <div class="movie-container">
                <div class="title-container">
                    <h2>${movie.Title}</h2>
                    <i class="fa-solid fa-star"></i>
                    <p class="movie-rating">${movie.imdbRating}</p>
                </div>
                <div class = "time-genre-add-container">
                    <p class ="movie-runtime">${movie.Runtime}</p>
                    <p class ="movie-genre">${movie.Genre}</p>
                    <i class="fa-solid fa-square-minus" data-remove=${movie.imdbID}></i>
                    <p class="watchlist" data-remove=${movie.imdbID}>Remove</p>
                </div>
                <div class ="movie-plot-container">
                    <p class="movie-plot">${movie.Plot}</p>
                </div>
            </div>
        </div>
        <hr/>
        `
    }
    if(watchlistContainer){
    watchlistContainer.innerHTML = renderedMoviesHtml
    }
}

function removeMovie(id){
    const indexToRemove = movieWatchlist.findIndex(movie => movie.imdbID === id)
    if (indexToRemove !== -1){
        movieWatchlist.splice(indexToRemove, 1)
        updateWatchlist()
        renderWatchlist()
    }
}

if(watchlistContainer){
    watchlistContainer.addEventListener("click", (e) => {
        if(e.target.dataset.remove){
            removeMovie(e.target.dataset.remove)
            const popup = document.createElement("div")
            popup.classList.add("pop-up")
            popup.textContent = "Movie sucessfully removed"

            document.body.appendChild(popup);

            setTimeout(() => {
                popup.remove()
            }, 2000);
        }
    })
}

const watchlistMovies = localStorage.getItem("watchlist")
if (watchlistMovies){
    movieWatchlist = JSON.parse(watchlistMovies)
    renderWatchlist()
}