import React, { createContext } from 'react';
import { makeCurrentUsers } from '../data/makeData';

const defaultUsers = makeCurrentUsers(1);

export const UsersContext = createContext();

export function UsersProvider(props) {
  const [users] = [defaultUsers];
  
  return (
    <UsersContext.Provider value={users}>
      {props.children}
    </UsersContext.Provider>
  );
}