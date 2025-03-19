import { QUIZ_LENGTH } from "@/constants";
import { Result } from "@/redux/typings";

export const shuffler = <T>(array: T[], cutOff: number) =>
  array.sort(() => 0.5 - Math.random()).slice(0, cutOff);

export const fetchIncorrectChoices = (array: Result[], id: number) =>
  array
    .filter((char: Result) => char.id !== id)
    .sort(() => 0.5 - Math.random())
    .slice(0, QUIZ_LENGTH - 1)
    .map((char: Result) => char.name);

export const reshuffleQuestions = (questions: Result[]) => {
  const shuffled = shuffler(questions, QUIZ_LENGTH);

  return shuffled.map((character: Result) => {
    const incorrect = fetchIncorrectChoices(questions, character.id);

    return {
      image: character.image,
      correct: character.name,
      options: [...incorrect, character.name].sort(() => 0.5 - Math.random()),
    };
  });
};
