// Variables
const inputFind = document.getElementById('input-find');
let userInput;
const btnFind = document.getElementById('btn-find');
const ui = new UI();

// Search button event listener
btnFind.addEventListener('click', (e) => {
  userInput = inputFind.value;
  const movieToFind = new Movie(userInput);

  movieToFind.findMovie()
    .then((responseMovies) => {
      // Display movie title, poster
      ui.displayMovieResults(responseMovies);
    })
    .catch((err) => console.log(err));  


})

