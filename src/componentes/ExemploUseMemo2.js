
import { useMemo, useState } from "react";

function ExemploUseMemo2() {

    const [number, setNumber] = useState(1);
    const [text, setText] = useState("");

    const doubleNumber = useMemo( () => {
        return slowFunction(number);
    }, [number] );

    return (

        <>
            <p>{doubleNumber}</p>
            <input value={text} onChange={ (evento) => setText(evento.target.value) } />
            <p>Estado text: {text}</p>
            <button onClick={ ()=>setNumber(number+1) }>Incrementa Number</button>
        </>
    );
}

const slowFunction = (num) => {
    console.log("Função slowFunction foi chamada!");
    for (let i = 0; i <= 750000000; i++) {
        num += i;
    }
    console.log("Função slowFunction acabou!");
    return num*2;
}
  
export default ExemploUseMemo2;
