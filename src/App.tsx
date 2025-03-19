import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { QUIZ_LENGTH } from "./constants";
import { selectCurrentQuestionIndex } from "./redux/selectors";
import { AppDispatch } from "./redux/store";
import { fetchCharacters } from "./redux/thunk";
import Question from "./ui-react/Question";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const currentQuestionIndex = useSelector(selectCurrentQuestionIndex);

  return (
    <>
      {currentQuestionIndex && currentQuestionIndex < QUIZ_LENGTH + 1 && (
        <Question />
      )}
      {!currentQuestionIndex && (
        <Button
          onClick={() => {
            dispatch(fetchCharacters());
          }}
        >
          Play Now
        </Button>
      )}
    </>
  );
}

export default App;
