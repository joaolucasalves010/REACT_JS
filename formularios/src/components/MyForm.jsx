import "./MyForm.css";

import { useState } from "react";

const myForm = () => {
  // 3 - Gerenciamento de dados
  const [name, setName] = useState();

  const [email, setEmail] = useState();

  const handleName = (e) => {
    setName(e.target.value);
  };

  // 5 - Envio de form
  const handleSubmit = (e) => {
    e.preventDefault();

    if (name == undefined || email == undefined) {
      console.log("Indefinido");
    }

    console.log(name, email);
  };

  console.log(name, email);

  return (
    <div>
      {/* 1 - Criação de form */}
      {/* 5 - Envio de formulário */}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite o seu nome:"
            onChange={handleName}
          />
        </div>
        {/* 2 - Label envolvendo input */}
        <label>
          <span>E-mail:</span>
          {/* 4 - Simplificando a manipulação */}
          <input
            type="text"
            name="email"
            placeholder="Digite o seu e-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default myForm;
