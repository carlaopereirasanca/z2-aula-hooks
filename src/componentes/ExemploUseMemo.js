import { useState } from "react";

function ExemploUseMemo() {

    const [number, setNumber] = useState(1);
    const [text, setText] = useState("");

    // Note que number não muda entre renderizações,
    // consequentemente o resultado da função também não muda,
    // porém a função é chamada novamente,
    // causando problema de performance!
    const doubleNumber = slowFunction(number);

    return (
        <>
            <p>{doubleNumber}</p>
            <input value={text} onChange={ (evento) => setText(evento.target.value) } />
            <p>Estado text: {text}</p>
        </>
    );
}

const slowFunction = (num) => {
    console.log("Função slowFunction foi chamada!");
    for (let i = 0; i <= 750000000; i++) {  num += i;  }
    console.log("Função slowFunction acabou!");
    return num;
}
  
export default ExemploUseMemo;
