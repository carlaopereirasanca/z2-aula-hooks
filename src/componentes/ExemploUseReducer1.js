
import { useState } from "react";

function ExemploUseReducer1() {

    // O 'estado' deste componente tem 2 partes.
    // Logo, precisaremos criar 2 estados,
    // com useState:

    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    // Teremos 4 'lógicas' para atualizaçao desses estados.
    // Precisamos entao de 4 funções para realizar essas
    // atualizaçoes:
    
    const incrementa = () => {
        setCount( prevCount => prevCount + 1 );
    };
    
    const decrementa = () => {
        setCount( prevCount => prevCount - 1 );
    };
    
    const zera = () => {
        setCount(0);
    };
    
    const defineNome = (e) => {
        setName(e.target.value);
    };
    
    return (

        <div>
            <p>Contagem: {count}</p>
            <p>Nome: {name || 'Não definido'}</p>
            <button onClick={incrementa}>+</button>
            <button onClick={decrementa}>-</button>
            <button onClick={zera}>Reset</button>
            <input 
                type="text" 
                value={name} 
                onChange={defineNome}
                placeholder="Digite seu nome"
            />
        </div>
    );
};
      
export default ExemploUseReducer1;

