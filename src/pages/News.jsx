import { React,useEffect} from "react";
import Box from "@mui/system/Box";
import Grid from "@mui/system/Unstable_Grid";
import styled from "@mui/system/styled";
import { useDispatch } from "react-redux";
import Navbar from "../components/Navbar";
import { getNews } from "../features/newsSlice";

const Item = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  border: "1px solid",
  borderColor: theme.palette.mode === "dark" ? "#444d58" : "#ced7e0",
  padding: theme.spacing(1),
  borderRadius: "4px",
  textAlign: "center",
}));

export default function News() {
  const dispatch=useDispatch()
  useEffect(() => {
  dispatch(getNews())  

  }, [])
  
  return (
    <Box>
      <Grid container>
        {/* <Grid xs={3} md={3}>
          <SideBar />
        </Grid> */}
        
          <Navbar />
      <p>News</p>
      </Grid>
    </Box>
  );
}
