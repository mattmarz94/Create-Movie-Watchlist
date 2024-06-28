// API Key e099eae9

const movieForm = document.querySelector("#movie-search-form")
const searchBtn = document.getElementById("search-btn")

let moviesArray = []
let movieWatchlist = []

function handleMovieInfo(movie){
    moviesArray = []
    
    const moviesIds = movie.map(m => m.imdbID)

    moviesIds.forEach(id =>{
        
        fetch(`http://www.omdbapi.com/?apikey=e099eae9&i=${id}`)
            .then(res => res.json())
            .then(data => console.log(data))
    })



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
