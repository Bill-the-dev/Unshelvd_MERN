import RootReducer from "./root_reducer";

const ResetReducer = (state, action) => {
  if (action.type === 'RESET_APP') {
    state = undefined;
  }

  return RootReducer(state, action);
};