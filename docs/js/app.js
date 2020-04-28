// Variables
const home = document.getElementById('nav-link-home')
const watchMovie = document.getElementById('nav-link-watch');
const editMovies = document.getElementById('nav-link-edit');
const input_movie = document.getElementById('input-find');
const btn_search = document.getElementById('btn-find');

const tmdb = new TMDB();

let arr_searchResults;

// Get user's current movie list
document.addEventListener('DOMContentLoaded', Storage.getUserMovies);

// ADD EVENT LISTENERS TO UI ELEMENTS
// Home nav link
home.addEventListener('click', UI.displayHomeScreen);

// Watch A Movie nav link
watchMovie.addEventListener('click', UI.displayMovieToWatch);

// Edit My Movies nav link
editMovies.addEventListener('click', UI.displayEditMoviesScreen);

// Find Movie button
btn_search.addEventListener('click', TMDB.findNewMovie);


