import React, { useState } from "react";

const Display = (props) => (
  <div>
    {" "}
    {props.text} {props.value}
  </div>
);

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Staticstics = (props) => {
  
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const setGoodValue = (newGoodValue) => {
    setGood(newGoodValue);
  };
  const setNeutValue = (newNeutValue) => {
    setNeutral(newNeutValue);
  };
  const setBadValue = (newBadValue) => {
    setBad(newBadValue);
  };
  const total = good + neutral + bad;
  const score = good - bad;
  const average = score / total;
  const percentage = (good / total) * 100;

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGoodValue(good + 1)} text="good" />
      <Button handleClick={() => setNeutValue(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBadValue(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Display value={good} text={"good"} />
      <Display value={neutral} text={"neutral"} />
      <Display value={bad} text={"bad"} />
      <Display value={total} text={"all"} />
      <Display value={average} text={"average"} />
      <Display value={percentage} text={"percentage"} />
    </div>
  );
};

export default App;
