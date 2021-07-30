import React, { useState } from "react";

const App = () => {
  const [clicks, setClicks] = useState({
    left: 0,
    right: 0,
  });

  const handleLeftClick = () => 
    setClicks({...clicks, left: clicks.left + 1,});
  const handleRightClick = () => 
    setClicks({...clicks, right: clicks.right + 1,});

  return (
    <div>
      {clicks.left}
      <button onClick={handleLeftClick}>left</button>
      <button onClick={handleRightClick}>right</button>
      {clicks.right}
    </div>
  );
};

export default App;

/*Part C

import React, { useState } from "react";

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ onClick, text }) => (
    <button onClick={onClick}>
      {text}
    </button>
  )

const App = () => {
  const [counter, setCounter] = useState(0);

  const increaseByOne = () =>setCounter(counter + 1);
  const resetToZero = () => setCounter(0);
  const decreaseByOne = () => setCounter(counter - 1);

  return (
    <div>
      <Display counter={counter}/>
      <Button onClick={increaseByOne} text="add"/>
      <Button onClick={decreaseByOne} text="subtract"/>
      <Button onClick={resetToZero} text="reset"/>
    </div>
  );
};

export default App;

Part B

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
