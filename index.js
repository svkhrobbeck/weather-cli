import getArgs from "./helpers/args.js";
import { getIcons, getWeather } from "./services/api.service.js";
import { printErr, printHelp, printSuccess, printWeather } from "./services/log.service.js";
import { getKeyValue, keys, saveKeyValue } from "./services/storage.service.js";

const saveToken = async token => {
  if (!token.length) return printErr("Token does not exist");

  try {
    await saveKeyValue(keys.token, token);
    printSuccess("Token saved");
  } catch (err) {
    printErr(err.message);
  }
};

const saveCity = async city => {
  if (!city.length) return printErr("City does not exist");

  try {
    await saveKeyValue(keys.city, city);
    printSuccess("City saved");
  } catch (err) {
    printErr(err.message);
  }
};

const getForecast = async () => {
  const city = process.env.CITY ?? (await getKeyValue(keys.city));

  try {
    const data = await getWeather(city);
    printWeather(data, getIcons(data.weather[0].icon));
  } catch (err) {
    if (err?.response?.status == 404) printErr("City not found");
    else if (err?.response?.status === 401) printErr(err.message);
  }
};

const startWeatherApp = () => {
  const args = getArgs(process.argv);

  if (args.h) printHelp();
  if (args.s) return saveCity(args.s);
  if (args.t) return saveToken(args.t);

  getForecast();
};

startWeatherApp();
