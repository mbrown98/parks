import React, {
  useState,
  createContext,
  useContext,
  useEffect,
  useCallback,
} from "react";
import { useRoute } from "@react-navigation/native";
import { NPS_API } from "../../../api";

type T_ParkPageContext = {
  parkData: any;
};

const ParkPageContext = createContext<T_ParkPageContext | undefined>(undefined);

function useParkPageContext(): T_ParkPageContext {
  const context = useContext(ParkPageContext);
  if (!context) throw new Error("Park hook must be used within a park page");
  return context;
}

const ParkPageProvider = (props: {
  children: React.ReactNode;
}): React.ReactElement => {
  const route = useRoute();

  // @ts-ignore
  const park: string = route?.params?.parkId;

  const [parkData, setParkData] = useState<any>(null);

  const loadData = useCallback(async () => {
    setParkData(null);
    // handle the click event
    await NPS_API.fetchData(`/parks?parkCode=${park}`)
      .then((res) => {
        if (!res) throw Error("No Res");

        setParkData(res.data[0]);
      })
      .catch((e) => console.log("e", e));
  }, [park]);

  useEffect(() => {
    park && loadData();
  }, [park]);
  return <ParkPageContext.Provider value={{ parkData }} {...props} />;
};

export { ParkPageProvider, useParkPageContext };
