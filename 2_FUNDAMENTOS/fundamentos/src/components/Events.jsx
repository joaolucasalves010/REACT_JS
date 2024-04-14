
const Events = () => {
  function handleClick(e) {
    console.log('Testando função')
    console.log(`A soma de 2 + 2 é ${2 + 2}`)
    console.log(e.target)
    console.log(e)
  }

  // 8 - Função de renderização
  const renderSomething = (x) => {
    if (x) {
      return <h1>Renderizando isso!</h1>
    }else {
      return <h1>Renderizando outra coisa!</h1>
    }
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
      {/* 8 - função com */}
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  )
}

export default Events