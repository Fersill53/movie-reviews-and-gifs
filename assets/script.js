//omdb api and url
//var movieTitle = "Skyfall";
const omdbKey = "e317d6f9";
var favsArray = []; 
var movieTitle = document.querySelector("#search"); 
var image1 = document.querySelector(".movieGif");
var img = document.createElement("img");
var plotSection = document.querySelector(".plot");
var ratingsSection = document.querySelector(".ratings");
var boxOfficeSection = document.querySelector(".boxOffice");
var actorsSection = document.querySelector (".actors");
var movTitleSection = document.querySelector(".movieName");
var movTitle;

        
//id's to be used
//input: search, go: goBtn
const movBtn = document.getElementById('goBtn')
const favBtn = document.getElementById('addToFavs')

//local storage
favBtn.addEventListener("click", function(){
    favsArray.push(movTitle);
    localStorage.setItem("Movie", JSON.stringify(favsArray));
    var text = localStorage.getItem("Movie");
    var favoritesList = document.querySelector("#favoritesList");
    favoritesList.textContent = JSON.parse(text);
    favoritesList.style.display = "flex";
    favoritesList.style.flexDirection = "row";
    favoritesList.style.flexWrap = "wrap";
    favoritesList.style.paddingTop = "10px";
    favoritesList.style.borderTop = "3px solid #333";
    favoritesList.style.marginTop = "5px";
    favoritesList.style.justifyContent = "space-around";
});

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
        var image = data[1].data[0].images.downsized.url;
        img.style.border = "5px solid  #ffffff";
        img.style.height = "300px";
        img.style.margin = "30px 0px 15px 10px";
        img.style.boxShadow = "1px 1px 20px 5px #333333b5";
        image1.appendChild(img);
        img.setAttribute("src", image);

        let movieGif = document.querySelector ('.movieGif')
        movieGif.insertAdjacentElement('afterbegin', img);
        document.querySelector("#search").value = '';

        //Code to display omdbURL data
        if(!data[0].plot === undefined)
                var plot = data[0].Plot;
        else
                var plot = "Plot is unknown!";
        plotSection.textContent = "Plot: " + plot;

        var ratings = data[0].Ratings[1].Value;
        ratingsSection.textContent = "Rotten Tomatoes: " + ratings; 

        var boxOffice = data[0].BoxOffice;
        boxOfficeSection.textContent = "Box Office: " + boxOffice;
        console.log (boxOffice);

        var actors = data[0].Actors;
        actorsSection.textContent = "Actors: " + actors;

        movTitle = data[0].Title;
        movTitleSection.textContent = movTitle;
        console.log (movTitle);

    }).catch(function (error) {
        // if there's an error, log it
        console.log(error);
    });

});


