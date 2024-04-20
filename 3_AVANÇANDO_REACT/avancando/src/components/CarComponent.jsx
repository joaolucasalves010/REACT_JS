const CarComponent = ( { brand, year, model } ) => {
  return (
    <div>
      <h2>Detalhes do carro</h2>
      <ul>
        <li>Modelo: {model}</li>
        <li>Ano: {year}</li>
        <li>Marca: {brand}</li>
      </ul>
    </div>
  )
}

export default CarComponent