import getArgs from "./utils";

interface Result {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExercises = (hours: number[], target: number): Result => {
  const trainingHours = hours.filter((n) => n > 0);
  const totalHours = trainingHours.reduce((sum, current) => sum + current, 0);
  const average = totalHours / hours.length;

  let rating = 1;
  if (average >= target * 2) {
    rating = 3;
  } else if (average >= target) {
    rating = 2;
  }
  const descs = {
    1: "Didn't reach the target.",
    2: "Reached the target!",
    3: "Greatly exceeded the target!",
  };

  return {
    periodLength: hours.length,
    trainingDays: trainingHours.length,
    success: average >= target,
    rating,
    ratingDescription: descs[rating],
    target,
    average,
  };
};

const args = getArgs();
const hours = args.slice(1);

if (args.length == 0) {
  console.log("Missing arguments");
} else if (hours.length > 0) {
  console.dir(calculateExercises(hours, args[0]));
} else {
  console.log("No training days given");
}
