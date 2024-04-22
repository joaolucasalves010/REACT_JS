import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// 2 - css de component
import MyComponent from './components/MyComponent'

function App() {
  const [count, setCount] = useState(0)
  // 4 - CSS inline dinâmico
  const n = 15

  // 5 - Classes dinâmicas
  const redTitle = true

  return (
    <>
      <div className='App'>
        {/* 1 - Css global */}
        <h1>CSS no React</h1>
        {/* 2 - Css de component */}
        <MyComponent />
        <p>Pegou o css do component acima</p>
        {/* 3 - Inline style */}
        <p style={{color: 'blue', padding: "2rem", border: '1px solid #000', fontWeight: 'bold'}}>Este elemento possui estilos inline</p>
        {/* 4 - Estilos inline dinâmico */}
        <h2 style={n > 10 ? { color: 'purple' } : { color: 'magenta' }}>
          CSS dinâmico
        </h2>
        {/* 5 - Classes dinâmica */}
        <h2 className={redTitle ? 'red-title' : 'title'}>Este elemento vai ter uma classe!</h2>
      </div>  
    </>
  )
}

export default App
