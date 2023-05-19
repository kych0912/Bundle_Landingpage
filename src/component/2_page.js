import {Box,Typography,Button,Link} from '@mui/material';
import React, { useState,useEffect,useRef } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import imageA from "../img/image20.png"

export default function Second(){
  const refs = useRef([]);

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger);
    refs.current.forEach(function(textanimation,index){
      gsap.to(textanimation,1,{
          //메인페이지 렌더링 되자마자가 아니라 두번째 랜딩페이지로 오면 애니메이션 실행되도록
          scrollTrigger:refs.current[0],
        delay:(index+1)*1,
        opacity:1
      })
    });
  },[])

    return(
        <Box sx={{ width:'100%',backgroundColor:'#141414',height:{xs:'100vh',md:'100%'}}}>
          <Box sx={{px:2,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',pt:20}}>
            <Box sx={{pb:2,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                <Typography color="white" sx={{fontSize:60,fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                정리하기 어려운
                </Typography>
                <Typography color="white" sx={{fontSize:60,fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                커리어 기록들
                </Typography>
            </Box>
          </Box>
          <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Box sx={{display:'flex',flexDirection:'column'}}>
                <Typography color="white" sx={{fontSize:25,fontFamily:'SUIT Variable'}}>
                정리하지 않으면 놓치기 쉬운 기록들
                </Typography>
            </Box>
          </Box>
          <Box sx ={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Box
            component="img"
            sx={{
              width: {xs:'50vh',md:"90vh"},
              borderTopLeftRadius:15,
              borderTopRightRadius:15,
              pt:10
            }}
            alt="The house from the offer."
            src={imageA}
            />
          </Box>
      </Box>
    )
}