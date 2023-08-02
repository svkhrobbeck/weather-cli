// import https from "https";
import { getKeyValue, keys } from "./storage.service.js";
import axios from "axios";

const getWeather = async city => {
  const token = process.env.TOKEN ?? (await getKeyValue(keys.token));

  if (!token) throw new Error("API Token is not exist");

  // const url = new URL("https://api.openweathermap.org/data/2.5/weather");
  // url.searchParams.append("q", city);
  // url.searchParams.append("appid", token);

  // https.get(url, res => {
  //   let result = "";

  //   res.on("data", chunk => (res += chunk));
  //   res.on("end", () => console.log(JSON.parse(result)));
  // });

  const { data } = await axios.get("https://api.openweathermap.org/data/2.5/weather", {
    params: { q: city, appid: token, units: "metric", lang: "en" },
  });
};

export { getWeather };
