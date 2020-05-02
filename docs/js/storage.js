class Storage {

  // Get existing movie list to display
  static getUserMovies() {
    console.log('Storage.getUserMovies()');
    let movieList;

    if(localStorage.getItem('ls_movieList') === null) {
      movieList = [];
    } else {
      movieList = JSON.parse(localStorage.getItem('ls_movieList'));
    }
    return movieList;
  }

  static getUnwatchedMovies() {
    console.log('getUnwatchedMovies()');
    const userMovies = Storage.getUserMovies();
    return userMovies.filter((movie) => movie.watched === false);
  }

  // Add movie to list
  static addToUserMovies(thisMovie){
    console.log('Storage.addToUserMovies()');
    // retrieve current userMovieList from local storage
    let movieList = Storage.getUserMovies();    

    try {
      // test if movie is already in users movie list using sort()
      let hasMovie = (movie) => movie.id === thisMovie.id;
      // if sort()n returns false (movie not currently in list) -> add movie
      if (!movieList.some(hasMovie)) {
        movieList.push(thisMovie);
        localStorage.setItem('ls_movieList', JSON.stringify(movieList));
        // *TO-DO: create UI method alertMovieAdded() - 'Movie added!'
      } else {
        // *TO-DO: create UI method alertAlreadyAdded() - 'This movie's already in your list!'
      }      
    } catch {
      throw 'Error adding movie to local storage..';
    }
  }

  // Delete movie from list
  static deleteFromUserMovies(thisMovie) {
    console.log('Storage.deleteFromUserMovies()');
    const displayDiv = document.getElementById('render');
    // retrieve current userMovieList from local storage
    let movieList = Storage.getUserMovies();
    // if last movie in list, remove key from storage
    if(movieList.length == 1) {
      localStorage.removeItem('ls_movieList');
      UI.alertDeletedAllMovies(displayDiv);
    } else {   
      // if movie list has multiple movies, remove movie from movieList
      movieList = movieList.filter((movie) => movie.id !== thisMovie.id);
      // update local storage with new movieList
      localStorage.setItem('ls_movieList', JSON.stringify(movieList));
      // display updated movieList
      UI.displayEditMoviesScreen();
    }
  }

  // Pick random movie to watch
  static pickRandomMovie() {
    console.log('pickRandomMovie()');
    // return ALL movies in storage
    let allMovies = Storage.getUserMovies();
    // return all UNWATCHED movies in storage
    let unwatchedMovies = Storage.getUnwatchedMovies();

    // pick random movie from UNWATCHED
    const highNum = unwatchedMovies.length;
    const randomIndex = Math.floor(Math.random() * highNum);
    const randomMovie = unwatchedMovies[randomIndex];  
    console.log(`${randomMovie.title}: ${randomMovie.watched}`);  
    // update randomMovie's 'watched' property to TRUE
    randomMovie.watched = true;
    console.log(`${randomMovie.title}: ${randomMovie.watched}`);  

    // 1. iterate through allMovies array and find matching movie by id
    // 2. update movie.watched to TRUE     
    allMovies.map((movie) => {
      if(movie.id === randomMovie.id) {
        movie.watched = true;
      }
    });
    console.log('ALL MOVIES:', allMovies);

    // 3. set local storage with updated allMovies array
    localStorage.setItem('ls_movieList', JSON.stringify(allMovies));

    // 
    if(Storage.getUnwatchedMovies().length < 1) {
      UI.alertWatchedAllMovies();
      Storage.resetUserMovies();
    }    

    UI.renderRandomMovie(randomMovie);        
  }

  // Reset all movies 'watched' property to false
  static resetUserMovies() {
    console.log('resetUserMovies()');
    const allMovies = Storage.getUserMovies();
    allMovies.map((movie) => {
      movie.watched = false;
    })
    localStorage.setItem('ls_movieList', JSON.stringify(allMovies));
  }
}