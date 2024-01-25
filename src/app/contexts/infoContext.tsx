'use client'

import { createContext, useReducer, ReactNode } from 'react'

interface FormContextProviderProps {
  children: ReactNode
}

interface FormContextData {
  amountVisible: boolean;
  setAmountVisible: (amountVisible: boolean) => void;
  name: string;
  setName: (name: string) => void;
  config: number;
  setConfig: (config: number) => void;
}

type Action =
  | { type: 'SET_AMOUNTVISIBLE', payload: boolean }
  | { type: 'SET_NAME', payload: string}
  | { type: 'SET_CONFIG', payload: number}

function reducer(state: FormContextData, action: Action) {
  switch (action.type) {
    case 'SET_AMOUNTVISIBLE':
      return { ...state, amountVisible: !state.amountVisible };
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_CONFIG':
      return { ...state, config: action.payload };
    default:
      return state;
  }
}

export const FormContext = createContext<FormContextData>({} as FormContextData);

export function FormContextProvider({ children }: FormContextProviderProps) {
  const [state, dispatch] = useReducer(reducer, { 
    amountVisible: true, setAmountVisible: () => {},
    name: '', setName: () => {},
    config: 0, setConfig: () => {}
    });

  function setAmountVisible(amountVisible: boolean) {
    dispatch({ type: 'SET_AMOUNTVISIBLE', payload: amountVisible });
  }

  function setName(name: string) {
    dispatch({ type: 'SET_NAME', payload: name });
  }

  function setConfig(config: number) {
    dispatch({ type: 'SET_CONFIG', payload: config });
  }

  return (
    <FormContext.Provider value={{ 
      amountVisible: state.amountVisible, setAmountVisible, 
      name: state.name, setName,
      config: state.config, setConfig
      }}>
      {children}
    </FormContext.Provider>
  )
}