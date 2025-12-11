import getArgs from "./utils";

const calculateBmi = (height: number, weight: number) => {
  const bmi = weight / height ** 2;
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi < 25) {
    return "Normal range";
  } else if (bmi < 30) {
    return "Overweight";
  } else {
    return "Obese";
  }
};

const args = getArgs();

if (args.length != 2) {
  console.log("Missing or too many arguments");
} else {
  console.log(calculateBmi(args[0] / 100, args[1]));
}
