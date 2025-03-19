import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { QUIZ_LENGTH } from "@/constants";
import {
  selectCurrentQuestion,
  selectCurrentQuestionIndex,
  selectScore,
} from "@/redux/selectors";
import { nextQuestion } from "@/redux/slice";
import { CheckCheckIcon } from "lucide-react";
import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Question() {
  const dispatch = useDispatch();
  const score = useSelector(selectScore);
  const currentQuestion = useSelector(selectCurrentQuestion);
  const currentQuestionIndex = useSelector(selectCurrentQuestionIndex);
  const { image, correct, options } = currentQuestion;
  const [selected, setSelected] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(nextQuestion(selected === correct));
    setSelected("");
  };

  const buttonText = () => {
    return currentQuestionIndex === QUIZ_LENGTH ? "Finish" : "Next Question";
  };

  return (
    <CardContent className="flex flex-col items-center space-y-4">
      <h1 className="text-lg font-semibold">Current Score: {score}%</h1>
      <p className="text-center text-base font-medium">
        Question {currentQuestionIndex}: Who is the shown character?
      </p>
      <img
        src={image}
        alt={image}
        className="w-full max-w-sm rounded-lg shadow-md"
      />
      <form onSubmit={handleSubmit} className="w-full flex flex-col space-y-3">
        {options.map((option) => (
          <label
            key={option}
            className="flex items-center space-x-3 p-2 border rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            <input
              type="radio"
              id={option}
              name="character"
              value={option}
              checked={selected === option}
              onChange={() => setSelected(option)}
              className="hidden"
            />
            <span
              className={`w-5 h-5 flex items-center justify-center border rounded-full ${
                selected === option
                  ? "bg-blue-500 border-blue-500"
                  : "border-gray-400"
              }`}
            >
              {selected === option && <CheckCheckIcon />}
            </span>
            <span className="text-sm font-medium">{option}</span>
          </label>
        ))}
        <Button
          type="submit"
          disabled={selected === ""}
          className="w-full py-3 text-lg font-semibold"
        >
          {buttonText()}
        </Button>
      </form>
    </CardContent>
  );
}

export default Question;
