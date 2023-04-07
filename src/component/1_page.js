import {Box,Typography,Button,Link} from '@mui/material';
import React, { useState } from "react";
import { useRef,useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import "./page.css"
import imageA from "../img/portfolio.png";

export default function First(){
  const refs=useRef([]);// ref는 배열로 관리
    useEffect(()=>{
      refs.current.forEach(function(textanimation,index){
        gsap.to(textanimation,2,{
            //메인페이지 렌더링 되자마자가 아니라 두번째 랜딩페이지로 오면 애니메이션 실행되도록
          delay:(index+1)*0.9,
          opacity:1
        })
      });


  },[])
    return(
        <Box sx={{ width:'100%',backgroundColor:'#141414',height:{xs:'120vh',md:'150%'}}}>
          <Box sx={{px:2,pb:5,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',pt:15}}>
              <Box ref={(el)=>refs.current[0]=el} sx={{alignItems:'center',justifyContent:'center',display:'flex',flexDirection:'column',opacity:0}}>
                <Typography color="white" sx={{fontSize:50,fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                간편한 포트폴리오,
                </Typography>
                <Typography color="white" sx={{fontSize:50,fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                커리어 관리를 더욱 쉽게
                </Typography>
              </Box>
              <Box ref={(el)=>refs.current[1]=el} sx={{pt:1, display:'flex',flexDirection:'column',alignItems:'center',opacity:0,pb:2}}>
                  <Typography color="white" sx={{fontSize:20,fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                  간단한 기록으로 완성되는
                  </Typography>
                  <Typography color="white" sx={{fontSize:20,fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                  개발자 포트폴리오
                  </Typography>
              </Box>
              <Box>
              <Box
                ref={(el)=>refs.current[2]=el}
                component="img"
                sx={{
                  height: "50vh",
                  opacity:0,
                  borderTopLeftRadius:15,
                  borderTopRightRadius:15
                }}
                alt="The house from the offer."
                src={imageA}
              />
              </Box>
          </Box>
        </Box>
    )
}