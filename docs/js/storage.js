class Storage {

  // Get existing movie list to display
  static getUserMovies() {
    let movieList;
    if(localStorage.getItem('ls_movieList') === null ) {
      movieList = [];
    } else {
      movieList = JSON.parse(localStorage.getItem('ls_movieList'));
    }
    console.log('getUserMovies(): current movie list', movieList);
    return movieList;
  }

  // Add movie to list
  static addToUserMovies(thisMovie){
    try {
      let movieList = Storage.getUserMovies();

      movieList.push(thisMovie);

      localStorage.setItem('ls_movieList', JSON.stringify(movieList));
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