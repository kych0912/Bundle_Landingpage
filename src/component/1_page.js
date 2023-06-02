import {Box,Typography,Button,Link} from '@mui/material';
import React, { useState } from "react";
import { useRef,useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import "./page.css"
import imageA from "../img/Main_page.png";
import MainImage from "../img/bundle_bg.jpg"

export default function First(){
  
    return(
      <Box  sx={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',backgroundColor:'#141414',height:{xs:'100vh',md:'100%'},pt:{xs:5,md:8},flexDirection:{xs:'column',md:'row'},backgroundImage:`url(${MainImage})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'top center'}}>
        <Box sx={{display:'flex',justifyContent:'start',alignItems:{xs:'center',md:'start'},flexDirection:'column',pb:{xs:10,md:8}}}>
          <Box sx={{pb:1,display:'flex',justifyContent:'center',alignItems:{xs:'center',md:'start'},flexDirection:'column'}}>
            <Box sx={{alignItems:{xs:'center',md:'start'},justifyContent:'start',display:'flex',flexDirection:'column',opacity:0}}>
              <Typography color="white" sx={{fontSize:{xs:15,md:20},fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                커리어 정리가 어려울 때
              </Typography>
              <Typography color="white" sx={{fontSize:{xs:35,md:50},fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                내 커리어로 만드는
              </Typography>
              <Typography color="white" sx={{fontSize:{xs:35,md:50},fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                나의 첫번째 포트폴리오 
              </Typography>
            </Box>
            <Box sx={{ display:'flex',flexDirection:'column',alignItems:'start',opacity:0}}>
                <Typography color="white" sx={{fontSize:{xs:15,md:20},fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                  혼자서는 막막한 포트폴리오, 대신 만들어드립니다.
                </Typography>
            </Box>
          </Box>
          <Box sx={{display:'flex',justifyContent:'start',alignItems:'start'}}>
            <Box x ={{pt:2,opacity:0}}>
              <Button variant="contained" color="inherit" sx={{borderRadius:3,width:{xs:170,md:220},height:{xs:40,md:60}}}>
                  <Typography color="black" sx={{fontFamily:'SUIT Variable',fontWeight:"bold",fontSize:{xs:20,md:25}}}>
                      베타테스트 신청
                  </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
        <Box sx = {{display:'flex',alignItems:{xs:'center',md:'flex-end'},justifyContent:'center',pb:10,pl:{xs:0,md:25}}}>
          <Box
          component="img"
          sx={{
            width: {xs:'350px',md:"90vh"},
            opacity:0,
            
          }}
          src={imageA}
          />
        </Box>
       
      </Box>
    )
}