class UI {  
  
  // ----- DISPLAY SCREENS -----

  static displayHomeScreen() {
    // display MovieRoulette homescreen describing app
  }
  
  static displayWatchAMovieScreen() {
    // display screen with big PICK A MOVIE TO WATCH button
  }  
  
  static displayEditMoviesScreen() {
    console.log('displayEditMoviesScreen()');
    let userMovies = Storage.getUserMovies();
    
    // hide previously displayed div and show current
    homeDisplayDiv.style.display = "none";
    watchMovieDisplayDiv.style.display = "none";
    searchDisplayDiv.style.display = "none";
    editDisplayDiv.style.display = "block";
    
    let displayOutput = '';
    
    // alert if user's movie list is empty
    if(userMovies.length < 1) {
      this.alertDeletedAllMovies(editDisplayDiv);
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
    
    // add eventListeners to DELETE buttons
    for(let i = 0; i < btns_delete.length; i++) {
      btns_delete[i].addEventListener('click', (e) => {
        const thisMovie = userMovies[i];
        Storage.deleteFromUserMovies(thisMovie);
      });
    }
  }
  
  static displayMovieResultsScreen(arr_searchResults) {
    console.log('displayMovieResults()');
    // hide previously displayed div and show current
    homeDisplayDiv.style.display = "none";
    watchMovieDisplayDiv.style.display = "none";
    editDisplayDiv.style.display = "none";
    searchDisplayDiv.style.display = "block";   
    
    // re-display on new search if previous alert message
    searchDisplayDiv.style.display = "block";
    
    // alert if no matching results - not a kids movie
    if(arr_searchResults.length < 1) {
      UI.alertNotAKidsMovie(searchDisplayDiv);
    } else {
      // render valid movie results to UI
      UI.renderMovieCards(arr_searchResults);
      // attach ADD btn eventListeners
      UI.attachAddButtonListeners(arr_searchResults);
    }      
  }
  
  // ----- ATTACH BUTTON LISTENERS ----- 
  static attachAddButtonListeners(arr_searchResults) {
    console.log('attachAddButtonListeners()');
    // Create HTMLCollection of ADD buttons with class of 'btn-add'
    let btns_add = document.getElementsByClassName('btn-add'); 
    const searchDisplayDiv = document.getElementById('search-results');   
    
    // if user has added all movie results to their list, display 'Search for more movies or pick one to watch!'
    if(btns_add.length < 1) {
      this.alertAddedAllMovies(searchDisplayDiv);
    } else {
      // add eventListeners to ADD buttons
      for(let i = 0; i < btns_add.length; i++) {
        let moviesLeft = arr_searchResults;
        let btn_addMovie = btns_add[i];
        let thisMovie = arr_searchResults[i]; 
        
        btn_addMovie.addEventListener('click', (e) => {
          console.log('ADD movie button clicked');
          
          Storage.addToUserMovies(thisMovie);        
          
          // remove chosen movie from results and update UI
          moviesLeft = arr_searchResults.filter((movie) => movie !== thisMovie);

          // render any remaining movies
          UI.renderMovieCards(moviesLeft);        
        });
      }
    }
  }

  static attachDeleteButtonListeners(arr_searchResults) {

  }

  // ----- UPDATE DISPLAYS ----- 
  
  static updateMovieToWatch() {
    // display random movie from users list to watch
  }

  static renderMovieCards(arr_searchResults) {
    console.log('renderMovieCards()');
    let displayOutput = '';
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
  
  // ----- ALERT MESSAGES ----- 
  static alertAddedAllMovies(displayDiv) {
    const addMoviesMessage = `Search for more movies or pick one to watch!`;
    displayDiv.innerHTML = `
        <div class="alert alert-dismissible alert-info">
          ${addMoviesMessage}
        </div>
      `;
      // make alert disappear after 3 seconds
      setTimeout(function() {
        displayDiv.style.display = "none";
      }, 3000);
  }

  static alertDeletedAllMovies(displayDiv) {
    const addMoviesMessage = `You're all out of movies!`;
    displayDiv.innerHTML = `
        <div class="alert alert-dismissible alert-info">
          ${addMoviesMessage}
        </div>
      `;
      // make alert disappear after 3 seconds
      setTimeout(function() {
        displayDiv.style.display = "none";
      }, 3000);
  }
  
  static alertNotAKidsMovie(displayDiv) {
    const noResultsMessage = `That's not a kids movie!  Pick a different one!`;
    displayDiv.innerHTML = `
        <div class="alert alert-dismissible alert-danger">
          ${noResultsMessage}
        </div>
      `
      // make alert disappear after 3 seconds
      setTimeout(function() {
        displayDiv.style.display = "none";
      }, 3000);
  }

  static alertSuccessMovieAdded(movie) {
    // display alert when movie is successfully added
  }
  
  static alertMovieAlreadyInList(movie) {
    // display alert if movie already exists in users list
  }


}
