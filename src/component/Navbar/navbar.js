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
import Drawer from './drawer';
import logo from "../../img/bundle_logo.png"
import white_logo from "../../img/logo_white.png"


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
      <AppBar width="100%" position="fixed" color = {scrollPosition > 1200 ? '': 'transparent'} elevation={0} sx={{opacity: scrollPosition > 3200 ? 0 : 1}} >
        <Toolbar sx = {{height:70, size:30}}>
            <Link underline="none" color="inherit" href="/">
              <Box
                component="img"
                sx={{
                  width:'100px'
                }}
                alt="The house from the offer."
                src={scrollPosition > 1200 ? logo: white_logo}
              />
            </Link>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{display: { xs: 'none', md: 'flex' },justifyContent:'center',alignItems:'center'}}>
            <Link underline="none" color="inherit" href="/">
              <Typography
                        variant="h4"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'block', sm: 'block' },pr:4,fontSize:20,fontFamily:'SUIT Variable', borderRight: 1 }}
                    >
                        홈
              </Typography>
            </Link>
            <Link underline="none" color="inherit" href="/">
              <Typography
                        variant="h4"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'block', sm: 'block' },pr:4,pl:4,fontSize:20,fontFamily:'SUIT Variable', borderRight: 1 }}
                    >
                        팀 소개
              </Typography>
            </Link>
            <Link underline="none" color="inherit" href="/">
              <Typography
                        variant="h4"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'block', sm: 'block' } ,pl:4,pr:5,fontSize:20,fontFamily:'SUIT Variable'}}
                    >
                        문의하기
              </Typography>
            </Link>
            <Link href="/Dashboard">
              <Button variant="contained" pill sx={{borderRadius:8,backgroundColor: scrollPosition > 1200 ? "black": "white"}}>
                  <Typography sx={{fontFamily:'SUIT Variable',fontWeight:"bold",color: scrollPosition > 1200 ? "white": "black"}}>
                      지금 시작하기
                  </Typography>
              </Button>
            </Link>
          </Box>

          <Box sx={{display:{xs:'flex',md:'none'}}}>
            <Drawer/>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}