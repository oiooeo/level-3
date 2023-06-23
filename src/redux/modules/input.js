const ADD_INPUT = "ADD_INPUT";

export const addInput = (payload) => {
  return { type: ADD_INPUT, payload };
};

const initialState = {
  tags: [],
};

const input = (state = initialState, action) => {
  switch (action.type) {
    case ADD_INPUT:
      return {
        ...state,
        tags: [...state.tags, action.payload],
      };
    default:
      return state;
  }
};

export default input;
