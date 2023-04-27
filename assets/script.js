//omdb api and url
const omdbKey = "e317d6f9";
const movieTitle = "Shrek";
const omdbUrl = " http://www.omdbapi.com/?apikey=" + omdbKey + "&t=" + movieTitle;
console.log(omdbUrl);

//giphy api and url
const gifKey = "JpAI2mazvDYpnE8lPMeIKCL07UmSmkHa";
const gifUrl = "api.giphy.com/v1/gifs/searh";

//id's to be used
//input: search, go: goBtn
const movBtn = document.getElementById('goBtn')

movBtn.addEventListener("click", function(event) {
    event.preventDefault();
    fetch (omdbUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function (error){
        console.log(error);
    });

});


