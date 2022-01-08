import { useEffect, useReducer } from "react";
import { addTodosFailure, addTodosRequest } from "../utils/action";
import TodoInput from "./TodoInput";
import { addTodosSuccess } from "../utils/action";
import reducer from "../utils/reducer";
import { getTodosRequest } from "../utils/action";
import { getTodosSuccess } from "../utils/action";
import { getTodosFailure } from "../utils/action";

export default function Todo() {
  const [state, dispatch] = useReducer(reducer, {
    todos: [],
    isLoading: false,
    isError: true
  });

  const addTodos = (text) => {
    const requestAction = addTodosRequest();
    dispatch(requestAction);
    return fetch("https://json-server-mocker-kittu.herokuapp.com/tasks", {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        title: text,
        status: false
      })
    })
      .then((res) => res.json())
      .then((res) => {
        const successAction = addTodosSuccess(res);
        dispatch(successAction);
      })
      .catch((res) => {
        const failureAction = addTodosFailure();
        dispatch(failureAction);
      });
  };

  const getTodos = () => {
    const requestAction = getTodosRequest();
    dispatch(requestAction);
    return fetch("https://json-server-mocker-kittu.herokuapp.com/tasks")
      .then((res) => res.json())
      .then((res) => {
        const successAction = getTodosSuccess(res);
        dispatch(successAction);
      })
      .catch((res) => {
        const failureAction = getTodosFailure();
        dispatch(failureAction);
      });
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <>
      <TodoInput handleAdd={addTodos} />
      {state.isLoading && <h1>Loading...</h1>}
      {state.todos.map((todo) => {
        return <div>{`${todo.title}-${todo.status}`}</div>;
      })}
    </>
  );
}
