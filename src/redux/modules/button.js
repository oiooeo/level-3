const OPEN_MODAL = "OPEN_MODAL";

export const openModal = (payload) => {
  return { type: OPEN_MODAL, payload };
};

const initialState = {};

const button = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return;
    default:
      return state;
  }
};

export default button;
