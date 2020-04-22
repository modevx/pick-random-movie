class UI {
  constructor() {
    // NOT USING THESE - BEING CREATED DYNAMICALLY
    // this.title = document.getElementById('title');
    // this.image = document.getElementById('image');
    this.results = document.getElementById('search-results');
  }

  displayResultsMovies(responseMovies) {
    console.log('RETURNED MOVIE RESULTS', responseMovies.results);
    // Step 1. create and display title element for each movie returned    
    let returnedMovies = responseMovies.results;    
    let movieTitles = '';

    // Create HTML string of all movie titles to be inserted
    returnedMovies.forEach(movie => {
      movieTitles += `
        <h3>${movie.title}</h3>
      `
    });

    this.results.innerHTML = movieTitles;

    
    // this.title.textContent = responseMovies.results[0].original_title;
    // this.image.setAttribute('src', `https://image.tmdb.org/t/p/w154${responseMovies.results[0].poster_path}`)
  }
}