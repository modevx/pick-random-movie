// Variables
const btn_search = document.getElementById('btn-find');
const input_movie = document.getElementById('input-find');

const ui = new UI();
const tmdb = new TMDB();
const storage = new Storage();

let arr_searchResults;

// Get user's current movie list
const localStorage_movies = storage.getUserMovies();

// Search button event listener
btn_search.addEventListener('click', (e) => {
  // create variable that holds user's search input
  // make API call that returns matching titles
  // display results 
  // create btn-add elements
  // clear search field
  const usersMovie = input_movie.value;
  
  tmdb.searchMovieTitles(usersMovie)
  .then((arr_searchResults) => {    
    ui.displayMovieResults(arr_searchResults); 
  })
  .catch((err) => console.log(err));

  input_movie.value = '';
});


