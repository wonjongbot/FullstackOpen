import React, { useState } from "react";

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAll] = useState([])

  const handleLeftClick = () => {
    setAll(allClicks.concat('L'))
    setLeft(left+1)
  } 
  const handleRightClick = () => {
    setAll(allClicks.concat('R'))
    setRight(right+1)
  }

  const Button = (props) => {
    return(
      <button onClick={props.onClick}>{props.text}</button>
    )
  }
  const History = (props) => {
    if (props.allClicks.length === 0) {
      return (
        <div>
          the app is used by presing the buttons
        </div>
      )
    }
    return (
      <div>
        button press history: {props.allClicks.join(' ')}
      </div>
    )
  }
  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text={"left"}/>
      <Button onClick={handleRightClick} text={"right"}/>
      {right}
      <History allClicks={allClicks}/>
    </div>
  );
};

export default App;

/* PART C

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
