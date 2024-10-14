import React from 'react'
import './App.css'
import { Button } from './components/common/button'
import { Container } from './components/common/container'

function App() {

  return (
    <main className='font-honest'>
      <Container>
        <Button>
          <p>Cypher AI</p>
        </Button>
      </Container>
    </main>
  )
}

export default App
