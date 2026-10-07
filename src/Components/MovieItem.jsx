import { useEffect } from "react"; // import the useEffect to perform effects in the background
import Card from 'react-bootstrap/Card'; // import the card component from bootstap to make the design look cleaner

function MovieItem(props) {
  useEffect(() => { 
    console.log("Movie Item:", props.mymovie);
  }, [props.mymovie]); // Only run this effect when the mymovie prop changes

  return (
    <div>
      <Card  style={{ width: '24rem' }}>
        <Card.Body>
            <Card.Img src={props.mymovie.Poster} alt={props.mymovie.Title} />
            
        </Card.Body>

        <Card.Header >
            <Card.Title>{props.mymovie.Title}</Card.Title>
            <Card.Text>{props.mymovie.Year}</Card.Text>
        </Card.Header>
      </Card>
    </div>
  );
}

export default MovieItem;