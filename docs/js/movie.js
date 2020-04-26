class Movies {
  constructor() {
    this.userTitle = userInput; 
    this.title;
    this.poster_path;  
    this.overview;     
    this.watched = false;      
  }

  // Fetch movie from API
  // async findMovie() {
  //   const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.userTitle}`);

  //   const responseData = await response.json();

  //   return responseData;
  // }
}