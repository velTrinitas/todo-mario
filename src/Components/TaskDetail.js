import React, { useState, useEffect } from "react";
import "./Index.css";


function TaskDetail({ match }) {

  useEffect(() => {
    fetchItem(); 
    console.log(match);
  }, []);
    

  const [item, setItem] = useState({});

const fetchItem = async () => {
    const fetchItem = await fetch("https://gorest.co.in/public-api/todos")
    const item = await fetchItem.json();

    console.log(item);
};

  return (
    <div>
      <h1>Great details about specific todo</h1>
    </div>
  );
}

export default TaskDetail;
