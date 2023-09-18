import Login from "../src/pages/Login";
import { ThemeProvider, createTheme } from "@mui/material";
import { purple } from '@mui/material/colors';
import {Provider} from "react-redux"
import {store} from "./app/store"

import AppRouter from './router/AppRouter';

function App() {
const theme=createTheme({
  palette:{
    primary:{
      main:purple[500]
    },
    secondary:{
      main:"#7367F0"
    }
  }
})


  return (
    <Provider store={store}>
         <ThemeProvider theme={theme}>
             < AppRouter/>
    </ThemeProvider>
    </Provider>
 
  );
}

export default App;
