import { useState } from 'react'
import './App.css'

function App() {
  
  const [jokes ,setjokes] = useState([])

  return (
    <>
      <h1>fullstack</h1>
      <p>JOKES: {jokes.length}</p>
      {
        jokes.map((joke,index) => {
          <div key = {joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p></div>
        })
      }
    </>
  )
}

export default App
