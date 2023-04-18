import { useState } from 'react'
import Header from './components/Header'


function App() {
  const [presupuesto, setPresupuesto] = useState(0);

  const [isValidPresupuesto, setIsValuePresupuesto] = useState(false)
  return (
    <>
      <Header
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto = {isValidPresupuesto}
        setIsValuePresupuesto = {setIsValuePresupuesto}
      />
    </>
  )
}

export default App
