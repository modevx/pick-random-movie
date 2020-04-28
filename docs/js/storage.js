class Storage {

  // Get existing movie list to display
  static getUserMovies() {
    let movieList;

    if(localStorage.getItem('ls_movieList') === null ) {
      movieList = [];
    } else {
      movieList = JSON.parse(localStorage.getItem('ls_movieList'));
    }
    console.log('getUserMovies() - movies in local storage:', movieList);
    return movieList;
  }

  // Add movie to list
  static addToUserMovies(thisMovie){
    // retrieve current userMovieList from local storage
    let movieList = Storage.getUserMovies();    

    try {
      // test if movie is already in users movie list using sort()
      let hasMovie = (movie) => movie.id === thisMovie.id;
      // if sort()n returns false (movie not currently in list) -> add movie
      if (!movieList.some(hasMovie)) {
        movieList.push(thisMovie);
        localStorage.setItem('ls_movieList', JSON.stringify(movieList));
        console.log('addToUserMovies() - movie added!', JSON.parse(localStorage.getItem('ls_movieList')));
        // *TO-DO: create UI method alertMovieAdded() - 'Movie added!'
      } else {
        // *TO-DO: create UI method alertAlreadyAdded() - 'This movie's already in your list!'
      }      
    } catch {
      throw 'Error adding movie to local storage..';
    }
  }

  // Delete movie from list
  static deleteFromUserMovies() {
    // this.userMovies.filter()
  }

  // Reset all movies 'watched' property to false
  static resetUserMovies() {
    // this.userMovies.map()
  }
}