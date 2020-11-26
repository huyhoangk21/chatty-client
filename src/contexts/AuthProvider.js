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

const AuthProvider = ({ children }) => {
  const INITIAL_STATE = { username: null };
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  useQuery(ME, {
    onCompleted: ({ me }) => dispatch({ type: 'LOGIN', payload: me.username }),
    onError: e => console.log(e),
  });

  return (
    <AuthContextDispatch.Provider value={dispatch}>
      <AuthContextState.Provider value={state}>
        {children}
      </AuthContextState.Provider>
    </AuthContextDispatch.Provider>
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
