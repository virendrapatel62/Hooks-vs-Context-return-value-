import React, { useContext, useMemo } from 'react';
import './style.css';

const TranslationContext = React.createContext();

function useTranslation() {
  return () => {
    console.log('Translation Function from hook');
  };
}

let AContext, BContext;
let AHook, BHook;

function A() {
  AContext = useContext(TranslationContext);
  AHook = useTranslation();

  AContext();
  AHook();

  return JSON.stringify({ AContext, AHook });
}
function B() {
  BContext = useContext(TranslationContext);
  BHook = useTranslation();
  console.log({
    AContext,
    BContext,
    areEqual: AContext == BContext,
    areEqualHooksValues: AHook == BHook,
  });

  BContext();
  BHook();

  return JSON.stringify({ BContext, BHook });
}

export default function App() {
  const t = () => {
    console.log('Translation function from context ');
  };
  return (
    <TranslationContext.Provider value={t}>
      <A />
      <hr />
      <B />
    </TranslationContext.Provider>
  );
}
