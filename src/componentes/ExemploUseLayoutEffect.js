
import React, { useLayoutEffect, useRef } from 'react';

function ExemploUseLayoutEffect() {

    const divRef = useRef();

    useLayoutEffect(() => {
        // Este código será executado sincronamente após as mutações do DOM
        // mas antes do navegador pintar
        const largura = divRef.current.offsetWidth;
        divRef.current.style.height = `${largura}px`;
    }, []);

    return (
        
        <div 
            ref={divRef}
            style={{ width: '200px', height: '450px', backgroundColor: 'blue' }}
        >
        Este elemento será um quadrado
        </div>
    );
}

export default ExemploUseLayoutEffect;

