class Storage {
  constructor() {
    this.userMovies = [];
  }

  // Get existing movie list to display
  getUserMovies() {
    return this.userMovies;
  }

  // Add movie to list
  addToUserMovies(thisMovie){
    this.userMovies.push(thisMovie);
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