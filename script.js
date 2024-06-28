// API Key e099eae9

const movieForm = document.querySelector("#movie-search-form")
const moviesContainer = document.getElementById('movies-container')

let moviesArray = []
let movieWatchlist = []

function handleMovieInfo(movie){
    
    const moviesIds = movie.map(m => m.imdbID)

    moviesIds.forEach(id =>{
        
        fetch(`http://www.omdbapi.com/?apikey=e099eae9&i=${id}`)
            .then(res => res.json())
            .then(data => {
                
                moviesArray.push(data)
                
            })
        })
        renderMovies()
}

movieForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const userInput = document.getElementById("user-input")

    fetch(`http://www.omdbapi.com/?apikey=e099eae9&s=${userInput.value}`)
        .then( res => res.json() )
        .then( data => {
                    
            handleMovieInfo(data.Search)
        })
})

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