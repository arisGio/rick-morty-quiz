import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-all">
      <Card className="w-full max-w-xl p-6 bg-white dark:bg-gray-800 shadow-lg rounded-2xl">
        <CardContent className="flex flex-col items-center space-y-6">
          {currentQuestionIndex && currentQuestionIndex < QUIZ_LENGTH + 1 && (
            <Question />
          )}
          {currentQuestionIndex === QUIZ_LENGTH + 1 && <Result />}
          {!currentQuestionIndex && (
            <Button
              className="w-full py-3 text-lg font-semibold"
              onClick={() => {
                dispatch(fetchCharacters());
              }}
            >
              Play Now
            </Button>
          )}
        </CardContent>
      </Card>

      <Button
        variant="ghost"
        className="absolute top-6 right-6 p-3 rounded-full bg-gray-200 dark:bg-gray-700"
        onClick={() => {
          document.body.classList.toggle("dark");
          setIsDarkMode((prev) => !prev);
        }}
      >
        {isDarkMode ? <Moon size={24} /> : <Sun size={24} />}
      </Button>
    </div>
  );
}

export default App;
