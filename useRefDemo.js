import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  
  const inputRef = useRef();
  const clickHandler = () => {

    inputRef.current.value = 1000
    //inputRef.current.focus();
    inputRef.current.style.display = 'none';

  }

  return (
   
    <div>
      <h1>useRef</h1>
      <input type="text" ref={inputRef}/>
      <button onClick={clickHandler}>Click Me</button>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
