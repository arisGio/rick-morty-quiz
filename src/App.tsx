import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { QUIZ_LENGTH } from "./constants";
import { selectCurrentQuestionIndex } from "./redux/selectors";
import { AppDispatch } from "./redux/store";
import { fetchCharacters } from "./redux/thunk";
import Question from "./ui-react/Question";
import Result from "./ui-react/Result";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  const currentQuestionIndex = useSelector(selectCurrentQuestionIndex);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <>
      {currentQuestionIndex && currentQuestionIndex < QUIZ_LENGTH + 1 && (
        <Question />
      )}
      {currentQuestionIndex === QUIZ_LENGTH + 1 && <Result />}
      {!currentQuestionIndex && (
        <Button
          onClick={() => {
            dispatch(fetchCharacters());
          }}
        >
          Play Now
        </Button>
      )}
      <Button
        onClick={() => {
          document.body.classList.toggle("dark");
          setIsDarkMode((prev) => !prev);
        }}
      >
        {isDarkMode ? <Moon /> : <Sun />}
      </Button>
    </>
  );
}

export default App;
