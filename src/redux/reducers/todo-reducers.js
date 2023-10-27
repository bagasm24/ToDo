const initialValue = {
  todos: [],
  isLoading: false,
  err: "",
};

function todoReducer(state = initialValue, action) {
  switch (action.type) {
    case "START_FEATHING":
      return {
        ...state,
        isLoading: true,
      };
    case "SUCCESS_GET_DATA":
      return {
        ...state,
        isLoading: false,
        todos: action.payload,
      };
    default:
      return state;
  }
}

export default todoReducer;
