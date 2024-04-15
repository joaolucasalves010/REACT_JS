import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <h1>Avançando no react</h1>
        {/* 1 - Imagem em public */}
        <img src="/img.jpg" alt="Alguma imagem" />
      </div>
    </>
  )
}

export default App
