import { configureStore } from '@reduxjs/toolkit';

const reducer = (state = {}, action) => {
  switch(action.type) {
    default:
      return state;
  }
};

const store = configureStore({
  reducer: reducer,
});

export default store;