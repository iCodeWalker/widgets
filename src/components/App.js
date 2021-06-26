import React, { useState } from "react";
import Accordion from "./Accordion";
import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";
import Route from "./Route";
import Header from "./Header";

const items = [
  {
    title: "What is React",
    content: "React is a frontEnd Javascript framework",
  },
  {
    title: "Why use react",
    content: "It is very favourite among us",
  },
  {
    title: "What is react-redux",
    content: "it is third party library for state management",
  },
];

const options = [
  {
    label: "red as blood",
    value: "red",
  },
  {
    label: "blue as sky",
    value: "blue",
  },
  {
    label: "green as grass",
    value: "green",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="select a colour"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};

export default App;
