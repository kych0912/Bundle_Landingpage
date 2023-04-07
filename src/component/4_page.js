import {Box,Typography,Button,Link} from '@mui/material';
import React, { useState } from "react";
import { useRef,useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import imageA from "../img/portfolio.png";

export default function Fourth(){
    const refs=useRef([]);// ref는 배열로 관리
    const textRef=useRef();
    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);

       refs.current.forEach(function(textanimation,index){
        gsap.to(textanimation,1,{
            //메인페이지 렌더링 되자마자가 아니라 두번째 랜딩페이지로 오면 애니메이션 실행되도록
            scrollTrigger:refs.current[0],
          delay:1.8,
          opacity:1
        })
      });

      gsap.to(textRef.current,2,{
        scrollTrigger:refs.current[0],
      delay:1*0.6,
      opacity:1
    })

  },[])
    return(
        <Box sx={{ width:'100%',backgroundColor:'#141414',height:{xs:'120vh',md:'150%'}}}>
          <Box sx={{px:2,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',pt:25}}>
            <Box sx={{pb:5,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                <Typography ref={textRef} color="white" sx={{fontSize:50,fontFamily:'SUIT Variable',fontWeight:"bold",opacity:0}}>
                여기 포트폴리오
                </Typography>
            </Box>
            <Box
                ref={(el)=>refs.current[0]=el}
                component="img"
                sx={{
                  height: "55vh",
                  opacity:0,
                  borderTopLeftRadius:15,
                  borderTopRightRadius:15
                }}
                alt="The house from the offer."
                src={imageA}
              />
          </Box>
        </Box>
    )
}