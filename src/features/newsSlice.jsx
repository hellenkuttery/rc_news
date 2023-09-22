import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { getNews } from "./newsSlice";
const initialState = {
  news: [],
  loading:true,
  error:false
};
export const getNews = createAsyncThunk(
  "getNewsFunc", //action type name
  async () => {
    const API_KEY = "a033b4ca75b345d6959e331522c91ece";
    const url = "https://newsapi.org/v2/top-headlines?country=tr&apiKey=a033b4ca75b345d6959e331522c91ece";
    const { data } = await axios(url);
    console.log(data);
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    clearNews: (state) => {
      state.news = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      (getNews.pending,
      (state) => {
        state.loading = true;
      }))
      .addCase((getNews.fulfilled,(state,action)=>{
        state.news=action.payload
        state.loading = false;
      })
      )
    
  },
});

export const { clearNews } = newsSlice.actions;

export default newsSlice.reducer;
