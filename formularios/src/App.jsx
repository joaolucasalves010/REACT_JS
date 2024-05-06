import { useState } from "react";
import "./App.css";

// 1 - Criando um form
import MyForm from "./components/MyForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Form em React</h1>
        <MyForm userEmail={"ylucasslalves@gmail.com"} userName={"João Lucas"} />
      </div>
    </>
  );
}

export default App;
