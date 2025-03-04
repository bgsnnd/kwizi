"use client"

import React from "react";
import useCategories from "./useCategories";

const GlobalContext = React.createContext();

export const GlobalContextProvider = ({children}) => {
   const {loading, categories} = useCategories();

   console.log("GlobalContextProvider", categories)
    return(
        <GlobalContext.Provider 
            value={{
                loading,
                categories,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
    
};
export const useGlobalContext = () => {
    return React.useContext(GlobalContext);
};
