import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "./store";

export const selectScore = (state: RootState) => state.quiz.score;

export const selectCurrentQuestionIndex = (state: RootState) =>
  state.quiz.currentQuestionIndex;

export const selectQuestions = (state: RootState) => state.quiz.questions;

export const selectCurrentQuestion = createSelector(
  selectCurrentQuestionIndex,
  selectQuestions,
  (currentIndex, questions) => {
    if (currentIndex !== null) {
      return questions[currentIndex - 1];
    }
    return { image: "", correct: "", options: [] };
  }
);
