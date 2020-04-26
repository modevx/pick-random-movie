class TMDB {
  constructor() {
    this.API_KEY = '8138a9c0b29932d322390d4e16afab9f';
  }

  async searchMovieTitles(usersMovie) {
    arr_searchResults = [];

    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&query=${usersMovie}`);

    const returnedMovies = await res.json();

    returnedMovies.results.forEach(movie => {
      // *TO-DO: also filter out _adult_ movies and by genre codes 16(animation) or 10751(family)
      try {
        if(movie.poster_path != null && (movie.genre_ids.includes(16) || movie.genre_ids.includes(10751))) {
          arr_searchResults.push(movie);
        }
      } catch {
        throw 'Error filtering results';
      }
    });
    return arr_searchResults;
  }
}