// Variables
const input_movie = document.getElementById('input-find');
const btn_search = document.getElementById('btn-find');
let arr_movies;

const ui = new UI();
const tmdb = new TMDB();
const storage = new Storage();

// Search button event listener
btn_search.addEventListener('click', (e) => {
  // movie user's searching for
  const usersMovie = input_movie.value;
  
  // API call that returns matching titles
  tmdb.searchMovieTitles(usersMovie)
  .then((returnedMovies) => {
    
    // create new array filtering out movies without images
      arr_movies = [];
      returnedMovies.results.forEach(movie => {
        if(movie.poster_path != null) {
          arr_movies.push(movie);
        }
      });
      
      // display results from new filtered array
      ui.displayMovieResults(arr_movies);      

      console.log('NEW MOVIE ARRAY:', arr_movies);
    })
    .catch((err) => console.log(err));
})


