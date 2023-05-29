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
import {Link,Divider} from "@mui/material";


export default function PrimarySearchAppBar() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    console.log(scrollPosition);
  }
  useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });
  return (
    <Box sx={{ flexGrow: 1, color:'white'}}>
      <AppBar width="100%" position="fixed" color = {scrollPosition > 1200 ? '': 'transparent'} elevation={0} sx={{opacity: scrollPosition > {xs:3800,md:3200} ? 0 : 1}} >
        <Toolbar sx = {{height:70, size:30}}>
            <Link underline="none" color="inherit" href="/">
              <Typography
                  variant="h4"
                  noWrap
                  component="div"
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
                    sx={{ display: { xs: 'block', sm: 'block' },pr:4,fontSize:20,fontFamily:'SUIT Variable', borderRight: 1 }}
                >
                    홈
          </Typography>
          <Typography
                    variant="h4"
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'block', sm: 'block' },pr:4,pl:4,fontSize:20,fontFamily:'SUIT Variable', borderRight: 1 }}
                >
                    자주하는 질문
          </Typography>
          <Typography
                    variant="h4"
                    noWrap
                    component="div"
                    sx={{ display: { xs: 'block', sm: 'block' } ,pl:4,pr:5,fontSize:20,fontFamily:'SUIT Variable'}}
                >
                    문의하기
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