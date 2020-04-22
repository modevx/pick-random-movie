class Movie {
  constructor(userInput) {
    this.userTitle = userInput;
    this.apiKey = '8138a9c0b29932d322390d4e16afab9f';
  }

  // Fetch movie from API
  async findMovie() {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.apiKey}&query=${this.userTitle}`);

    const responseData = await response.json();

    return responseData;
  }
}