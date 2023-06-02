import {Box,Typography,Button,Link} from '@mui/material';
import React, { useState } from "react";
import { useRef,useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import imageA from "../img/Detail_page.png";
import "../Fonts/font.css";

export default function Fourth(){
    const refs=useRef([]);// ref는 배열로 관리
    const textRef=useRef();
    
    return(
        <Box sx={{ display:'flex',justifyContent:{xs:'center',md:'end'},alignItems:'center',flexDirection:'column',width:'100%',height:{xs:'100vh',md:'100%'}}}>
          <Box sx={{px:2,display:'flex',justifyContent:'flex-end',alignItems:'center',flexDirection:'column'}}>
          <Box sx={{backgroundColor :'#899ED2',width:'80px',height:'25px',borderRadius:3,display:'flex',justifyContent:'center',alignItems:'center',mb:2}}>
              <Typography sx={{fontFamily:'SUIT Variable',fontWeight:"bold",color:'white'}}>
                데이터
              </Typography>
            </Box>
            <Box sx={{pb:5,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                <Typography sx={{fontSize:{xs:28,md:50},fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                  기억하기 어려운 세부내용
                </Typography>
                <Box sx={{display:'flex'}}>
                  <Typography sx={{fontSize:{xs:28,md:50},fontFamily:"Adam Script" ,color :"#203A7B"}}>
                  Bundle
                  </Typography>
                  <Typography sx={{fontSize:{xs:28,md:50},fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                  &nbsp;에 다 있어요
                  </Typography>
                </Box>
                <Typography ref={textRef} sx={{fontSize:{xs:15,md:25},fontFamily:'SUIT Variable',opacity:0,fontWeight:600}}>
                  활동기록, 배운 점 등 모든 기록이 여기에 있어요
                </Typography>
            </Box>
            <Box
                ref={(el)=>refs.current[0]=el}
                component="img"
                sx={{
                  width: {xs:'350px',md:"70vh"},
                  opacity:0,
                  borderRadius:3
                }}
                alt="The house from the offer."
                src={imageA}
              />
          </Box>
        </Box>
    )
}