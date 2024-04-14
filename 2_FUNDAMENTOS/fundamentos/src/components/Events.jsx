
const Events = () => {
  function handleClick(e) {
    console.log('Testando função')
    console.log(`A soma de 2 + 2 é ${2 + 2}`)
    console.log(e.target)
    console.log(e)
  }

  return (
    <div>
      <div>
        <button onClick={() => {
          console.log('Testando eventos!')
        }}>Clique aqui</button>
      </div>
      {/* 7 - Evento com função */}
      <div>
        <button onClick={handleClick}>Evento com função</button>
      </div>
    </div>
  )
}

export default Events