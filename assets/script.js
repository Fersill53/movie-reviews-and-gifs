//omdb api and url
const omdbKey = "e317d6f9";
let movieTitle = "Shrek";
const omdbUrl = " http://www.omdbapi.com/?apikey=" + omdbKey + "&t=" + movieTitle;
console.log(omdbUrl);

//giphy api and url
let gifImage = "Shrek";
const gifKey = "JpAI2mazvDYpnE8lPMeIKCL07UmSmkHa";
const gifUrl = "api.giphy.com/v1/gifs/searh" + gifKey;


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

fetch (gifUrl)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
})
.catch(function (error){
    console.log(error);
});

