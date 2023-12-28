import React, { ReactNode, createContext, useState } from 'react';

interface GHContextType {
  userName: string;
  setUserName: (arg:string) => void;
  tableData: any[];
  setTableData: (arg: any[]) => void;
  loading: boolean;
  setLoading: (arg: boolean) => void;
}

const defaultState = {
    userName : '',
    setUserName : (arg:String) => {},
    tableData : [],
    setTableData : (arg:Object) => {},
    loading: false,
    setLoading: (arg: boolean) => {}
} as GHContextType

export const GHStateContext = createContext(defaultState)

type GHProvidableProps = {
    children: ReactNode
}

export default function GHStateProvider({ children } : GHProvidableProps){
  const [userName, setUserName] = useState<string>("");
  const [tableData, setTableData] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false)

  return <GHStateContext.Provider value={{ userName, setUserName, tableData, setTableData, loading, setLoading }}>{children}</GHStateContext.Provider>;
};


