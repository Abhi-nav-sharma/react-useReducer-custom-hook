import {
  ADD_TODO_FAILURE,
  ADD_TODO_REQUEST,
  ADD_TODO_SUCCESS,
  GET_TODO_FAILURE,
  GET_TODO_REQUEST,
  GET_TODO_SUCCESS
} from "./actionTypes";

export default function reducer(state, action) {
  switch (action.type) {
    case GET_TODO_REQUEST: {
      return {
        ...state,
        isLoading: true
      };
    }
    case GET_TODO_SUCCESS: {
      return {
        ...state,
        todos: action.payload.todos,
        isLoading: false
      };
    }
    case GET_TODO_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    }

    case ADD_TODO_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false
      };
    }
    case ADD_TODO_SUCCESS: {
      return {
        ...state,
        isLoading: false
      };
    }
    case ADD_TODO_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true
      };
    }
    default: {
      return state;
    }
  }
}
