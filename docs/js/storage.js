class Storage {

  // Get existing movie list to display
  static getUserMovies() {
    let movieList;

    if(localStorage.getItem('ls_movieList') === null) {
      movieList = [];
    } else {
      movieList = JSON.parse(localStorage.getItem('ls_movieList'));
    }
    return movieList;
  }

  // Add movie to list
  static addToUserMovies(thisMovie){
    console.log('--- addToUserMovies() ---');
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
    console.log('--- deleteFromUserMovies() ---');
    // retrieve current userMovieList from local storage
    let movieList = Storage.getUserMovies();
    // if last movie in list, remove key from storage
    if(movieList.length == 1) {
      localStorage.removeItem('ls_movieList');
      UI.displayEditMoviesScreen();
    } else {   
      // if movie list has multiple movies, remove movie from movieList
      movieList = movieList.filter((movie) => movie.id !== thisMovie.id);
      // update local storage with new movieList
      localStorage.setItem('ls_movieList', JSON.stringify(movieList));
      // display updated movieList
      UI.displayEditMoviesScreen();
    }
  }

  // Reset all movies 'watched' property to false
  static resetUserMovies() {
    // this.userMovies.map()
  }
}