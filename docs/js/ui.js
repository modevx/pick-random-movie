class UI {
  constructor() {
    this.resultsElement = document.getElementById("search-results");
  }

  displayMovieResults(arr_searchResults) {
    
    let displayMovies = "";

    // Create HTML string of all movie titles to be inserted
    arr_searchResults.forEach((movie) => {      
      
      displayMovies +=
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
                    <button type="button" class="btn btn-success mx-2 btn-add">Add Movie!</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `      
    });

    this.resultsElement.innerHTML = displayMovies;

    // Create HTMLCollection of 'btn-add'
    // add eventListener to create new movie object and add to usersMovies array

    let btns_add = document.getElementsByClassName('btn-add');
    const storage = new Storage();

    for(let i = 0; i < btns_add.length; i++) {
      btns_add[i].addEventListener('click', (e) => {
        // add this movie to localStorage
        const thisMovie = arr_searchResults[i];
        storage.addToUserMovies(thisMovie);
      });
    }
  }
}
