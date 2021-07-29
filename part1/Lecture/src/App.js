import React from "react";

const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}! You are {props.age} years old</p>
    </div>
  );
};

const App = () => {
  const name = 'Peter'
  const age = 19
  console.log("hello from component");
  return (
    <>
      <h1>안녕하세요!</h1>
      <Hello name="Tony" age={age + 31}/>
      <Hello name={name} age={age}/>
    </>
  );
};

export default App;
