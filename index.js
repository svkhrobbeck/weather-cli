import getArgs from "./helpers/args.js";
import { getWeather } from "./services/api.service.js";
import { printErr, printHelp, printSuccess } from "./services/log.service.js";
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

  if (args.s) {
    // save city
  }

  if (args.t) return saveToken(args.t);
};

startCli();
