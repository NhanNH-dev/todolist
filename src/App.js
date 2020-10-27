import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.scss";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { fetchTodos } from "./redux/actions";
import { bindActionCreators } from "redux";

export class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchTodos();
  }
  render() {
    const { todos } = this.props;
    return (
      <div className="App">
        <h1>List Post</h1>
        <TodoInput />
        <TodoList todos={todos} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ todos: state.todos });
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchTodos }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
