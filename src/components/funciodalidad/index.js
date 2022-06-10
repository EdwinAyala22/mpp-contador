import React, {useState} from 'react';

import Indicador from '../indicador';
const Funcionalidad = () => {
  
  const [Contador, setContador] = useState(0)
  
  const disminuir = () => {
    
    if(Contador<=0){
      setContador(0);
    }else{
      setContador(Contador-1)
    }
  }
  const reset = () => {
    setContador(0);
  }
  const aumentar = () => {
    setContador(Contador+1);
  }
  
  
  return (
    <div>
      <Indicador contador={Contador}/>
      <button className='boton menos' onClick={disminuir}> — </button>
      <button className='boton reset' onClick={reset}> Reset </button>
      <button className='boton mas' onClick={aumentar}> + </button>
    </div>
  )
}



export default Funcionalidad