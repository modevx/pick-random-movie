class TMDB {
  constructor() {
    this.API_KEY = '8138a9c0b29932d322390d4e16afab9f';
  }

  async searchMovieTitles(usersMovie) {
    const res = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${this.API_KEY}&query=${usersMovie}`);

    const resData = await res.json();

    return resData;
  }
}