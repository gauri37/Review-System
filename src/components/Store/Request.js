import axios from "axios";
export const searchResult = () => {
  return axios
    .get("https://api.aniapi.com/v1/anime")
    .then((response) => response.data)
    .catch((err) => []);
};
