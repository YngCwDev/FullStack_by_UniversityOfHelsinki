import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [voteList, setVoteList] = useState(
    anecdotes.reduce((acc, anecd) => {
      acc[anecd] = 0;
      return acc;
    }, {})
  );

  const handleNextAnecdote = () => {
    const rand = Math.floor(Math.random() * anecdotes.length);
    setSelected(rand);
  };

  const handleVote = () => {
    const selectedAnecdote = anecdotes[selected];
    setVoteList((prevVoteList) => ({
      ...prevVoteList,
      [selectedAnecdote]: prevVoteList[selectedAnecdote] + 1,
    }));
  };

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>{anecdotes[selected]}</div>
      <p>Has {voteList[anecdotes[selected]]} </p>
      <Button text={"vote"} handleClick={handleVote} />
      <Button text={"next anecdote"} handleClick={handleNextAnecdote} />

      <h1>Anecdotes with most votes</h1>
      <Anecdotes voteList={voteList} />
    </div>
  );
};

const Button = ({ handleClick, text }) => {
  return (
    <button type="button" onClick={handleClick}>
      {text}
    </button>
  );
};

const AnecdoteLine = ({ anecdote, rank }) => {
  return (
    <p>
      {anecdote} {rank}
    </p>
  );
};

const Anecdotes = ({ voteList }) => {
  const anecdotes = Object.keys(voteList);
  let greater = 0;
  let renkedAnecdote = "";
  anecdotes.map((anecdote) => {
    if (voteList[anecdote] > greater) {
      greater = voteList[anecdote];
      renkedAnecdote = anecdote;
    }
  });
  return (
    <>
      <AnecdoteLine
        key={greater}
        anecdote={renkedAnecdote}
        rank={voteList[renkedAnecdote]}
      />
    </>
  );
};

export default App;
