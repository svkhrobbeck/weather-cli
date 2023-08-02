import getArgs from "./helpers/args.js";
import { getWeather } from "./services/api.service.js";
import { printErr, printHelp, printSuccess } from "./services/log.service.js";
import { keys, saveKeyValue } from "./services/storage.service.js";

const saveToken = async token => {
  if (!token.length) return printErr("Token is not exist");
  try {
    await saveKeyValue(keys.token, token);
    printSuccess("Token saved");
  } catch (err) {
    printErr(err.message);
  }
};

const startCli = () => {
  const args = getArgs(process.argv);

  if (args.h) printHelp();

  if (args.s) {
    // save city
  }

  if (args.t) return saveToken(args.t);
};

startCli();
