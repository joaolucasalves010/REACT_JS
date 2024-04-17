import { useState } from 'react'
import './App.css'

// 2 - Imagens em assets
import night from './assets/night.jpg'

// 3 - useState
import Data from './components/Data'

// 4 - Renderização de lista
import ListRender from './components/ListRender'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="App" style={{paddingBottom: '500px'}}>
        <h1>Avançando no react</h1>
        {/* 1 - Imagem em public */}
        <img src="/img.jpg" alt="Alguma imagem" />
        {/* 2 - Imagem em assets */}
        <img src={night} alt="Outra imagem" />
        {/* 3 - useState */}
        <Data />
        {/* 4 - ListRender */}
        <ListRender />
      </div>
    </>
  )
}

export default App
