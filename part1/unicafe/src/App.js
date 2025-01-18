import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    setGood(good + 1);
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
  };

  const handleBadClick = () => {
    setBad(bad + 1);
  };

  console.log(good, neutral, bad);
  return (
    <>
      <h1>give feedback</h1>
      <div>
        <Button text={"Good"} handleClick={handleGoodClick} />
        <Button text={"Neutral"} handleClick={handleNeutralClick} />
        <Button text={"Bad"} handleClick={handleBadClick} />
      </div>
      <h1>statistic</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

const StatisticLine = ({ text, counter }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{counter}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  if (good + neutral + bad > 0) {
    return (
      <table>
        <tbody>
          <StatisticLine text={"good"} counter={good} />
          <StatisticLine text={"neutral"} counter={neutral} />
          <StatisticLine text={"bad"} counter={bad} />
          <Total total={good + neutral + bad} />
          <Average good={good} neutral={neutral} bad={bad} />
          <PositivePorce good={good} neutral={neutral} bad={bad} />
        </tbody>
      </table>
    );
  } else {
    return <p>No feedback given</p>;
  }
};
const Total = ({ total }) => {
  return (
    <tr>
      <td>all</td>
      <td>{total}</td>
    </tr>
  );
};

const Average = ({ good, neutral, bad }) => {
  let average = (good * 1 + bad * -1) / (good + neutral + bad);

  return (
    <tr>
      <td>average</td>
      <td>{average}</td>
    </tr>
  );
};

const PositivePorce = ({ good, neutral, bad }) => {
  let positivePorce = (good / (good + neutral + bad)) * 100;
  return (
    <tr>
      <td>positive</td>
      <td>{positivePorce}%</td>
    </tr>
  );
};

const Button = ({ text, handleClick }) => {
  return (
    <>
      <button type="button" onClick={handleClick}>
        {text}
      </button>
    </>
  );
};

export default App;
