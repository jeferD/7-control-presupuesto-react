import React, {useState, useEffect} from 'react'
import Mensaje from './Mensaje'
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({setModal, setAnimarModal, animarModal, guardarGasto, gastoEditar, setGastoEditar}) => {
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')

    const [mensaje, setMensaje] = useState('')
    const [id, setId]= useState('')
    const [fecha, setFecha]= useState('')

    const ocultarModal = ()=>{
        setAnimarModal(false)
        setGastoEditar({})
        setTimeout(() => {
            setModal(false)
        }, 500);
    }

    useEffect(()=>{
        if(Object.keys(gastoEditar).length>0){
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setId(gastoEditar.id)
            setFecha(gastoEditar.fecha)
        }
    },[])

    const handleSubmit = e=>{
        e.preventDefault(); //prevenir el envio automatico

        if([nombre, cantidad, categoria].includes('')){
            //los elementos no deben ser vacios
            setMensaje('Todos los campos son obligatorios')

            setTimeout(() => {
                setMensaje('')
            }, 2000);
            return;
        }
        guardarGasto({nombre, cantidad, categoria, id, fecha})
    }


  return (
    <div className='modal'>
        <div className='cerrar-modal'>
            <img src={CerrarBtn} alt="CerrarModal" onClick={ocultarModal}/>
        </div>
        <form className={`formulario ${animarModal ? "animar" : ''}`}
            onSubmit={handleSubmit}
        >
            <legend>{gastoEditar.nombre ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>
            {
                mensaje && <Mensaje tipo= 'error'>{mensaje}</Mensaje>
            }
            <div className='campo'>
                <label htmlFor="nombre">Nombre gasto</label>
                <input type="text" id='nombre' placeholder='Añade el Nombre del Gasto' 
                    value={nombre}
                    onChange={e => setNombre(e.target.value)}
                />
            </div>

            <div className='campo'>
                <label htmlFor="cantidad">Cantidad gasto</label>
                <input type="text" id='cantidad' placeholder='Añade la Cantidad del Gasto'
                    value={cantidad}
                    onChange={e => setCantidad(e.target.value)}
                />
            </div>

            <div className='campo'>
                <label htmlFor="cantidad">Categoria</label>
                <select name="categoria" id="categoria"
                    value={categoria}
                    onChange={e => setCategoria(e.target.value)}
                >
                    <option value=""> Seleccione una categoria</option>
                    <option value="Ahorro">Ahorro</option>
                    <option value="Comida">Comida</option>
                    <option value="Gastos">Gastos Varios</option>
                    <option value="Salud">Salud</option>
                    <option value="Suscripciones">Suscripciones</option>
                    <option value="Osio">Osio</option>
                    <option value="Casa">Casa</option>
                </select>
            </div>
            <input type="submit" value={gastoEditar.nombre ? "Guardar Cambios" : "Nuevo Gasto"} />
        </form>
    </div>
  )
}

export default Modal