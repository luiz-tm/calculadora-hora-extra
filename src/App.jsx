import Header from "./components/Header/Header"
import Button from "./components/Button/Button"
import Table from './components/Table/Table'
import Resultado from "./components/Resultado/Resultado"

import './App.css'

function App() {

  

  return (
    <div>

      <Header></Header>
      <div className="container">
        <Button></Button>
        <Table></Table>
        <Resultado></Resultado>
      </div>
    </div>
  )
}

export default App
