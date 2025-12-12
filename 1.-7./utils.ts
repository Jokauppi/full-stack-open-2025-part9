const getArgs = (): number[] => {
  try {
    return process.argv.slice(2).map((str) => Number(str));
  } catch (err) {
    console.log("one of the arguments is not a number!");
    throw err;
  }
};

export default getArgs;
