import { useState } from 'react'
import './App.css'

// 2 - Imagens em assets
import night from './assets/night.jpg'

// 3 - useState
import Data from './components/Data'

// 4 - Renderização de lista
import ListRender from './components/ListRender'

// 7 - Renderização condicional
import ConditionalRender from './components/ConditionalRender'

//  8 - props
import ShowUserName from './components/ShowUserName'

// 9 - Desestruturando props
import CarComponent from './components/CarComponent'
// 11 - Renderização de lista com reaproveitamento de component
const cars = [
  {id: 1, brand: 'Ferrari', model: 'Sport', year: 2023},
  {id: 2, brand: 'KIA', model: 'Family', year: 2019},
  {id: 3, brand: 'Jeep', model: 'SUV', year: 2023}
]

// 12 - Fragments
import Fragment from './components/Fragment'

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
        <ConditionalRender />
        {/* 8 - Props */}
        <ShowUserName name='João' />
        {/* 9 - Desestruturando props */}
        <CarComponent model={'SUV'} year={2013} brand={'Ferrari'}/>
        {/* 10 - Reaproveitamento de components */}
        <CarComponent model={'Family'} year={2020} brand={'Jeep'} />
        <CarComponent model={'SUV'} year={1998} brand={'Fiat'} />
        {/* 11 - Renderização de lista com components */}
        {cars.map((car) => (
          <CarComponent key={car.id} brand={car.brand} year={car.year} model={car.model}/>
        ))}
        {/* 12 - Fragment */}
        <Fragment />
      </div>
    </>
  )
}

export default App
