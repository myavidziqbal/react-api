import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import axios from "axios";
import TodoDetail from './TodoDetail'

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      inputDescription: ''
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

  submitButton = () => {
    axios
      .post("https://ib-api-todo-list.herokuapp.com/todos", {
        description: this.state,
        done: false
      })
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  handleOfChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <Header todos={this.state.todos} handleOfChange={this.handleOfChange} submitButton={this.submitButton} inputDescripion={this.state.inputDescripion} />

      </div>
    );
  }
}

export default App;
