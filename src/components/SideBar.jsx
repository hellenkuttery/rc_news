import { Box, Container } from "@mui/material";
import React from "react";
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const SideBar = () => {
  return (

    <Box sx={{
          bgcolor: '#2F3352'      
        }}>


    <Container>
   <p><AccountBalanceWalletIcon/> Dashboard</p> 
   <p><AddShoppingCartIcon/>  Dashboard</p>
    </Container>

  </Box>
)};

export default SideBar;
