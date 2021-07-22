import React from 'react'
import { Row, Col } from 'react-bootstrap'

// Import Components
import Screen from '../components/layout/Screen'

const Home = () => {
  return (
    <Screen>
      <Row>
        <Col md={12}>
          <h1>Home Page</h1>
        </Col>
      </Row>
    </Screen>
  )
}

export default Home
