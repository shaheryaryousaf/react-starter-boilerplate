import React from 'react'
import { Container } from 'react-bootstrap'

// Import Components
import Header from './Header'
import Footer from './Footer'

const Screen = ({ children }) => {
  return (
    <main>
      <Header />
      <Container className='my-5'>{children}</Container>
      <Footer />
    </main>
  )
}

export default Screen
