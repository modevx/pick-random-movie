class TMDB {
  constructor() {
    this.API_KEY = '8138a9c0b29932d322390d4e16afab9f';
  }

  async searchMovieTitles(usersMovie) {
    console.log('searchMovieTitles(): search button clicked');
    arr_searchResults = [];

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&query=${usersMovie}`);

    const returnedMovies = await res.json();
    console.log('searchMovieTitles(): returnedMovies', returnedMovies);

    returnedMovies.results.forEach(movie => {
      // Return only animated & family movies
      // Filter out 'adult' genre
      try {
        if(movie.poster_path != null && (movie.genre_ids.includes(16) || movie.genre_ids.includes(10751))) {
          arr_searchResults.push(movie);
          console.log('searchMovieTitles(): arr_searchResults', arr_searchResults);
        }
      } catch {
        throw 'Error filtering results';
      }

      // if(arr_searchResults.length < 1) {
      //   console.log('searchMovieTitles(): Search returned no results');
        // let resultsElement = document.getElementById('search-results');
        // const noResultsMessage = document.createElement('P').innerText = 'We couldn\'t find any kids movies by that name';
        // resultsElement.innerHTML = `
        //   <p>Your search for ${usersMovie} didn't return any results..</p>
        // `;
      // }   
    });
    return arr_searchResults;      
  }
}