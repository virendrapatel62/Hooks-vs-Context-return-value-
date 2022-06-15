import React, { useContext } from 'react';
import './style.css';

const context = React.createContext();

function useStudent() {
  return {
    name: 'useStudent Name ',
    age: 25,
  };
}

let AContext, BContext;
let AHook, BHook;

function A() {
  AContext = useContext(context);
  AHook = useStudent();
  return JSON.stringify({ AContext, AHook });
}
function B() {
  BContext = useContext(context);
  BHook = useStudent();
  console.log({
    AContext,
    BContext,
    areEqual: AContext == BContext,
    areEqualHooksValues: AHook == BHook,
  });

  return JSON.stringify({ BContext, BHook });
}

export default function App() {
  const value = {
    name: 'virendra',
    age: 23,
  };
  return (
    <context.Provider value={value}>
      <h1>Hello StackBlitz!</h1>
      <A />
      <B />
      <p>Start editing to see some magic happen :)</p>
    </context.Provider>
  );
}
