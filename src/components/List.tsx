import React from "react";
import { IState as IProps } from "../App";

const List: React.FC<IProps> = ({ people }) => {
  // or ({ people }: IProps)

  const renderList = (): JSX.Element[] => {
    return people.map((person, index) => {
      const { name, age, url, note } = person;
      return (
        <li className="List" key={index}>
          <div className="List-header">
            <img src={url} className="List-img" alt="person" />
            <h2>{name}</h2>
          </div>
          <p>{age} years old</p>
          <p className="List-note">{note}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
};

export default List;
