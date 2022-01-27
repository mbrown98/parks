import axios from "axios";
import { API_KEY } from "@env";

const NPS_URL_BASE = "https://developer.nps.gov/api/v1";

export const NPS_API = {
  // type this query
  fetchData: async (query: string) => {
    const URL = `${NPS_URL_BASE}${query}?&api_key=${API_KEY}`;
    return axios
      .get(URL)
      .then((res) => res)
      .catch((e) => {
        console.log("e", e);
        return null;
      });
  },
};
