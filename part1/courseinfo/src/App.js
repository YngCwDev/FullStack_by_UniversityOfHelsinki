debugger
import { useState } from "react";

const App = () => {
  const course = {
    name: "Desenvolvimento de aplicação Half Stack",
    parts: [
      {
        name: "Fundamentos da biblioteca React",
        exercises: 10,
      },
      {
        name: "Usando props para passar dados",
        exercises: 7,
      },
      {
        name: "Estado de um componente",
        exercises: 14,
      },
    ],
  };
  const [counter, setState] = useState(0);
  return (
    <div>
      <Header course={course.name} />
      <Content part={course.parts} />
      <Total
        exercises={[
          course.parts[0].exercises,
          course.parts[1].exercises,
          course.parts[2].exercises,
        ]}
      />
      <Buttun counter={counter} setState={setState} />
    </div>
  );
};

const Header = (props) => {
  return <h1>{props.course}</h1>;
};

const Content = (props) => {
  return (
    <div>
      <Part name={props.part[0].name} exercises={props.part[0].exercises} />
      <Part name={props.part[1].name} exercises={props.part[1].exercises} />
      <Part name={props.part[2].name} exercises={props.part[2].exercises} />
    </div>
  );
};

const Part = (props) => {
  return (
    <p>
      {props.name} {props.exercises}
    </p>
  );
};

const Total = (props) => {
  return (
    <p>
      Number of exercises:{" "}
      {props.exercises[0] + props.exercises[1] + props.exercises[2]}
    </p>
  );
};

const Buttun = ({ setState, counter }) => {
  const increment = () => setState(counter + 1);
  console.log(counter);
  return (
    <>
      <button type="button" onClick={increment}>
        plus
      </button>
      <button type="button" onClick={() => setState(0)}>
        Make it 0
      </button>
    </>
  );
};

export default App;
