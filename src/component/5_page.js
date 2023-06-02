import {Box,Typography,Button,Link} from '@mui/material';
import React, { useState } from "react";
import { useRef,useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import imageA from "../img/Organize_page.png";

export default function Fourth(){
    const refs=useRef([]);// ref는 배열로 관리
    const textRef=useRef();
    const imgRef = useRef();

    return(
        <Box sx={{ display:'flex',justifyContent:{xs:'center',md:'end'},alignItems:'center',flexDirection:'column',width:'100%',height:{xs:'100vh',md:'100%'}}}>
          <Box sx={{px:2,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <Box sx={{backgroundColor :'#899ED2',width:'80px',height:'25px',borderRadius:3,display:'flex',justifyContent:'center',alignItems:'center',mb:2}}>
              <Typography sx={{fontFamily:'SUIT Variable',fontWeight:"bold",color:'white'}}>
                정리
              </Typography>
            </Box>
            <Box sx={{pb:5,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                <Box sx={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                  <Box sx={{display:'flex'}}>
                    <Typography sx={{fontSize:{xs:28,md:50},fontFamily:"Adam Script" ,color :"#203A7B"}}>
                    Bundle
                    </Typography>
                    <Typography sx={{fontSize:{xs:28,md:50},fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                    &nbsp;이 여러분 대신
                    </Typography>
                  </Box>
                  <Typography sx={{fontSize:{xs:28,md:50},fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                    첫 포트폴리오를 만들어드려요
                  </Typography>
                </Box>
                <Box sx={{display:{xs:'flex',md:'none'},alignItems:'center',justifyContent:'center',flexDirection:'column'}}>
                  <Typography ref={(el)=>refs.current[0]=el} sx={{fontSize:{xs:18,md:25},fontFamily:'SUIT Variable',opacity:0,fontWeight:600}}>
                    작성한 커리어 기록을
                  </Typography>
                  <Typography ref={(el)=>refs.current[1]=el} sx={{fontSize:{xs:18,md:25},fontFamily:'SUIT Variable',opacity:0,fontWeight:600}}>
                    자동으로 정리해줘요
                  </Typography>
                </Box>
                <Box sx={{display:{xs:'none',md:'block'}}}>
                  <Typography ref={textRef} sx={{fontSize:{xs:15,md:25},fontFamily:'SUIT Variable',opacity:0,fontWeight:600}}>
                    작성한 커리어 기록을 자동으로 정리해줘요
                  </Typography>
                </Box>
            </Box>
            <Box
                ref={imgRef}
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