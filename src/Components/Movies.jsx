import MovieItem from './MovieItem';

export default function Movies(props) {
    return props.mymovies.map
        ((movie) => {
            return <MovieItem mymovie={movie} key={movie.imdbID}/>
     })

     
    

}