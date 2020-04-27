class UI {

  static displayMovieResults(arr_searchResults) {
    // variables
    const resultsElement = document.getElementById("search-results");
    const noResultsMessage = `That's not a kids movie!  Pick a different one!`;
    let displayMovies = "";
    
    // re-display on new search if previous alert message
    resultsElement.style.display = "block";

    // alert if no matching results
    if(arr_searchResults.length < 1) {
      resultsElement.innerHTML = `
        <div class="alert alert-dismissible alert-danger">
          ${noResultsMessage}
        </div>
      `
      // make alert disappear after 3 seconds
      setTimeout(function() {
        resultsElement.style.display = "none";
      }, 3000);
    } else {
      // build HTML string to display search results
      arr_searchResults.forEach((movie) => {    
        displayMovies +=
          `
            <div class="card mb-3" style="max-width: 540px">
              <div class="row no-gutters">
                <div class="col-md-4">
                  <img class="card-img p-2" src="https://image.tmdb.org/t/p/original${movie.poster_path}" alt="poster">
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">${movie.title}</h5>
                    <p class="card-text">${movie.overview}</p>
                    <div class="text-center">
                      <button type="button" class="btn btn-add btn-success mx-2">Add To My List!</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          `      
      });
      resultsElement.innerHTML = displayMovies;
    }    

    // Create HTMLCollection of ADD buttons with class of 'btn-add'
    // add eventListener to create new movie object and add to usersMovies array
    let btns_add = document.getElementsByClassName('btn-add');

    // add eventListeners to ADD buttons
    for(let i = 0; i < btns_add.length; i++) {
      btns_add[i].addEventListener('click', (e) => {
        const thisMovie = arr_searchResults[i];
        Storage.addToUserMovies(thisMovie);
      });
    }
  }

  static displayHomeScreen() {
    // display MovieRoulette homescreen describing app
  }
  
  static displayEditMoviesScreen() {
    // display user's current list of movies with delete buttons
  }

  static displayWatchAMovieScreen() {
    // display screen with big PICK A MOVIE TO WATCH button
  }

  static displayMovieToWatch() {
    // display random movie from users list to watch
  }

  static alertSuccessMovieAdded(movie) {
    // display alert when movie successfully added
  }
}
