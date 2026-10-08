import Movies from './Movies'; //import Movies component so we can display it as a tag on this Read page

export default function Read() {
    const movies = [ // array to store and hold all movie objects
        {
            "Title": "Avengers Infinity War", // attribute of object that specifies the title of the movie
            "Year": "2018", // attribute of object that specifies the year the movie was released
            "imdbID": "tt4154756", // attribute of object that specifies the the specific code or imdbid of the movie
            "Type": "movie", // attribute of object that specifies the type of digital content this object is 
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg" // attribute of the object that defines the src link or image link of the movie object
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        }
    ];

    return ( // return what is visible on the page
        <div>
        <h3>Hello from the Read component!</h3> // embedded welcome message directly on the read page
        <Movies mymovies={movies}/> // incorporate movies component AND pass movies array to it so the movies component can display this info
        
        </div>

        
    );
}
