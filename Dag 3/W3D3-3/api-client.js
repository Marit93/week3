const API_KEY = "5815b0d530f7bbed4baf6f174d3a952c";

async function getMovies() {
  const apiUrl = `https://api.themoviedb.org/3/genre/movie/list?${API_KEY}`;
  const result = await fetch(apiUrl, { method: "GET" })
    .then(response => response.json())
    .then(responseJson => {
      const myData = responseJson;
      document.body.innerHTML =
        "<pre>" + JSON.stringify(myData, null, " ") + "</pre>";
    })
    .catch(error => console.log(error));
  return result;
}
console.log(getMovies());
