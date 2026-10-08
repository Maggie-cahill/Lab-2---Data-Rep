import { useEffect } from "react"; // import the useEffect to perform effects in the background
import Card from 'react-bootstrap/Card'; // import the card component from Bootstrap to make the design look cleaner

function MovieItem(props) { // use the props keyword to pass details of the array to this component
  useEffect(() => { // useEffect function which will run every time the prop changes (e.g. when a movie is being listed or added)
    console.log("Movie Item:", props.mymovie); // print a message to the console for each movie item passed from the properties
  }, [props.mymovie]); // Only run this effect when the mymovie prop changes

  return (
    <div>
      <Card  style={{ width: '24rem' }}> //Bootstrap card which lists the movie details in a cleaner format 
        <Card.Body>
            <Card.Img src={props.mymovie.Poster} alt={props.mymovie.Title} /> // display the individual image of the movie by passing the image link from the array into this Card.Img tag
        </Card.Body>

        <Card.Header >
            <Card.Title>{props.mymovie.Title}</Card.Title> // display the specific title of the individual movie by passing the title from the parent component into this tag
            <Card.Text>{props.mymovie.Year}</Card.Text>  // display the specific year this individual movie was released by passing the year from the parent component into this tag
        </Card.Header>
      </Card>
    </div>
  );
}

export default MovieItem; // export this component with its function to the Movies component
