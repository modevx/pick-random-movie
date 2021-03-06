// Variables
const home = document.getElementById('nav-link-home')
const watchMovie = document.getElementById('nav-link-watch');
const editMovies = document.getElementById('nav-link-edit');
const input_movie = document.getElementById('input-find');
const btn_search = document.getElementById('btn-find');

const displayDiv = document.getElementById('render');

// initialize TMBD object
const tmdb = new TMDB();

UI.displayHomeScreen();

// ADD EVENT LISTENERS TO UI ELEMENTS
// [ ] Home nav link
home.addEventListener('click', UI.displayHomeScreen);

// [ ] Watch A Movie nav link
watchMovie.addEventListener('click', UI.displayWatchAMovieScreen);

// [x] Edit My Movies nav link
editMovies.addEventListener('click', UI.displayEditMoviesScreen);

// [x] Find Movie button
btn_search.addEventListener('click', TMDB.findNewMovie);


