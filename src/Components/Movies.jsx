import MovieItem from './MovieItem'; // import movieItem component so we can display the component continuously regardless of the amount of movies

export default function Movies(props) { // utilize props to pass details to this component
    return props.mymovies.map // map function which filters through every individual movie item
        ((movie) => {
            return <MovieItem mymovie={movie} key={movie.imdbID}/> // pass every individual movie item to the movie item component so it can display the details here
     })

     
    

}
