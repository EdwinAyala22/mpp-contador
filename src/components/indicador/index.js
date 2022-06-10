import React from 'react';

const Indicador = ({contador}) => {
  return (
    <div>
        <h1 className='titulo'>CONTADOR</h1>
        <h1 className='numero' >{contador}</h1>
    </div>
  )
}

export default Indicador