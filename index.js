import getArgs from "./helpers/args.js";
import { printErr, printHelp, printSuccess } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

const saveToken = async token => {
  try {
    await saveKeyValue("token", token);
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
