import axios from "axios";

export const baseApiURL = async () => {
  try {
    const res = await axios.get("https://api.spacexdata.com/v3/");
    console.log(res.data);
  } catch (err) {
    console.log(err);
  }
};
