/* eslint-disable */

import React, { useCallback, useEffect, useState } from 'react';

function ExemploUseCallback2() {

    // Lista de strings que será pesquisada:
    const items = ['a', 'ab', 'abc', 'abcd', 'abcde', 'abcdef', 'abcdefg'];

    // Estado que contem nossa string de pesquisa:
    const [searchTerm, setSearchTerm] = useState('');

    // Estado inútil que usaremos apenas para forçar a renderização:
    const [inutil, setInutil] = useState(0);

    // Função para filtrar os itens com base na string de pesquisa.
    // Agora a função só será recriada quando 'searchTerm' mudar
    const filteredItems = useCallback( () => {

        console.log(new Date().toLocaleTimeString()+" Função chamada!");

        // Retorna uma lista, baseada na lista original, apenas
        // com as strings que incluem nossa string de pesquisa:
        return items.filter((item) => item.toLowerCase().includes(searchTerm.toLowerCase()));
        
    } , [searchTerm]);

    useEffect(() => {
        // Se a função for recriada, exibe isso no console:
        console.log(new Date().toLocaleTimeString()+' Função recriada!!');
      }, [filteredItems]);
  
    return (
        <div>

            <input
                placeholder="Pesquisar..."
                value={searchTerm}
                onChange={ (e) => setSearchTerm(e.target.value) }
            />

            <ul style={{listStyle: "none"}}>
                {filteredItems().map( (item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>

            {/* O click no botão usa setInutil só pra forçar uma renderização! */}
            <button onClick={ ()=>{ setInutil( Math.random() ) } }>Renderize!</button>
        </div>

    );
}

export default ExemploUseCallback2;

