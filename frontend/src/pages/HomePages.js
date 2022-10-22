import React from 'react'
import { Row , Col} from 'react-bootstrap'
import Product from '../components/Product'

const HomePages = () => {
  return (
    <>
        <h1>Latest Products</h1>
        <Row>
           <Col>
              <Product></Product>
           </Col>
        </Row>
    </>
  )
}

export default HomePages