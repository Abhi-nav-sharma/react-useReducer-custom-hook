import {
  ADD_TODO_FAILURE,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  GET_TODO_FAILURE,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS
} from "./actionTypes";

export const getTodosRequest = () => ({
  type: GET_TODO_REQUEST,
  payload: {
    isLoading: true
  }
});

export const getTodosSuccess = (todos) => ({
  type: GET_TODO_SUCCESS,
  payload: {
    todos: todos
  }
});

export const getTodosFailure = () => ({
  type: GET_TODO_FAILURE,
  payload: {
    isError: true
  }
});

export const addTodosRequest = () => ({
  type: ADD_TODO_REQUEST,
  payload: {
    isLoading: true
  }
});

export const addTodosSuccess = (todos) => ({
  type: ADD_TODO_SUCCESS,
  payload: {
    todos: todos
  }
});

export const addTodosFailure = () => ({
  type: ADD_TODO_FAILURE,
  payload: {
    isError: true
  }
});
