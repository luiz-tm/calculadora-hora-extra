import days from "./data/days"
import Header from "./components/Header/Header"
import Button from "./components/Button/Button"
import Table from './components/Table/Table'
import Resultado from "./components/Resultado/Resultado"
import './App.css'

function App() {
  const nome = localStorage.getItem('funcionario')
  const diaria = localStorage.getItem('diaria')

  return (
    <div>

      <Header></Header>
      <div className="container">
        <Button nome={nome} valorDiaria={diaria}></Button>
        <Table day={days}></Table>
        <Resultado nome={nome} diaria={diaria}></Resultado>
      </div>
    </div>
  )
}

export default App
