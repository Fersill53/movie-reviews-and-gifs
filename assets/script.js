//omdb api and url
//var movieTitle = "Skyfall";
const omdbKey = "e317d6f9";

var movieTitle = document.querySelector("#search"); 



//id's to be used
//input: search, go: goBtn
const movBtn = document.getElementById('goBtn')


movBtn.addEventListener("click", function(event) {
     event.preventDefault();

//Allows user input 
    var movieName = movieTitle.value;
    const omdbUrl = " https://www.omdbapi.com/?apikey=" + omdbKey + "&t=" + movieName;
    const gifUrl = "https://api.giphy.com/v1/gifs/search?api_key=Lelhn00NJhLelwpBhUe1XaTBsoJcTzvD&q=" + movieName + "&limit=25&offset=0&rating=g&lang=en"



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
        //This is the code that displays the GIFS on the webpage
        var image1 = document.querySelector(".movieGif");
        var img = document.createElement("img");
        var image = data[1].data[0].images.downsized.url; 
        image1.appendChild(img);
        img.setAttribute("src", image);

        //Code to display omdbURL
        





//Need a function to reset page after each search


    }).catch(function (error) {
        // if there's an error, log it
        console.log(error);
    });

});
