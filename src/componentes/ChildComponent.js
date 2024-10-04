
import { forwardRef, useImperativeHandle, useRef } from "react";

const ChildComponent = forwardRef((props, ref) => {

    const inputRef = useRef();
  
    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current.focus();
      },
      getValue: () => {
        return inputRef.current.value;
      }
    }));
  
    return <input ref={inputRef} />;

});

export default ChildComponent;

