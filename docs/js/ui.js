class UI {
  constructor() {
    // NOT USING THESE - BEING CREATED DYNAMICALLY
    // this.title = document.getElementById('title');
    // this.image = document.getElementById('image');
    this.resultsElement = document.getElementById("search-results");
  }

  displayMovieResults(returnedMovies) {
    
    let displayMovies = "";

    // Create HTML string of all movie titles to be inserted
    returnedMovies.forEach((movie) => {      
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
    console.log(btns_add);

    for(let i = 0; i < btns_add.length; i++) {
      btns_add[i].addEventListener('click', () => {
        console.log(`I clicked ADD button ${i + 1}!`);
      });
    }
      // this.title.textContent = returnedMovies.results[0].original_title;
      // this.image.setAttribute('src', `https://image.tmdb.org/t/p/w154${responseMovies.results[0].poster_path}`)
    }
}
