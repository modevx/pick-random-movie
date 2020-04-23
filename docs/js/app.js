// Variables
const inputFind = document.getElementById('input-find');
const userInput = inputFind.value;
const btnFind = document.getElementById('btn-find');
const ui = new UI();
const movieToFind = new Movie(userInput);

// Search button event listener
btnFind.addEventListener('click', (e) => {

  movieToFind.findMovie()
    .then((responseMovies) => {
      // Display movie title, poster
      ui.displayMovieResults(responseMovies);
    })
    .catch((err) => console.log(err));  


})

