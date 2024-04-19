const CarComponent = ( { brand, year, model } ) => {
  return (
    <div>
      <ul>
        <li>Modelo: {model}</li>
        <li>Ano: {year}</li>
        <li>Marca: {brand}</li>
      </ul>
    </div>
  )
}

export default CarComponent