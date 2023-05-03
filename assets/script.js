//omdb api and url
//var movieTitle = "Skyfall";
const omdbKey = "e317d6f9";

var movieTitle = document.querySelector("#search"); 



//id's to be used
//input: search, go: goBtn
const movBtn = document.getElementById('goBtn')
const favBtn = document.getElementById('addToFavs')



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

        let movieGif = document.querySelector ('.movieGif')
        movieGif.insertAdjacentElement('afterbegin', img);
        document.querySelector("#search").value = '';

        //Code to display omdbURL data
        var movTitleSection = document.querySelector(".movieName");
        var movTitle = data[0].Title;
        movTitleSection.textContent = movTitle;
        console.log (movTitle);

        var plotSection = document.querySelector(".plot");
        var plot = data[0].Plot;
        plotSection.textContent = "Plot: " + plot;

        var ratingsSection = document.querySelector(".ratings");
        var ratings = data[0].Ratings[1].Value;
        ratingsSection.textContent = "Rotten Tomatoes: " + ratings; 

        var boxOfficeSection = document.querySelector(".boxOffice");
        var boxOffice = data[0].BoxOffice;
        boxOfficeSection.textContent = "Box Office: " + boxOffice;
        console.log (boxOffice);

        var actorsSection = document.querySelector (".actors");
        var actors = data[0].Actors;
        actorsSection.textContent = "Actors: " + actors;


        // favBtn.addEventListener("click", function(){  
        // var favs = [];
        // favs.push(movTitle);
        // localStorage.setItem("addToFavs", JSON.stringify(favs));
        //var searchHistory= JSON.parse(localStorage.getItem(“movTitle”));

    //  })


    }).catch(function (error) {
        // if there's an error, log it
        console.log(error);
    });


});


