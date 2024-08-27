import { useState } from "react";

function ExemploUseState() {

    // Criando o 'estado' contador, iniciando com 0:
    const [contador, setContador] = useState(0);

    const adiciona = () => {

        setContador( (prev) => prev+1 );
        setContador( (prev) => prev+1 );
        
    }

    // Função que usa a função setter para subtrair 1 do estado:
    const subtrai = () => {
        setContador(contador-1);
    }

    return (
        <>
            <h2>useState</h2>
            <button onClick={subtrai}>-</button>
            <span>{contador}</span>
            <button onClick={adiciona}>+</button>
        </>
    );
  }
  
  export default ExemploUseState;

  