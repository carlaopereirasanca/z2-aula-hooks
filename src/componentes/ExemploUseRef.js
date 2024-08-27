import { useRef, useState } from "react";

function ExemploUseRef() {

    // Estado pra guardar o que for digitado na caixa:
    const [name, setName] = useState("");

    // Cria uma referência, que vai ser usada para
    // referenciar nossa caixa de texto
    // (atributo 'ref' do elemento 'input'):
    const inputRef = useRef();

    // Função que muda o foco da interface para
    // o elemento referenciado por inputRef:
    const focusInput = () => {
        inputRef.current.focus();
    }

    return ( 
      <div>
        <input 
            ref={inputRef}
            value={name} 
            onChange={ (evento) => setName( evento.target.value ) } 
        />
        <p>Olá! Meu nome é <b>{name}</b></p>
        <button onClick={focusInput}>Mudar o Foco</button>
      </div>
    );
  }
  
  export default ExemploUseRef;

