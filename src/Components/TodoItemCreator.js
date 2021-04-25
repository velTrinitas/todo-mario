import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import React, { useState } from "react";
import AddBoxIcon from "@material-ui/icons/AddBox";
import "./Index.css";
import CharacterCount from "./CharacterCount";

const todoListState = atom({
  key: "todoListState",
  default: [],
});

const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

function TodoItemCreator() {
  // const [inputValue, setInputValue] = useState("");
  const [inputValue, setInputValue] = useRecoilState(textState);
  const setTodoList = useSetRecoilState(todoListState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        text: inputValue,
        isComplete: false,
      },
    ]);
    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input className="form-input" type="text" value={inputValue} onChange={onChange} />
      <CharacterCount className="form-input-count"/>
      <button className="form-button" onClick={addItem}><AddBoxIcon className="icons" /></button>
    </div>
  );
}

// utility for creating unique Id
let id = 0;
function getId() {
  return id++;
}

export default TodoItemCreator;
