import {Box,Typography,Button,Link} from '@mui/material';
import React, { useState } from "react";
import { useRef,useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import imageA from "../img/Write_page.png";

export default function Fourth(){
    const refs=useRef([]);// ref는 배열로 관리
    const textRef=useRef();
  
    return(
        <Box sx={{ display:'flex',justifyContent:{xs:'center',md:'end'},alignItems:'center',flexDirection:'column',width:'100%',height:{xs:'100vh',md:'100%'}}}>
          <Box sx={{px:2,display:'flex',justifyContent:'start',alignItems:'center',flexDirection:'column'}}>
            <Box sx={{backgroundColor :'#899ED2',width:'80px',height:'25px',borderRadius:3,display:'flex',justifyContent:'center',alignItems:'center',mb:2}}>
              <Typography sx={{fontFamily:'SUIT Variable',fontWeight:"bold",color:'white'}}>
                기록
              </Typography>
            </Box>
            <Box sx={{pb:5,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                <Typography sx={{fontSize:{xs:28,md:50},fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                 막막한 커리어 기록
                </Typography>
                <Typography sx={{fontSize:{xs:28,md:50},fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                  양식에 작성하세요
                </Typography>
                <Typography ref={textRef} sx={{fontSize:{xs:15,md:25},fontFamily:'SUIT Variable',fontWeight:600}}>
                  기록 양식이 제공되어 기록에 대한 고민이 없게
                </Typography>
            </Box>
            <Box
                ref={(el)=>refs.current[0]=el}
                component="img"
                sx={{
                  width: {xs:'350px',md:"70vh"},
                  borderRadius:3
                }}
                alt="The house from the offer."
                src={imageA}
              />
          </Box>
        </Box>
    )
}