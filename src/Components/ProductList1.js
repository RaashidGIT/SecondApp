import React from 'react'
import {Card, CardGroup, Container} from 'react-bootstrap'
import Products from './ProductList'

function ProductList1() {
  return (
    <div>
      <div>
        <Container className = 'row'>
            <h1 className = 'bg-primary text-white'>Product List</h1>
            <CardGroup>
                {Products.map((product) => (
                    <Card key = {product.id}>
                        <Card.Img variant = "top" src = {product.imageUrl} />
                        <Card.Body>
                            <Card.Title>{product.name}</Card.Title>
                            <Card.Text>{product.description}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </CardGroup>
        </Container>
      </div>
    </div>
  )
}

export default ProductList1
