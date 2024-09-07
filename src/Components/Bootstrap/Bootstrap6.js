import Button from 'react-bootstrap/Button';

function ActiveExample() {
  return (
    <>
    <br/>
      <Button variant="primary" size="lg" active>
        Primary button
      </Button>{' '}
      <Button variant="secondary" size="lg" active>
        Button
      </Button>
    </>
  );
}

export default ActiveExample;