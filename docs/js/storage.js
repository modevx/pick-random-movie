class Storage {

  // Get existing movie list to display
  static getUserMovies() {
    let movieList;

    if(localStorage.getItem('ls_movieList') === null ) {
      movieList = [];
    } else {
      movieList = JSON.parse(localStorage.getItem('ls_movieList'));
    }
    // console.log('getUserMovies(): current movie list', movieList);

    return movieList;
  }

  // Add movie to list
  static addToUserMovies(thisMovie){
    let movieList = Storage.getUserMovies();
    const movieID = thisMovie.id;
    // console.log('THIS MOVIE ID:', movieID);

    try {
        movieList.push(thisMovie);
        localStorage.setItem('ls_movieList', JSON.stringify(movieList));
      
        console.log('LIST AFTER ADDING:', JSON.parse(localStorage.getItem('ls_movieList')));
      // console.log('MOVIE LIST FROM LOCAL STORGAGE:', movieList);
      // if list is empty add new movie
      // if(movieList === null) {
      //   movieList.push(thisMovie);
      //   localStorage.setItem('ls_movieList', JSON.stringify(movieList));
      // verify movie to be added doesnt already exist in current movie list
      // else {
      //   for(let i = 0; i < movieList.length; i++) {
      //     let ids = [];
      //     ids.push(movieList[i].id);
      //   }
      //   if(!ids.includes(movieID)) {
      //     movieList.push(thisMovie);
      //   }
      //   console.log('CURRENT MOVIE IDS ARRAY', ids);
      // }
      
      // console.log('FILTERED ID LIST', ids);      

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