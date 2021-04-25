import React, { useState, useEffect } from "react";
import "./Index.css";
import { Link } from "react-router-dom";
import SearchField from "./SearchField";

function Task() {
  const taskLinks = {
    color: "white",
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://gorest.co.in/public-api/todos");

    const items = await data.json();
    console.log(items.data);
    setItems(items.data);
  };

  return (
    <div >
      <h1>Details about task-todos</h1>
      <SearchField />
      <div className="tasks">
        {items.map((item) => (
          <h3 key={item.id}>
            <Link to={`/tasks/${item.id}`}>{item.id} {item.title} </Link>
          </h3>
        ))}
      </div>
    </div>
  );
}

export default Task;
