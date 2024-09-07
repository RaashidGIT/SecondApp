import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="images/images.jpeg" />
      <Card.Body>
        <Card.Title>Lucky Chloe</Card.Title>
        <Card.Text>
          Tee Hee!
        </Card.Text>
        <Button variant="primary">Nyah!</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;