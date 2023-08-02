import chalk from "chalk";
import dedent from "dedent-js";

const printErr = err => {
  console.log(chalk.bgRed("ERROR") + " " + err);
};

const printSuccess = msg => {
  console.log(chalk.bgGreen("SUCCESS") + " x" + msg);
};

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan("HELP")}
    -s [CITY] for install city
    -h for help
    -t [API_KEY] for saving token`
  );
};

export { printErr, printSuccess, printHelp };
