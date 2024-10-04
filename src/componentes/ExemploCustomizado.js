
import React, { useDebugValue, useState } from 'react';

function useContador(valorInicial = 0) {

    const [contador, setContador] = useState(valorInicial);

    // Neste exemplo, useDebugValue é usado 
    // dentro do hook personalizado useContador. 
    // Ele adiciona uma etiqueta que indica se o valor do contador 
    // é positivo ou zero/negativo. 
    // Esta informação será visível nas React DevTools, 
    // facilitando a depuração do estado do hook.
    useDebugValue(contador > 0 ? 'Positivo' : 'Zero ou negativo');

    const incrementar = () => setContador(c => c + 1);
    const decrementar = () => setContador(c => c - 1);

    return [contador, incrementar, decrementar];
}

function ComponenteExemplo() {

    // Criando nosso hook feito em casa:
    const [valor, incrementar, decrementar] = useContador();

    return (
        <div>
            <p>Contador: {valor}</p>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
        </div>
    );
}

export default ComponenteExemplo;

