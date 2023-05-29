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
        <Box sx={{ display:'flex',justifyContent:{xs:'center',md:'end'},alignItems:'center',flexDirection:'column',width:'100%',height:{xs:'100vh',md:'100%'}}}>
          <Box sx={{px:2,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <Box sx={{backgroundColor :'#899ED2',width:'80px',height:'25px',borderRadius:3,display:'flex',justifyContent:'center',alignItems:'center'}}>
              <Typography sx={{fontFamily:'SUIT Variable',fontWeight:"bold",color:'white'}}>
                정리
              </Typography>
            </Box>
            <Box sx={{pb:5,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                <Typography sx={{fontSize:{xs:35,md:50},fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                  BUNDLE 이 대신
                </Typography>
                <Typography sx={{fontSize:{xs:35,md:50},fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                  첫 포트폴리오를 만들어드려요
                </Typography>
                <Typography ref={textRef} sx={{fontSize:{xs:20,md:25},fontFamily:'SUIT Variable',opacity:0,fontWeight:600}}>
                  작성한 커리어 기록을 바탕으로 자동으로 정리해줘요
                </Typography>
            </Box>
            <Box
                ref={(el)=>refs.current[0]=el}
                component="img"
                sx={{
                  width: {xs:'350px',md:"80vh"},
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