import Card from "react-bootstrap/Card";

function Reviewcard(props) {
  return (
    <Card className="bg-dark text-white">
      <Card.Body>
        <Card.Title>{props.review.author}</Card.Title>
        <Card.Text>{props.review.content}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Reviewcard;
