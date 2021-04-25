import React from "react";
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";
import CharacterCount from "./CharacterCount";
import "./Index.css";
import DeleteIcon from "@material-ui/icons/Delete";
import Checkbox from "@material-ui/core/Checkbox";
import StyledCheckbox from "./StyledCheckbox";

const todoListState = atom({
  key: "todoListState",
  default: [],
});

function TodoItem({ item }) {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      text: value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      isComplete: !item.isComplete,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };

  return (
    <div>
      <input
        className="form-todo"
        type="text"
        value={item.text}
        onChange={editItemText}
      />
      {/* <input
        type=<Checkbox size="large"/>
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      /> */}

      <StyledCheckbox
        size="large"
        checked={item.isComplete}
        onChange={toggleItemCompletion}
      />

      <button className="delete-button" onClick={deleteItem}>
        <DeleteIcon className="icons"/>
      </button>
    </div>
  );
}

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

export default TodoItem;
