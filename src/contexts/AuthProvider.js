import React, { createContext, useReducer } from 'react';
import { useQuery, gql } from '@apollo/client';

export const AuthContextState = createContext();
export const AuthContextDispatch = createContext();

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'LOGIN':
      return { ...state, username: payload };
    case 'LOGOUT':
      return { ...state, username: null };
    default:
      return state;
  }
};
const INITIAL_STATE = { username: null };

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  useQuery(ME, {
    onCompleted: ({ me }) => dispatch({ type: 'LOGIN', payload: me.username }),
  });

  return (
    <AuthContextState.Provider value={state}>
      <AuthContextDispatch.Provider value={dispatch}>
        {children}
      </AuthContextDispatch.Provider>
    </AuthContextState.Provider>
  );
};

const ME = gql`
  query me {
    me {
      username
    }
  }
`;

export default AuthProvider;
