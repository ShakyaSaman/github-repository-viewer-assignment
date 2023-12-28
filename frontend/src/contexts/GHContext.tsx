import React, { ReactNode, createContext, useState } from 'react';

interface GHContextType {
  userName: string;
  setUserName: (arg:string) => void;
  tableData: any[];
  setTableData: (arg: any[]) => void;
  loading: boolean;
  setLoading: (arg: boolean) => void;
  error: string;
  setError: (arg:string) => void;
}

const defaultState = {
    userName : '',
    setUserName : (arg:String) => {},
    tableData : [],
    setTableData : (arg:Object) => {},
    loading: false,
    setLoading: (arg: boolean) => {},
    error: '',
    setError: (arg: String) => {}
} as GHContextType

export const GHStateContext = createContext(defaultState)

type GHProvidableProps = {
    children: ReactNode
}

export default function GHStateProvider({ children } : GHProvidableProps){
  const [userName, setUserName] = useState<string>("");
  const [tableData, setTableData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string>("")

  return <GHStateContext.Provider value={{ userName, setUserName, tableData, setTableData, loading, setLoading, error, setError }}>{children}</GHStateContext.Provider>;
};


