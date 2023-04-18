import React from 'react'
import NuevoPresupuesto from './NuevoPresupuesto'
import ControlPresupuesto from './ControlPresupuesto'

const Header = ({presupuesto, setPresupuesto, isValidPresupuesto, setIsValuePresupuesto}) => {
  return (
    <header>
        <h1>Planificador de gastos</h1>
        {isValidPresupuesto ? (
          <ControlPresupuesto
            presupuesto={presupuesto}
          />
        ) : (
          <NuevoPresupuesto
              presupuesto={presupuesto}
              setPresupuesto={setPresupuesto}
              setIsValuePresupuesto={setIsValuePresupuesto}
          />

        )}
    </header>
  )
}

export default Header