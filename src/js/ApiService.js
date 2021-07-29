const API_KEY = 'api_key=05d7e6695d9ebeb510a995559544df94';
const BASE_URL = 'https://api.themoviedb.org/3';

export default class NewsApiServise {
    constructor() {
        this.searchQuery = '';
        this.page = 1;
    }

    // Запрос на популярные фильмы за неделю для главной страницы
    getAllMovies() {
    const URL_WEEK = BASE_URL+'/trending/movie/week?'+API_KEY+`&page=${this.page}`;
    return fetch(URL_WEEK)
   .then(response => {
    return response.json();
})
.then(data => {
  console.log(data);
  return data.results;
})
}

// Запрос на поиск по слову
  getMovies() {
 const url = `${BASE_URL}/search/movie?${API_KEY}&query=${this.searchQuery}&page=${this.page}&language=en-US&language=ru-RU`;
 return fetch(url)
 .then(response => response.json())
 .then(data => {
    this.incrementPage();
    // console.log(data.results);
    return data.results;
 });
    }  

// Запрос на поиск по id+
getElementByID(external_id){
  const url_id = BASE_URL+'/movie/{external_id}?'+API_KEY+`&page=${this.page}`;
  return fetch(url_id)
  .then(response => response.json())
  .then(data => {
    return data.results;
  })
}

  incrementPage() {
    this.page += 1;   
  }  

  resetPage(){
      this.page = 1;
  }

 get query(){
   return this.searchQuery; 
 }
  set query(newQuery){
   this.searchQuery = newQuery;
 }
 }

