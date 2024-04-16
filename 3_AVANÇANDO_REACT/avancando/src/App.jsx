import { useState } from 'react'
import './App.css'

// 2 - Imagens em assets
import night from './assets/night.jpg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App">
        <h1>Avançando no react</h1>
        {/* 1 - Imagem em public */}
        <img src="/img.jpg" alt="Alguma imagem" />
        {/* 2 - Imagem em assets */}
        <img src={night} alt="Outra imagem" />
      </div>
    </>
  )
}

export default App
