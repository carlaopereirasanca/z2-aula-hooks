

function ExemploUseReducer2({ state, dispatch }) {


    return (

        <div>
          <p>Contagem: {state.count}</p>
          <p>Nome: {state.name || 'Não definido'}</p>

          {/* type: a ação que o reducer deve executar */}
          <button onClick={ () => dispatch( { type: 'increment' } ) }>+</button>
          <button onClick={ () => dispatch( { type: 'decrement' } ) }>-</button>
          <button onClick={ () => dispatch( { type: 'reset' }     ) }>Reset</button>

          <input 
            type="text" 
            value={state.name} 
            placeholder="Digite seu nome"

            // type: a ação que o reducer deve executar
            // payload: os dados necessário para executar a ação
            onChange={ (e) => dispatch( { type: 'setName', payload: e.target.value } ) }
          />
        </div>
    );
};
      
export default ExemploUseReducer2;

