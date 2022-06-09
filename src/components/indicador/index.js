import React from 'react';
import './stylesI.css';
const Indicador = ({contador}) => {
  return (
    <div>
        <h2 className='titulo'>CONTADOR</h2>
        <h1 className='numero' >{contador}</h1>
    </div>
  )
}

export default Indicador