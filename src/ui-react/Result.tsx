import { Button } from "@/components/ui/button";
import { playAgain } from "@/redux/slice";
import { useDispatch, useSelector } from "react-redux";
import { selectScore } from "./../redux/selectors";

function Result() {
  const dispatch = useDispatch();
  const score = useSelector(selectScore);

  return (
    <div>
      <div>FINAL SCORE {score}%</div>
      <Button
        onClick={() => {
          dispatch(playAgain());
        }}
      >
        Play Again
      </Button>
    </div>
  );
}

export default Result;
