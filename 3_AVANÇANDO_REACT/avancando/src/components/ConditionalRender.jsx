


const ConditionalRender = () => {

  const x = true;
  const name = 'João Lucas'


  return (
    <div>
      {/* 7 - conditional render */}
      <h3>Isso vai ser exibido?</h3>
      {x && <p>Sim!</p>}
      {/* 8 - Else */}
      {name == 'João Lucas' ? (
        <div>
          <p>Olá João Lucas!</p>
        </div>
      ) : (
        <div>
          <p>Ola {name}</p>
        </div>
      )}
    </div>
  )
}

export default ConditionalRender