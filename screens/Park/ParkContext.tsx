import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  useCallback,
} from "react";
import { NPS_API } from "../../api";

type T_ParkPageContext = {
  parkData: any;
};

const ParkPageContext = createContext<T_ParkPageContext | undefined>(undefined);

function useParkPageContext(): T_ParkPageContext {
  const context = useContext(ParkPageContext);
  if (!context) throw new Error("Auth must be used within a location provider");
  return context;
}

const ParkPageProvider = (props: {
  children: React.ReactNode;
}): React.ReactElement => {
  const [parkData, setParkData] = useState<any>(null);
  // NPS_API.fetchData("/parks?parkCode=abli");
  const loadData = useCallback(async () => {
    // handle the click event
    await NPS_API.fetchData("/parks?parkCode=olym")
      .then((res) => {
        if (!res) throw Error("No Res");

        setParkData(res.data[0]);
      })
      .catch((e) => console.log("e", e));
  }, []);

  useEffect(() => {
    loadData();
  }, []);
  return <ParkPageContext.Provider value={{ parkData }} {...props} />;
};

export { ParkPageProvider, useParkPageContext };
