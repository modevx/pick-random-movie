// Variables
const inputFind = document.getElementById('input-find');
const btnFind = document.getElementById('btn-find');
const ui = new UI();

// Search button event listener
btnFind.addEventListener('click', (e) => {
  const userInput = inputFind.value;
  const movieToFind = new Movie(userInput);


  movieToFind.findMovie()
    .then((responseMovies) => {
      // Display movie title, poster
      ui.displayMovieResults(responseMovies);
    })
    .catch((err) => console.log(err));  
})

