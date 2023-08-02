import chalk from "chalk";
import dedent from "dedent-js";

const printErr = err => {
  console.log(chalk.bgRed("ERROR") + " " + err);
};

const printSuccess = msg => {
  console.log(chalk.bgGreen("SUCCESS") + " " + msg);
};

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan("HELP")}
    -s [CITY] for install city
    -h for help
    -t [API_KEY] for saving token`
  );
};

const printWeather = (response, icon) => {
  console.log(dedent`
  ${chalk.bgYellowBright("WEATHER")} City weather ${response.name}
  ${icon} ${response.weather[0].description}
  Temprature: ${response.main.temp} (feels like ${response.main.feels_like})
  Humidity: ${response.main.humidity}%
  Wind speed: ${response.wind.speed}
  `);
};

export { printErr, printSuccess, printHelp, printWeather };
