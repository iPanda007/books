import React from 'react'
import Container from './container'
import { BookProvider } from '../../context/BookServices'

const BookIndex = () => {

  return (
    <BookProvider>
              <Container/>
    </BookProvider>
  )
}

export default BookIndex
