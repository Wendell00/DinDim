'use client'

import { createContext, useReducer, ReactNode } from 'react'

interface FormContextProviderProps {
  children: ReactNode
}

interface ExpenseItem {
  description: any,
  value: any,
  data: any,
  account: any,
  categorie: any
}

interface FormContextData {
  // Visibilidade do Saldo
  amountVisible: boolean;
  setAmountVisible: (amountVisible: boolean) => void;
  // O Nome escolhido
  name: string;
  setName: (name: string) => void;
  // Mudar o componente na /app/home
  config: number;
  setConfig: (config: number) => void;
  // Armazenar a lista de Depesas que forem criadas
  listExpense: ExpenseItem[];
  setListExpense: (listExpense: ExpenseItem[]) => void; 
}

type Action =
  | { type: 'SET_AMOUNTVISIBLE', payload: boolean }
  | { type: 'SET_NAME', payload: string}
  | { type: 'SET_CONFIG', payload: number}
  | { type: 'SET_LISTEXPENSE', payload: ExpenseItem[] };

function reducer(state: FormContextData, action: Action) {
  switch (action.type) {
    case 'SET_AMOUNTVISIBLE':
      return { ...state, amountVisible: !state.amountVisible };
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_CONFIG':
      return { ...state, config: action.payload };
    case 'SET_LISTEXPENSE':
      return { ...state, listExpense: action.payload };
    default:
      return state;
  }
}

export const FormContext = createContext<FormContextData>({} as FormContextData);

export function FormContextProvider({ children }: FormContextProviderProps) {
  const [state, dispatch] = useReducer(reducer, { 
    amountVisible: true, setAmountVisible: () => {},
    name: '', setName: () => {},
    config: 0, setConfig: () => {},
    listExpense: [], setListExpense: () => {}
    });

  function setListExpense(newExpenseItem: any) {
    dispatch({ type: 'SET_LISTEXPENSE', payload: newExpenseItem });
  }

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
      config: state.config, setConfig,
      listExpense: state.listExpense, setListExpense
      }}>
      {children}
    </FormContext.Provider>
  )
}