import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.scss";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { fetchTodos } from "./redux/actions";
import { bindActionCreators } from "redux";
import Loading from "./components/Loading";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hide: false,
    };
  }
  componentDidMount() {
    this.props.fetchTodos();
  }
  showError() {
    return (
      <div id="fail" className="notification failed">
        Failed!
      </div>
    );
  }

  showSuccess() {
    return (
      <div
        style={{ display: this.props.hide ? "none" : "inline" }}
        className="notification success"
      >
        Successfully!
      </div>
    );
  }
  render() {
    const {
      todos,
      loading,
      notification_failed,
      notification_success,
    } = this.props;
    return (
      <div className="App">
        {notification_failed && this.showError()}
        {notification_success && this.showSuccess()}
        <h1>List Post</h1>
        {loading && <Loading />}
        <TodoInput />
        <TodoList todos={todos} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
  loading: state.loading,
  notification_failed: state.notification_failed,
  notification_success: state.notification_success,
  hide_notification: state.hide_notification,
});
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ fetchTodos }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
