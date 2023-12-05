import React from 'react';
import {UserProvider } from './src/providers/UserProvider';
import Proyecto from './src/components/Proyecto';

export default function App() {
  
  return (
    <UserProvider>
      <Proyecto/>
    </UserProvider>
  );
}
