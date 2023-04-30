//omdb api and url
var movieTitle = "Skyfall";
const omdbKey = "e317d6f9";
const omdbUrl = " https://www.omdbapi.com/?apikey=" + omdbKey + "&t=" + movieTitle;
console.log(omdbUrl);

//giphy api and url
let gifImage = "Skyfall";
const gifUrl = "https://api.giphy.com/v1/gifs/search?api_key=Lelhn00NJhLelwpBhUe1XaTBsoJcTzvD&q=" + gifImage + "&limit=25&offset=0&rating=g&lang=en"

//var movieName = document.querySelector("#search");
//var movieTitle = gifImage = movieName.value;


//id's to be used
//input: search, go: goBtn
const movBtn = document.getElementById('goBtn')


movBtn.addEventListener("click", function(event) {
     event.preventDefault();
    Promise.all([
        fetch(omdbUrl),
        fetch(gifUrl)
    ]).then(function (responses) {
        // Get a JSON object from each of the responses
        return Promise.all(responses.map(function (response) {
            return response.json();
        }));
    }).then(function (data) {
        // Log the data to the console
        // You would do something with both sets of data here
        console.log(data);
        var image1 = document.querySelector(".movieGif");
        var img = document.createElement("img");
        var image = data[1].data[0].images.downsized.url; 
        image1.appendChild(img);
        img.setAttribute("src", image);







    }).catch(function (error) {
        // if there's an error, log it
        console.log(error);
    });

});
