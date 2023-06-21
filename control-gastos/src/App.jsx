import { useState,useEffect } from 'react'
import Header from './components/Header'
import Modal from './components/Modal'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import { generarId } from './helpers'
import ListadoGastos from './components/ListadoGastos'
import { object } from 'prop-types'

function App() {

  const [gastos, setGastos] = useState([])


  const [presupuesto, setPresupuesto] = useState(0);

  const [isValidPresupuesto, setIsValuePresupuesto] = useState(false)

  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [gastoEditar, setGastoEditar] = useState({})


  useEffect(()=>{
    if(Object.keys(gastoEditar).length>0){
      console.log(gastoEditar,'---------------------------')
      setModal(true)
      setTimeout(() => {
        setAnimarModal(true)
      }, 500);
    }
   
  },[gastoEditar])


  const handleNuevoGasto = ()=>{
    console.log('Click para nuevo gasto')
    setModal(true)
    setGastoEditar({})

    setTimeout(() => {
      setAnimarModal(true)
    }, 500);
  }

console.log('totalGastadototalGastadototalGastado',gastos)
  const guardarGasto = gasto =>{
    console.log(gasto,'------------gasto')
    if(gasto.id){
      console.log('gastos',gastos,'gasto.id',gasto.id)
      const gastosActualizados = gastos.map(gastoState => gastoState.id == gasto.id ? gasto : gastoState)
      setGastos(gastosActualizados)
      console.log(gastosActualizados,'gastosActualizados')
      setGastoEditar({})
      
    }else{
      gasto.id = generarId()
      gasto.fecha = Date.now()
      //formatear fecha
      setGastos([...gastos, gasto])
    }
    setAnimarModal(false)
    setTimeout(() => {
        setModal(false)
    }, 500);
  }
  return (
    <div className= {modal ? 'fijar' : ''}>
      <Header
        gastos={gastos}
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        isValidPresupuesto = {isValidPresupuesto}
        setIsValuePresupuesto = {setIsValuePresupuesto}
      />
      {
        isValidPresupuesto && (
          <>
            <main>
              <ListadoGastos
              key={gastos.id}
                gastos= {gastos}
                setGastoEditar={setGastoEditar}
              ></ListadoGastos>
            </main>
            <div className='nuevo-gasto'>
              <img src={IconoNuevoGasto} alt="IconoGasto" onClick={handleNuevoGasto} />
            </div>

          </>
        ) 
      }
      {
        modal && <Modal
                    setModal={setModal}
                    animarModal = {animarModal}
                    setAnimarModal={setAnimarModal}
                    guardarGasto = {guardarGasto}
                    gastoEditar={gastoEditar}
                    setGastoEditar={setGastoEditar}
                 />
      }
    </div>
  )
}

export default App
