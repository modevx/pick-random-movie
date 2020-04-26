class Storage {
  constructor() {
    this.movieList;
    this.emptyMovieList = [];
  }

  // Get existing movie list to display
  getUserMovies() {
    if(localStorage.getItem('ls_movieList') === null ) {
      this.movieList = this.emptyMovieList;
    } else {
      this.movieList = localStorage.getItem('ls_movieList');
    }
    console.log('getuserMovies():', this.movieList);
  }

  // Add movie to list
  addToUserMovies(thisMovie){
    try {
      const currentMovieList = this.movieList;
      console.log('addToUserMovies(): currentMovieList', currentMovieList);
      // currentMovieList.push(thisMovie);
      // console.log(currentMovieList);
      // this.movieList.push(thisMovie);
      // localStorage.setItem('ls_movieList', this.movieList);
    } catch {
      throw 'Error adding movie to local storage..';
    }
  }

  // Delete movie from list
  deleteFromUserMovies() {
    // this.userMovies.filter()
  }

  // Reset all movies 'watched' property to false
  resetUserMovies() {
    // this.userMovies.map()
  }
}