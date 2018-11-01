import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
    };
  }

  componentDidMount() {
    this.getAllTodos()
  }

  getAllTodos = () => {
    axios
      .get("https://ib-api-todo-list.herokuapp.com/todos")
      .then(res => this.setState({ todos: res.data.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Header todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
