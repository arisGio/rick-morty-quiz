import { Button } from "@/components/ui/button";
import { QUIZ_LENGTH } from "@/constants";
import {
  selectCurrentQuestion,
  selectCurrentQuestionIndex,
} from "@/redux/selectors";
import { nextQuestion } from "@/redux/slice";
import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Question() {
  const dispatch = useDispatch();
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
    if (currentQuestionIndex === QUIZ_LENGTH) {
      return "Finish";
    }
    return "Next Question";
  };

  return (
    <div>
      <div>Question {currentQuestionIndex}: Who is the shown character?</div>
      <img src={image} alt={image} />
      <form onSubmit={handleSubmit}>
        {options.map((option) => (
          <div key={option}>
            <input
              type="radio"
              id={option}
              name="character"
              value={option}
              checked={selected === option}
              onChange={() => {
                console.log(correct);
                setSelected(option);
              }}
            />
            <label>{option}</label>
          </div>
        ))}

        <Button type="submit" disabled={selected === ""}>
          {buttonText()}
        </Button>
      </form>
    </div>
  );
}

export default Question;
