import React from "react";
import {RecoilRoot} from "recoil";
import TodoList from "./Components/TodoList";
import "./Components/Index.css";
import Nav from "./Components/Nav";
import About from "./Components/About";
import Task from "./Components/Task";
import TaskDetail from "./Components/TaskDetail";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from 'theme-ui';
import theme from './theme.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
    <div>
      <RecoilRoot>
        <Router>
          <Nav />
          <Switch>
          <Route path="/" exact component={TodoList} />
          <Route path="/about" component={About} />
          <Route path="/task"  component={Task} />
          <Route path="/task/:id" component={TaskDetail}  />
          </Switch>
        </Router>
        {/* <TodoList /> */}
      </RecoilRoot>
    </div>
    </ThemeProvider>
  );
}


export default App;

