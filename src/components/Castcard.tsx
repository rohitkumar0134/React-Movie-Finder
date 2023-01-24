import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Castcard(props) {
  const cast = props.cast;
  return (
    <Card className="bg-dark text-white">
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w300/${props.cast.profile_path}`}
      />
      <Card.Body>
        <Card.Title>{props.cast.name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default Castcard;
