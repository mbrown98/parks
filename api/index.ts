import axios from "axios";
import { API_KEY } from "@env";

const NPS_URL_BASE = "https://developer.nps.gov/api/v1";
let config = { Authorization: API_KEY };

export const NPS_API = {
  getParks: async () => {
    const URL = NPS_URL_BASE + "/parks?" + `&api_key=${API_KEY}`;
    console.log("URL", URL);
    axios
      .get(URL)
      .then((res) => console.log("res", res))
      .catch((e) => console.log("e", e));
  },
};
