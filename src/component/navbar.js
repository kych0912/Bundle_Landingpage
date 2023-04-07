import React, {useState, useEffect} from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import './navbar.css';
import Button from '@mui/material/Button';
import { Link } from '@mui/material';

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {

  return (
    <Box sx={{ flexGrow: 1, color:'white'}}>
      <AppBar width="100%" position="fixed" sx={{background:'white'}}>
        <Toolbar sx = {{height:70, size:30}}>
            <Link underline="none" color="inherit" href="/">
              <Typography
                  variant="h4"
                  noWrap
                  component="div"
                  color = "black"
                  sx={{ display: { xs: 'none', sm: 'block' },pr:5,fontSize:25,fontFamily:'SUIT Variable',fontWeight:"bold"}}
              >
                Bundle
              </Typography>
            </Link>
            <Link underline="none" color="inherit" href="/">
              <Typography
                  variant="h4"
                  noWrap
                  component="div"
                  sx={{ display: { xs: 'block', sm: 'none' },pr:5,fontSize:25,fontFamily:'SUIT Variable',fontWeight:"bold"}}
              >
                  Bundle
              </Typography>
            </Link>

          <Box sx={{ flexGrow: 1 }} />
          <Typography
                    variant="h4"
                    noWrap
                    component="div"
                    color = "black"
                    sx={{ display: { xs: 'block', sm: 'block' } ,pr:5,fontSize:25,fontFamily:'SUIT Variable',fontWeight:"bold"}}
                >
                    Contact
                </Typography>
          <Button variant="contained" pill sx={{backgroundColor : "black", border:1,color:'black',borderRadius:8}}>
              <Typography color="white" sx={{fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                  GET START
              </Typography>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}