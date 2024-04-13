import './App.css'


import FirstComponent from './components/FirstComponent' // 2 - Importando component
import TemplateExpression from './components/TemplateExpression' // Importando component Template Expression

function App() {
  return (      
      <div className="App">
        {/* 3 - Comentário JSX */}
        <h1>Fundamentos em ReactJs!</h1>
        <FirstComponent />
        <TemplateExpression />
      </div>
  )
}

export default App
