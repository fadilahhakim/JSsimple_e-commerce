import React from 'react'
import {Card} from 'react-bootstrap'

const Product = () => {
  return (
   <Card className='my-3 p-3 rounded'>
        <Card.Img></Card.Img>
        <Card.Body>
            <Card.Title as='div'>
                <strong>Judul Product</strong>
            </Card.Title>
        </Card.Body>
        <Card.Text as='div'>
        <div className='my-3'>Ratings</div>
        </Card.Text>
        <Card.Text as='h3'>Rp100.000,-</Card.Text>
   </Card>
  )
}

export default Product