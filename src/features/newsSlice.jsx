import { createSlice,createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"
const initialState = {
news:[],
}
export const getNews=createAsyncThunk(
  "getNewsFunc",  //action type name
  async()=>{

// const API_KEY=a033b4ca75b345d6959e331522c91ece
const url="https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}"
const {data}=await axios(url)
console.log(data);
  }
)

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    clearNews:(state)=>{
      state.news=[]
    }
  }
});

export const {} = newsSlice.actions

export default newsSlice.reducer