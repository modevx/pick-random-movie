class TMDB {
  constructor() {
    this.API_KEY = '8138a9c0b29932d322390d4e16afab9f';
  }

  static findNewMovie(e) {
    console.log('TMDB.findNewMovie()');
    // create variable that holds user's search input
    // make API call that returns matching titles
    // display results 
    // create btn-add elements
    // clear search field
    const movieToFind = input_movie.value;
    
    tmdb.searchMovieTitles(movieToFind)
    .then((arr_searchResults) => {  
      UI.displayMovieResultsScreen(arr_searchResults); 
    })
    .catch((err) => console.log(err));

    input_movie.value = '';

    e.preventDefault();
  }

  async searchMovieTitles(movieToFind) {
    console.log('TMDB.searchMovieTitles()');
    // API fetch request
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&query=${movieToFind}`);
    // full API response
    const returnedMovies = await res.json();
    // array used to hold newly created Movie objects
    let arr_searchResults = [];

    // Return only animated & family movies
    // Filter out 'adult' genre
    // Create new Movie objects and add to return array
    returnedMovies.results.forEach(movie => {
      try {
        if(movie.poster_path != null && (movie.genre_ids.includes(16) && movie.genre_ids.includes(10751))) {
          const newMovie = new Movie(movie);
          arr_searchResults.push(newMovie);
        }
      } catch {
        throw 'Error filtering results';
      }
    });

    return arr_searchResults;      
  }
}