import { QUIZ_LENGTH } from "@/constants";
import {
  fetchIncorrectChoices,
  reshuffleQuestions,
  shuffler,
} from "@/utils/shuffler";
import { createSlice } from "@reduxjs/toolkit";
import { fetchCharacters } from "./thunk";
import { QuizState, Result } from "./typings";

const initialState: QuizState = {
  fetchedQuestions: [],
  questions: [],
  status: "idle",
  score: 0,
  currentQuestionIndex: null,
};

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    playNow(state) {
      state.currentQuestionIndex = 1;
    },
    nextQuestion(state, action) {
      const { payload } = action;

      if (payload === true) {
        state.score = state.score + (1 / QUIZ_LENGTH) * 100;
      }

      if (
        state.currentQuestionIndex &&
        state.currentQuestionIndex < QUIZ_LENGTH + 1
      ) {
        state.currentQuestionIndex += 1;
      } else {
        state.currentQuestionIndex = null;
      }
    },
    playAgain(state) {
      state.status = initialState.status;
      state.score = initialState.score;
      state.currentQuestionIndex = 1;

      if (state.fetchedQuestions.length > 0) {
        state.questions = reshuffleQuestions(state.fetchedQuestions);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.fetchedQuestions = action.payload;
        state.currentQuestionIndex = 1;

        const shuffled = shuffler(action.payload, QUIZ_LENGTH);

        state.questions = shuffled.map((character: Result) => {
          const incorrect = fetchIncorrectChoices(action.payload, character.id);

          return {
            image: character.image,
            correct: character.name,
            options: [...incorrect, character.name].sort(
              () => 0.5 - Math.random()
            ),
          };
        });
      })
      .addCase(fetchCharacters.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { playNow, nextQuestion, playAgain } = quizSlice.actions;
export default quizSlice.reducer;
