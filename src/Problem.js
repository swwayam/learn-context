
import { useState } from 'react';
import './App.css';

function GrandChild(props){
  return(
    <div>
      <h3>Grand Child : </h3>
      <Child brand={props.brand}/>
    </div>
  )
}

function Child(props){
  return(
    <div>
      <h2>Child: {props.brand}</h2>
    </div>
  )
}

function App() {

  const [brandName] = useState("Amazon");
  
  return (
    <div>
        <h1>Hello World</h1>
        <GrandChild brand={brandName}/>
    </div>
  );
}

export default App;
