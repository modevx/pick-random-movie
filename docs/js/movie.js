class Movie {
  constructor(newMovie) {
    this.id = newMovie.id;
    this.poster_path = newMovie.poster_path;
    this.title = newMovie.original_title;
    this.overview = newMovie.overview;
    this.watched = false;
  }

  watched() {
    this.watched = true;
  }
}
