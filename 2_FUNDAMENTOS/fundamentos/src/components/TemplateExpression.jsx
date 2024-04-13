// 4 - Template Expression

function TemplateExpression() {
  const pessoa = { // Criando objeto
    name: 'João Lucas',
    idade: 15,
    genero: 'Masculino',
    profissao: 'Programador'
  }

    return (
      <div>
        <p>O resultado é {2 + 2}</p>
        <p>Bem vindo {pessoa.name}</p>
        <p>Você tem {pessoa.idade} anos, se identifica no genêro {pessoa.genero}, e é {pessoa.profissao}</p>
      </div>
    )
}

export default TemplateExpression