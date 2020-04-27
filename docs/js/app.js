// Variables
const watchMovie = document.getElementById('nav-link-watch');
const editMovies = document.getElementById('nav-link-edit');
const input_movie = document.getElementById('input-find');
const btn_search = document.getElementById('btn-find');

const tmdb = new TMDB();

let arr_searchResults;

// Get user's current movie list
document.addEventListener('DOMContentLoaded', Storage.getUserMovies);

// Search button event listener
btn_search.addEventListener('click', (e) => {
  // create variable that holds user's search input
  // make API call that returns matching titles
  // display results 
  // create btn-add elements
  // clear search field
  const movieToFind = input_movie.value;
  
  tmdb.searchMovieTitles(movieToFind)
  .then((arr_searchResults) => {    
    UI.displayMovieResults(arr_searchResults); 
  })
  .catch((err) => console.log(err));

  input_movie.value = '';
});


