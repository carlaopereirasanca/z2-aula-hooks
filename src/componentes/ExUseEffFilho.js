
import React, { useEffect } from 'react';

function ExUseEffFilho() {

    useEffect( () => {

      console.log("Componente filho montado");
      
      // Função de limpeza
      return () => {
        console.log("Componente filho desmontado");
      };

    }, [] );
  
    return (
      <div style={{ border: '1px solid black', padding: '10px', margin: '10px' }}>
        <h4>Componente Filho</h4>
        <p>Este componente pode ser desmontado.</p>
      </div>
    );
  }
  
  export default ExUseEffFilho;
