
import React, { useState } from 'react';
import ExUseEffFilho from './ExUseEffFilho';

function ExUseEffPai() {

    // Estado que armazena se o componente filho está
    // montado (mostrado) ou não. Começa montado (true).
    const [mostrarFilho, setMostrarFilho] = useState(true);
  
    // Função que faz com que mostrarFilho alterne
    // entre true e false, isto é, armazena seu
    // 'inverso' (!):
    const toggleComponente = () => {
      setMostrarFilho(!mostrarFilho);
    };
  
    return (
      <div>
        <h3>Exemplo de Desmontagem</h3>

        <button onClick={toggleComponente}>
          {mostrarFilho ? 'Desmontar Componente' : 'Montar Componente'}
        </button>

        {/* Renderização condicional baseada no valor de mostrarFilho */}
        {mostrarFilho && <ExUseEffFilho />}
      </div>
    );
  }
  
  export default ExUseEffPai;
