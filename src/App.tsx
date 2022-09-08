import React, { useState } from "react";
import AddToList from "./components/AddToList";
import List from "./components/List";
import { boy } from "./images/index";

export interface IState {
  people: {
    name: string;
    age: number;
    url: string;
    note?: string;
  }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Asif",
      url: `${boy}`,
      age: 23,
      note: "it is you and you that you have to come in the party",
    },
  ]);

  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people} />
      <AddToList people={people} setPeople={setPeople} />
    </div>
  );
}

export default App;
