import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'

function App() {
  const [message,setMessage] = useState("");
  useEffect(() =>{
    fetch("http://145.223.21.242:4000/api/message")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((error) =>{
        console.error("Error while fetching",error)
      })
  })
  return (
    <>
      <h1>Shubham Cloud</h1>
      
      <p className="read-the-docs">
        {message}
      </p>
    </>
  )
}

export default App
