import React, { useState } from "react";

const StatisticLine = (props) => (
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
        <table>
          <thead>
            <tr>
              <td>good</td>
              <td>{props.good}</td>
            </tr>

            <tr>
              <td>neutral</td>
              <td>{props.neutral}</td>
            </tr>

            <tr>
              <td>bad</td>
              <td>{props.bad}</td>
            </tr>

            <tr>
              <td>all</td>
              <td>{props.total}</td>
            </tr>

            <tr>
              <td>average</td>
              <td>
                {(props.good - props.bad) /
                  (props.good + props.neutral + props.bad)}
              </td>
            </tr>

            <tr>
              <td>positive</td>
              <td>{props.good / (props.good + props.neutral + props.bad)}</td>
            </tr>
          </thead>
        </table>
        
        {/* <StatisticLine text={"good"} value={props.good} />
        <StatisticLine text={"neutral"} value={props.neutral} />
        <StatisticLine text={"bad"} value={props.bad} />
        <StatisticLine text={"all"} value={props.total} />
        <StatisticLine
          text={"average"}
          value={
            (props.good - props.bad) / (props.good + props.neutral + props.bad)
          }
        />
        <StatisticLine
          text={"positive"}
          value={props.good / (props.good + props.neutral + props.bad)}
        /> */}
        
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
