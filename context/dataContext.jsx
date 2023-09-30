import { createContext, createSignal, useContext } from "solid-js"

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = createSignal(0);

  return (
    <DataContext.Provider value={{ data }}>
      { children }
    </DataContext.Provider>
  )
}