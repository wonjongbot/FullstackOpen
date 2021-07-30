import React from 'react'

const App = (props) => {
  const {counter} = props
  return(
    <div>{counter}</div>
  )
}

export default App;
/* 
import React from "react";

const Hello = ({name, age}) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>Which means you were probably born in {bornYear()}</p>
    </div>
  )
};

const App = () => {
  const name = "Peter";
  const age = 19;
  console.log("hello from component");
  return (
    <>
      <h1>안녕하세요!</h1>
      <Hello name={name} age={age} />
    </>
  );
};

export default App;
*/