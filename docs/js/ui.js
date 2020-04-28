class UI {  
  
  static displayHomeScreen() {
    // display MovieRoulette homescreen describing app
  }
  
  static displayWatchAMovieScreen() {
    // display screen with big PICK A MOVIE TO WATCH button
  }
  
  static displayMovieToWatch() {
    // display random movie from users list to watch
  }

  static displayEditMoviesScreen() {
    console.log('--- displayEditMoviesScreen() ---');
    let userMovies = Storage.getUserMovies();
    const addMoviesMessage = `You don't have any movies in your list!`;
    // hide previously displayed div and show current
    homeDisplayDiv.style.display = "none";
    watchMovieDisplayDiv.style.display = "none";
    searchDisplayDiv.style.display = "none";
    editDisplayDiv.style.display = "block";

    let displayOutput = '';

    // alert if user's movie list is empty
    if(userMovies.length < 1) {
      displayOutput = `
        <div class="alert alert-dismissible alert-info">
          ${addMoviesMessage}
        </div>
      `;
      // make alert disappear after 3 seconds
      setTimeout(function() {
        editDisplayDiv.style.display = "none";
      }, 3000);
    } else {
        // build HTML string to display search results
        userMovies.forEach((movie) => {    
          displayOutput +=
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
                        <button type="button" class="btn btn-delete btn-danger mx-2">Remove</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `      
        });
      }    
    editDisplayDiv.innerHTML = displayOutput;

    // Create HTMLCollection of DELETE buttons with class of 'btn-delete'
    // add eventListener to delete movie from list (local storage)
    let btns_delete = document.getElementsByClassName('btn-delete');

    // add eventListeners to ADD buttons
    for(let i = 0; i < btns_delete.length; i++) {
      btns_delete[i].addEventListener('click', (e) => {
        const thisMovie = userMovies[i];
        Storage.deleteFromUserMovies(thisMovie);
      });
    }
  }

  static displayMovieResults(arr_searchResults) {
    console.log('--- displayMovieResults() ---');
    // hide previously displayed div and show current
    homeDisplayDiv.style.display = "none";
    watchMovieDisplayDiv.style.display = "none";
    editDisplayDiv.style.display = "none";
    searchDisplayDiv.style.display = "block";

    const noResultsMessage = `That's not a kids movie!  Pick a different one!`;
    let displayOutput = '';
    
    // re-display on new search if previous alert message
    searchDisplayDiv.style.display = "block";

    // alert if no matching results
    if(arr_searchResults.length < 1) {
      searchDisplayDiv.innerHTML = `
        <div class="alert alert-dismissible alert-danger">
          ${noResultsMessage}
        </div>
      `
      // make alert disappear after 3 seconds
      setTimeout(function() {
        searchDisplayDiv.style.display = "none";
      }, 3000);
    } else {
      // build HTML string to display search results
      arr_searchResults.forEach((movie) => {    
        displayOutput +=
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
      searchDisplayDiv.innerHTML = displayOutput;
    }    
    
    // Create HTMLCollection of ADD buttons with class of 'btn-add'
    let btns_add = document.getElementsByClassName('btn-add');    

    // add eventListeners to ADD buttons
    for(let i = 0; i < btns_add.length; i++) {
      let moviesLeft = arr_searchResults;
      let thisAddButton = btns_add[i];
      let thisMovie = arr_searchResults[i]; 
      
      thisAddButton.addEventListener('click', (e) => {
        
        Storage.addToUserMovies(thisMovie);        
        
        moviesLeft = arr_searchResults.filter((movie) => movie !== thisMovie);
        
        UI.displayMovieResults(moviesLeft);

      });
    }
  }

  static alertSuccessMovieAdded(movie) {
    // display alert when movie successfully added
  }
  
  static alertMovieAlreadyInList(movie) {
    // display alert if movies already in users list
  }


}
