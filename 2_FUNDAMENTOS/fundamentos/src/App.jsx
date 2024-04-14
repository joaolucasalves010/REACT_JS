import './App.css'


import FirstComponent from './components/FirstComponent' // 2 - Importando component

import TemplateExpression from './components/TemplateExpression' // 4 - Importando component Template Expression

import MyComponent from './components/MyComponent' // 5 - Hierarquia

function App() {
  return (      
      <div className="App">
        {/* 3 - Comentário JSX */}
        <h1>Fundamentos em ReactJs!</h1>
        <FirstComponent />
        <TemplateExpression />
        <MyComponent />
      </div>
  )
}

export default App
