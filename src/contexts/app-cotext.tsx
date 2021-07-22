import React, { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { MemberType } from "../interfaces";
import api from "../services/api";

type AppProviderProps = {
  children: ReactNode;
};

interface DataProps {
  members: MemberType[] | [];
}

interface AppContextData {
  notLoading: boolean;
  data: DataProps;
}

export const AppContext = createContext({} as AppContextData);

export const AppProvider = ({children}: AppProviderProps) => {
  const [notLoading, setNotLoading] = useState<boolean>(false)
  const [data, setData] = useState<DataProps>({
    members: []
  })

  useEffect(() => {
    const fetchData = async (param: string, setState: Dispatch<SetStateAction<DataProps>>) => {
      try {
        const response = await api.get(param)
        if (response.data) {
          setState(prevState => ({
            ...prevState,
            [param]: response.data
          }))
        }
      } catch(err) {
        console.log(err);
      }
    }

    let key: keyof typeof data;
    for (key in data){
      if (data[key].length === 0) {
        fetchData(key, setData)
      }
    }
  }, [])

  useEffect(() => {
    let loading: boolean = false
    let key: keyof typeof data;
    for (key in data){
      if (data[key].length === 0) {
        loading = true
      }
    }
    !loading &&   setNotLoading(true)
  }, [data])

  return (
    <AppContext.Provider
      value={{
        notLoading,
        data
      }}>
      {children}
    </AppContext.Provider>
  );
};