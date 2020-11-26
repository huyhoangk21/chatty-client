import React, { createContext, useReducer } from 'react';
import { useQuery, gql } from '@apollo/client';

export const AuthContextState = createContext();
export const AuthContextDispatch = createContext();

const INITIAL_STATE = { username: null };
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
  useQuery(ME, {
    onCompleted: ({ me }) => (INITIAL_STATE.username = me.username),
    onError: e => console.log(e),
  });

  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

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
      email
    }
  }
`;

export default AuthProvider;
