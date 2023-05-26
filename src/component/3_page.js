import {Box,Typography,Button,Link} from '@mui/material';
import React, { useState } from "react";
import { useRef,useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import imageA from "../img/write.png";

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
        <Box sx={{ display:'flex',justifyContent:'flex-end',alignItems:'center',flexDirection:'column',width:'100%',height:{xs:'100vh',md:'100%'}}}>
          <Box sx={{px:2,display:'flex',justifyContent:'flex-end',alignItems:'center',flexDirection:'column'}}>
            <Box sx={{pb:5,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                <Typography sx={{fontSize:50,fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                 막막한 커리어 기록
                </Typography>
                <Typography sx={{fontSize:50,fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                  양식에다 작성하세요
                </Typography>
                <Typography ref={textRef} sx={{fontSize:25,fontFamily:'SUIT Variable',opacity:0,fontWeight:600}}>
                  기록 양식이 제공되어 기록에 대한 고민이 없게
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