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

console.dir(calculateExercises([3, 0, 2, 4.5, 0, 3, 1], 2));
