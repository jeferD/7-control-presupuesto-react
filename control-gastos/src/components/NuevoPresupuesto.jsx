import React, { useState } from 'react'
import Mensaje from './Mensaje'
const NuevoPresupuesto = ({presupuesto, setPresupuesto, setIsValuePresupuesto}) => {

    const [mensaje, setMensaje] = useState ('')


    const handlePresupuesto = ( e)=>{
        e.preventDefault();
        // console.log('Enviadoooooo')
        if(!Number(presupuesto) || Number(presupuesto)<0){
            setMensaje('No es un numero')
            setTimeout(() => {
                setMensaje('')  
            }, 2000);
            return
        }
        setIsValuePresupuesto(true)

    }
  return (
    <>
        <div className='contenedor-presupuesto contenedor sombra'>
            <form action="" className='formulario' onSubmit={handlePresupuesto}>
                <div className='campo'>
                    <label htmlFor="">Definir Presupuesto</label>
                    <input
                        className='nuevo-presupuesto'
                        type="number"
                        placeholder='Añade tu Presupuesto'
                        value={presupuesto}
                        onChange= {e => setPresupuesto(Number(e.target.value))}
                    />
                </div>

                <input type="submit" value='Añadir' />

                {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}
            </form>
        </div>

    </>
  )
}

export default NuevoPresupuesto