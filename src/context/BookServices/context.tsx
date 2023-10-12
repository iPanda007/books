import { createContext } from "react";
import { useProviderValue,Value } from "./value";


export const context = createContext<Value>(undefined!)

export const Provider = ({children}:{children:JSX.Element}) => {
    const value = useProviderValue()

  return (
    <context.Provider value={value}>
            {children}
    </context.Provider>
  )
}


