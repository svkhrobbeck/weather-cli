import os from "os";
import path from "path";
import fs from "fs";

const keys = { token: "token", city: "city" };

const filePath = path.join(os.homedir(), "weather-data.json");

const saveKeyValue = async (key, value) => {
  let data = {};

  if (await isExist(filePath)) {
    const file = await fs.promises.readFile(filePath);
    data = JSON.parse(file);
  }

  data[key] = value;
  await fs.promises.writeFile(filePath, JSON.stringify(data));
};

const isExist = async path => {
  try {
    await fs.promises.stat(path);
    return true;
  } catch (err) {
    return false;
  }
};

const getKeyValue = async key => {
  if (await isExist(filePath)) {
    const file = await fs.promises.readFile(filePath);
    const data = await JSON.parse(file);
    return data[key];
  }

  return undefined;
};

export { saveKeyValue, getKeyValue, keys };
