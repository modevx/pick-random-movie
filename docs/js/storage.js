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
  }

  // Add movie to list
  addToUserMovies(thisMovie){
    try {
      const updatedMovieList = this.movieList;
      updatedMovieList.push(thisMovie);
      console.log(updatedMovieList);
      // this.movieList.push(thisMovie);
      // console.log(this.movieList);
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