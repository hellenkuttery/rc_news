import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import { indigo } from '@mui/material/colors';
import { useDispatch,useSelector } from 'react-redux';
import { clearUser } from '../features/authSlice';

export default function ButtonAppBar() {
    const dispatch=useDispatch()
    const {user}=useSelector((state)=>state.auth)
    const handleLogOut=()=>{
        dispatch(clearUser())
        
    }
  return (
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="static"sx={{
          bgcolor: '#2F3352',
        
        }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2}}
            
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
        {user.email &&  <Button color="inherit" onClick={handleLogOut}>Logout</Button>}
        {!user.email &&  <Button color="inherit" >Login</Button>}
        </Toolbar>
      </AppBar>
    </Box>
  );
}