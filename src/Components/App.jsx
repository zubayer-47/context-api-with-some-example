import React, { useReducer } from 'react';
import { Context } from '../Context/Context';
import Provider from './Provider';

const initialState = {
  name: 'Rasel Ahmed',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'set':
      return {
        name: action.value,
      };
    default:
      return state.name;
  }
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Context.Provider value={{ state, dispatch }}>
      <Provider />
    </Context.Provider>
  );
}
