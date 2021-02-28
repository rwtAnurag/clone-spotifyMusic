// import { createContext } from "react";

import React,{createContext,
useContext,
useReducer}
 from "react";

 export const DataLayerContext = createContext();

 export const DataLayer = ({initialState,reducer,children}) =>(
          <DataLayerContext.Provider value={useReducer(useReducer,initialState)}>
              {children}
          </DataLayerContext.Provider>
      )
export   const useDataLayerValue =() => useContext(DataLayerContext);

