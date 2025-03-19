import { API_URL } from "@/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Result } from "./typings";

export const fetchCharacters = createAsyncThunk<Result[]>(
  "quiz/fetchCharacters",
  async () => {
    const res = await fetch(API_URL);
    const data = await res.json();
    return data.results;
  }
);
