import axios from "axios";
import { API_KEY } from "@env";

const NPS_URL_BASE = "https://developer.nps.gov/api/v1";

export const DEV_IMAGE =
  "https://www.nps.gov/common/uploads/structured_data/3C7B1C43-1DD8-B71B-0B40240896925A49.jpg";

export const NPS_API = {
  // type this query
  fetchData: async (query: string) => {
    const URL = `${NPS_URL_BASE}${query}?&api_key=${API_KEY}`;
    return axios
      .get(URL)
      .then((res) => res.data)
      .catch((e) => {
        console.log("e", e);
        return null;
      });
  },
};
