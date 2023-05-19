import React, {useState, useEffect} from 'react';
import { styled, alpha, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import './navbar.css';
import Button from '@mui/material/Button';
import {Link} from "@mui/material";


export default function PrimarySearchAppBar() {

  return (
    <Box sx={{ flexGrow: 1, color:'white'}}>
      <AppBar width="100%" position="fixed" sx={{background:'#141414'}}>
        <Toolbar sx = {{height:70, size:30}}>
            <Link underline="none" color="inherit" href="/">
              <Typography
                  variant="h4"
                  noWrap
                  component="div"
                  color = "black"
                  sx={{ display: { xs: 'none', sm: 'block' },pr:5,fontSize:25,fontFamily:'SUIT Variable',fontWeight:"bold",color:'white'}}
              >
                Bundle
              </Typography>
            </Link>
            <Link underline="none" color="inherit" href="/">
              <Typography
                  variant="h4"
                  noWrap
                  component="div"
                  sx={{ display: { xs: 'block', sm: 'none' },pr:5,fontSize:25,fontFamily:'SUIT Variable',fontWeight:"bold",color:'white'}}
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
                    sx={{ display: { xs: 'block', sm: 'block' } ,pr:5,fontSize:25,fontFamily:'SUIT Variable',fontWeight:"bold",color:'white'}}
                >
                    Contact
                </Typography>
          <Link href="/Dashboard">
            <Button variant="contained" pill sx={{borderRadius:8}}>
                <Typography color="white" sx={{fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                    지금 시작하기
                </Typography>
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}