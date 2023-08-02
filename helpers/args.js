const getArgs = (args = []) => {
  const res = {};
  const rest = args.slice(2);

  rest.forEach((val, idx, arr) => {
    if (val.charAt(0) === "-") {
      if (idx === arr.length - 1) {
        res[val.substring(1)] = true;
      } else if (arr[idx + 1].charAt(0) !== "-") {
        res[val.substring(1)] = arr[idx + 1];
      } else {
        res[val.substring(1)] = true;
      }
    }
  });

  return res;
};

export default getArgs;
