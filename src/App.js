import React, { useContext, useMemo } from 'react';
import './style.css';

const TranslationContext = React.createContext();

function useTranslation() {
  return () => {
    console.log('Translation Function from hook');
  };
}
function useTranslationUsingContext() {
  return useContext(TranslationContext);
}

let AContext, BContext;
let AHook, BHook;

function A() {
  console.log('Rendring A');
  AContext = useTranslationUsingContext();
  AHook = useTranslation();

  AContext();
  AHook();

  return 'A Component';
}
function B() {
  console.log('Rendring B');

  BContext = useTranslationUsingContext();
  BHook = useTranslation();

  console.log({
    AContext,
    AHook,
    BContext,
    BHook,
    areEqualUsingContextHook: AContext == BContext,
    areEqualHooksValues: AHook == BHook,
  });

  BContext();
  BHook();

  return 'B Component';
}

export default function App() {
  const t = () => {
    console.log('Translation function from context ');
  };
  return (
    <TranslationContext.Provider value={t}>
      <h1>Open Console</h1>
      <hr />
      <A />
      <hr />
      <B />
    </TranslationContext.Provider>
  );
}
