import React, { useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddToList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    url: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: [e.target.value],
    });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.note || !input.url) return;
    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.url,
        note: input.note,
      },
    ]);
    setInput({ name: "", age: "", url: "", note: "" });
  };

  return (
    <div className="AddToList">
      <input
        type="text"
        placeholder="Name"
        value={input.name}
        onChange={handleChange}
        className="AddToList-input"
        name="name"
      />
      <input
        type="number"
        placeholder="Age"
        value={input.age}
        className="AddToList-input"
        onChange={handleChange}
        name="age"
      />
      <input
        type="text"
        placeholder="Image URL"
        value={input.url}
        onChange={handleChange}
        className="AddToList-input"
        name="url"
      />
      <textarea
        placeholder="Note"
        value={input.note}
        className="AddToList-input"
        onChange={handleChange}
        name="note"
      />
      <button onClick={handleClick} className="AddToList-btn">
        Add to List
      </button>
    </div>
  );
};

export default AddToList;
