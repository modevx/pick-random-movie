class UI {  
  
  // ----- DISPLAY SCREENS -----

  static displayHomeScreen() {
    // display MovieRoulette homescreen describing app
  }
  
  static displayWatchAMovieScreen() {
    console.log('UI.displayWatchAMovieScreen()');
    const userMovies = Storage.getUserMovies();
    const unwatchedMovies = userMovies.filter((movie) => movie.watched === false);

    console.log('UNWATCHED MOVIES:', unwatchedMovies);
    
    if(unwatchedMovies.length < 1) {
      UI.alertNoMoviesInList();
    } else {
      // render MovieRoulette Logo and PICK A MOVIE button
      UI.renderWatchAMovie(unwatchedMovies);
    }
  }  
  
  static displayEditMoviesScreen() {
    console.log('UI.displayEditMoviesScreen()');
    const displayDiv = document.getElementById('render');
    let userMovies = Storage.getUserMovies();
    
    // alert if user's movie list is empty
    if(userMovies < 1) {
      UI.alertDeletedAllMovies(displayDiv);
    } else {
      // render users current movie list to UI
      UI.renderDeleteMovieCards(userMovies);      
      UI.attachDeleteButtonListeners(userMovies);
    }    
  }
  
  static displayMovieResultsScreen(arr_searchResults) {
    console.log('UI.displayMovieResults()');    
    // alert if no matching results - not a kids movie
    if(arr_searchResults.length < 1) {
      UI.alertNotAKidsMovie(displayDiv);
    } else {
      // render valid movie results to UI
      UI.renderAddMovieCards(arr_searchResults);
      // attach ADD btn eventListeners
      UI.attachAddButtonListeners(arr_searchResults);
    }      
  }
  
  // ----- ATTACH BUTTON LISTENERS ----- 
  static attachAddButtonListeners(arr_searchResults) {
    console.log('UI.attachAddButtonListeners()');
    // Create HTMLCollection of ADD buttons with class of 'btn-add'
    let btns_add = document.getElementsByClassName('btn-add'); 
    const displayDiv = document.getElementById('render');   
    
    // if user has added all movie results to their list, display 'Search for more movies or pick one to watch!'
    if(btns_add.length < 1) {
      this.alertAddedAllMovies(displayDiv);
    } else {
      // add eventListeners to ADD buttons
      for(let i = 0; i < btns_add.length; i++) {
        let moviesLeft = arr_searchResults;
        let btn_addMovie = btns_add[i];
        let thisMovie = arr_searchResults[i]; 
        
        btn_addMovie.addEventListener('click', (e) => {
          console.log('*ADD BTN CLICK*');
          
          Storage.addToUserMovies(thisMovie);        
          
          // remove chosen movie from results and update UI
          moviesLeft = arr_searchResults.filter((movie) => movie !== thisMovie);

          // render any remaining movies
          UI.renderAddMovieCards(moviesLeft);
          // attach button listeners
          UI.attachAddButtonListeners(moviesLeft);
        });
      }
    }
  }

  static attachDeleteButtonListeners(userMovies) {
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

  // ----- RENDER ELEMENTS TO UI ----- 
static renderAddMovieCards(arr_searchResults) {
    console.log('UI.renderAddMovieCards()');
    let outputHTML = '';
      arr_searchResults.forEach((movie) => {    
        outputHTML +=
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
      UI.renderDivHTML(outputHTML);      
  }

  static renderDeleteMovieCards(arr_searchResults) {
    console.log('UI.renderDeleteMovieCards()');
    let outputHTML = '';
      arr_searchResults.forEach((movie) => {    
        outputHTML +=
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
      UI.renderDivHTML(outputHTML);
  }

  static renderWatchAMovie(unwatchedMovies) {
    console.log('renderWatchAMovie()');
    let outputHTML = `
      <div>
        <i class="fas fa-film fa-10x" style="color: orange"></i>
      </div>
      <button type="button" class="btn btn-pick btn-outline-success btn-lg">Movie Roulette!</button>
    `;
    UI.renderDivHTML(outputHTML);

    const btn_pickMovie = document.getElementsByClassName('btn-pick');

    btn_pickMovie[0].addEventListener('click', (e) => {
      Storage.pickRandomMovie(unwatchedMovies);
    });
  }

  static renderRandomMovie(randomMovie) {
    console.log('renderRandomMovie()');
    let outputHTML = `
        <div class="card mb-3" style="max-width: 540px">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img class="card-img p-2" src="https://image.tmdb.org/t/p/original${randomMovie.poster_path}" alt="poster">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">${randomMovie.title}</h5>
                <p class="card-text">${randomMovie.overview}</p>
                <div class="text-center">
                  <button type="button" class="btn btn-add btn-success mx-2">Add To My List!</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        `;
      UI.renderDivHTML(outputHTML);      
  }

  static renderDivHTML(html) {
    console.log('renderDivHTML()');
    const displayDiv = document.getElementById('render');
    displayDiv.innerHTML = html;
    displayDiv.style.display = 'block';
  }
  
  // ----- ALERT MESSAGES ----- 
  
  static alertNoMoviesInList() {
    console.log('alertNoMoviesInList()');
    const addMoviesMessage = `You haven't added any movies to watch!`;
    const displayDiv = document.getElementById('render');
    displayDiv.style.display = 'block';
    displayDiv.innerHTML = `
        <div class="alert alert-warning">
          ${addMoviesMessage}
        </div>
      `;
      // make alert disappear after 3 seconds
      setTimeout(function() {
        displayDiv.style.display = "none";
      }, 3000);
  }

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
    console.log('alertDeletedAllMovies()');
    const addMoviesMessage = `You're all out of movies!`;
    const outputHTML = `
        <div class="alert alert-dismissible alert-info">
          ${addMoviesMessage}
        </div>
      `;

    UI.renderDivHTML(outputHTML);

    // make alert disappear after 3 seconds
    setTimeout(function() {
      displayDiv.style.display = "none";
    }, 3000);
  }
  
  static alertNotAKidsMovie(displayDiv) {
    console.log('UI.alertNotAKidsMovie()');
    const noResultsMessage = `That's not a kids movie!  Pick a different one!`;
    const outputHTML = `
        <div class="alert alert-dismissible alert-danger">
          ${noResultsMessage}
        </div>
      `;

      UI.renderDivHTML(outputHTML);

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
