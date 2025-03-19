import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import "./App.css";
import { AppDispatch } from "./redux/store";
import { fetchCharacters } from "./redux/thunk";

function App() {
  const dispatch = useDispatch<AppDispatch>();
  return (
    <>
      <Button
        onClick={() => {
          dispatch(fetchCharacters());
        }}
      >
        Play Now
      </Button>
    </>
  );
}

export default App;
