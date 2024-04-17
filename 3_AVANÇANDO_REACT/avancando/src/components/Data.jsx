import { useState } from "react"

const Data = () => {
  let someData = 10

  const [anotherNumber, setAnotherNumber] = useState(15)


  return (
    <div>
      <div>
        <p>Valor: {someData}</p>
        <button onClick={() => {someData = 15}}>Mudar váriavel</button>
      </div>
      <div>
        <p>Valor: {anotherNumber}</p>
        <button onClick={() => {
          if (anotherNumber == 10) {
            setAnotherNumber(15)
          }
          else {
            setAnotherNumber(10)
          }
        }}>Mudar state</button>
      </div>
    </div>
  )
}

export default Data