
import React, { useState, useEffect } from 'react';

function ExemploUseEffect() {

  const [contador, setContador] = useState(0);

  useEffect(() => {
    document.title = `Você clicou ${contador} vezes`;
  }, [contador]);

  return (
    <div>
      <p>Você clicou {contador} vezes</p>
      <button onClick={ () => setContador(contador + 1) }>
        Clique aqui
      </button>
      <p>Note o título na aba!!</p>
    </div>
  );
}
  
  export default ExemploUseEffect;
