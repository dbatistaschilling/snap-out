import { AxiosResponse } from "axios";
import React, { createContext, ReactNode, useEffect, useState } from "react";
import { AboutParagraphType, ContactType, EventType, MediaType, MemberType, SectionType } from "../interfaces";
import api from "../services/api";

type AppProviderProps = {
  children: ReactNode;
};

interface AppContextData {
  loading: boolean;
  data: DataProps;
}

interface DataProps {
  sections: SectionType[];
  aboutParagraphs: AboutParagraphType[];
  contact: ContactType[];
  events: EventType[];
  media: MediaType[];
  members: MemberType[];
}

export const AppContext = createContext({} as AppContextData);

const AppProvider = ({children}: AppProviderProps) => {
  const [loading, setLoading] = useState<boolean>(true)
  const [data, setData] = useState<DataProps>({
    sections: [],
    aboutParagraphs: [],
    contact: [],
    events: [],
    media: [],
    members: [],
  })

  useEffect(() => {
    const fetchData = async (promiseArray: Promise<AxiosResponse<any>>[], dataKeys: string[]) => {
      try {
        const response = await Promise.all(promiseArray).then(responses => {
          return responses.map(response => {
            const { data } = response
            return data
          })
        })
        dataKeys.forEach((key, index) => {
          setData(prevState => ({
            ...prevState,
            [key]: response[index]
          }))
        })
      } catch(err) {
        console.log(err);
      }
    }
    let promiseArray: any[] = []
    const dataKeys = Object.keys(data)
    dataKeys.forEach(key => promiseArray.push(api.get(key)))
    fetchData(promiseArray, dataKeys)
    setLoading(false)
  }, [])

  // useEffect(() => {

  //   const fetchData = async (param: string, setState: Dispatch<SetStateAction<DataProps>>) => {
  //     try {
  //       const response = await api.get(param)
  //       if (response.data) {
  //         setState(prevState => ({
  //           ...prevState,
  //           [param]: response.data
  //         }))
  //       }
  //     } catch(err) {
  //       console.log(err);
  //     }
  //   }

  //   let key: keyof typeof data;
  //   for (key in data){
  //     if (Object.keys(data[key]).length === 0) {
  //       fetchData(key, setData)
  //     }
  //   }
  // }, [])

  return (
    <AppContext.Provider
      value={{
        loading,
        data
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;