import {Box,Typography,Button,Link} from '@mui/material';
import React, { useState } from "react";
import { useRef,useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import "./page.css"
import imageA from "../img/portfolio.png";

export default function First(){
  const refs=useRef([]);// ref는 배열로 관리
  const imgref = useRef();
    useEffect(()=>{
      refs.current.forEach(function(textanimation,index){
        gsap.to(textanimation,2,{
            //메인페이지 렌더링 되자마자가 아니라 두번째 랜딩페이지로 오면 애니메이션 실행되도록
          delay:(index+1)*0.9,
          opacity:1
        })
      });
      gsap.to(imgref.current,2,{
        delay:0.9*2,
        opacity:1
      })

  },[])
    return(
      <Box  sx={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',backgroundColor:'#141414',height:{xs:'100vh',md:'100%'},pt:{xs:10,md:8},flexDirection:{xs:'column',md:'row'}}}>
        <Box sx={{display:'flex',justifyContent:'start',alignItems:{xs:'center',md:'start'},flexDirection:'column',pb:8}}>
          <Box sx={{pb:3,display:'flex',justifyContent:'center',alignItems:'start',flexDirection:'column'}}>
            <Box ref={(el)=>refs.current[0]=el} sx={{alignItems:'start',justifyContent:'start',display:'flex',flexDirection:'column',opacity:0}}>
              <Typography color="white" sx={{fontSize:{xs:30,md:50},fontFamily:'SUIT Variable',fontWeight:"bold"}}>
              대학생 커리어 관리
              </Typography>
              <Typography color="white" sx={{fontSize:{xs:30,md:50},fontFamily:'SUIT Variable',fontWeight:"bold"}}>
              번들에서 간편하게 
              </Typography>
            </Box>
            <Box ref={(el)=>refs.current[1]=el} sx={{pt:1, display:'flex',flexDirection:'column',alignItems:'start',opacity:0}}>
                <Typography color="white" sx={{fontSize:{xs:15,md:25},fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                  커리어 기록 정리, 번들이 알아서
                </Typography>
            </Box>
          </Box>
          <Box sx={{display:'flex',justifyContent:'start',alignItems:'start'}}>
            <Box sx ={{pt:2}}>
              <Button variant="contained" pill sx={{backgroundColor : "white", border:1,color:'white',borderRadius:8,width:{xs:170,md:200},height:{xs:40,md:60}}}>
                  <Typography color="black" sx={{fontFamily:'SUIT Variable',fontWeight:"bold",fontSize:{xs:20,md:25}}}>
                      무료로 시작하기
                  </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
        <Box sx = {{display:'flex',alignItems:{xs:'center',md:'flex-end'},justifyContent:'center',pb:10,pl:{xs:0,md:30}}}>
          <Box
          ref={imgref}
          component="img"
          sx={{
            width: {xs:'50vh',md:"80vh"},
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