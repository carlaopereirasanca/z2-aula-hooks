
import React, { useRef } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {

  const childRef = useRef();

  const handleClick = () => {

    childRef.current.focus();
    console.log(childRef.current.getValue());
  };

  return (
    <div>
      <ChildComponent ref={childRef} />
      <button onClick={handleClick}>Focar e obter valor</button>
    </div>
  );
}

export default ParentComponent;

