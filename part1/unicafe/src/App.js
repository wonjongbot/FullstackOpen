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
  if (props.total === 0) {
    return <p>No feedback given</p>;
  } else {
    return (
      <div>
        <Display value={props.good} text={"good"} />
        <Display value={props.neutral} text={"neutral"} />
        <Display value={props.bad} text={"bad"} />
        <Display value={props.total} text={"all"} />
        <Display
          value={
            (props.good - props.bad) / (props.good + props.neutral + props.bad)
          }
          text={"average"}
        />
        <Display
          value={props.good / (props.good + props.neutral + props.bad)}
          text={"positive"}
        />
      </div>
    );
  }
};

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

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGoodValue(good + 1)} text="good" />
      <Button handleClick={() => setNeutValue(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBadValue(bad + 1)} text="bad" />

      <h1>statistics</h1>
      <Staticstics good={good} neutral={neutral} bad={bad} total={total} />
    </div>
  );
};

export default App;
