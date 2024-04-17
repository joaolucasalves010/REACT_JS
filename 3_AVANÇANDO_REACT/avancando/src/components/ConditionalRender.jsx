


const ConditionalRender = () => {

  const x = true;

  return (
    <div>
      {/* 7 - conditional render */}
      <h3>Isso vai ser exibido?</h3>
      {x && <p>Sim!</p>}
    </div>
  )
}

export default ConditionalRender