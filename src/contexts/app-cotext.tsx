import React, { createContext, Dispatch, ReactNode, SetStateAction, useEffect, useState } from "react";
import { ContactSectionType, EventSectionType, MediaSectionType, MemberSectionType } from "../interfaces";
import { AboutSectionType } from "../interfaces/AboutType";
import api from "../services/api";

type AppProviderProps = {
  children: ReactNode;
};

interface AppContextData {
  notLoading: boolean;
  data: DataProps;
}

interface DataProps {
  aboutSection: AboutSectionType;
  contactSection: ContactSectionType;
  eventSection: EventSectionType;
  mediaSection: MediaSectionType;
  memberSection: MemberSectionType;
}

export const AppContext = createContext({} as AppContextData);

export const AppProvider = ({children}: AppProviderProps) => {
  const [notLoading, setNotLoading] = useState<boolean>(false)
  const [data, setData] = useState<DataProps>({
    aboutSection: {},
    contactSection: {},
    eventSection: {},
    mediaSection: {},
    memberSection: {},
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
      if (Object.keys(data[key]).length === 0) {
        fetchData(key, setData)
      }
    }
  }, [])

  useEffect(() => {
    let loading: boolean = false
    let key: keyof typeof data;
    for (key in data){
      if (Object.keys(data[key]).length === 0) {
        loading = true
      }
    }
    !loading && setNotLoading(true)
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