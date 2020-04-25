// Variables
const btn_search = document.getElementById('btn-find');
const input_movie = document.getElementById('input-find');

const ui = new UI();
const tmdb = new TMDB();
const storage = new Storage();

let arr_searchResults;

// Get user's current movie list
const usersMovies = storage.getUserMovies();

// Search button event listener
btn_search.addEventListener('click', (e) => {
  // movie to search for
  const usersMovie = input_movie.value;
  
  // API call that returns matching titles
  tmdb.searchMovieTitles(usersMovie)
  .then((returnedMovies) => {
    
    // create new array filtering out movies without images
    arr_searchResults = [];
    returnedMovies.results.forEach(movie => {
      if(movie.poster_path != null) {
        arr_searchResults.push(movie);
      }
    });
      
    // display results from new filtered array
    ui.displayMovieResults(arr_searchResults);      

  })
  .catch((err) => console.log(err));

  // Add movie to userMovies
  // btn_add.addEventListener('click', addMovie);

  let btns_add = document.querySelectorAll('#btn-add');
  console.log(btns_add);

  for(let i = 0; i < btns_add.length; i++) {
    btns_add[i].addEventListener('click', addMovie);
  }

});

function addMovie() {
  console.log(i);
}
