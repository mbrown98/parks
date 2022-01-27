import React, { useState, createContext, useContext, useEffect } from "react";

const HomePageContext = createContext<any>(undefined);

function useHomePageContext() {
  const context = useContext(HomePageContext);
  if (!context) throw new Error("Auth must be used within a location provider");
  return context;
}

const HomePageProvider = (props: {
  children: React.ReactNode;
}): React.ReactElement => {
  useEffect(() => {}, []);
  return <HomePageContext.Provider value={{}} {...props} />;
};

export { HomePageProvider, useHomePageContext };
