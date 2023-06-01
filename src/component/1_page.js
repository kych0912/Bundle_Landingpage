import {Box,Typography,Button,Link} from '@mui/material';
import React, { useState } from "react";
import { useRef,useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import "./page.css"
import imageA from "../img/Main_page.png";
import MainImage from "../img/bundle_bg.jpg"

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
      <Box  sx={{display:'flex',justifyContent:'center',alignItems:'center',width:'100%',backgroundColor:'#141414',height:{xs:'100vh',md:'100%'},pt:{xs:5,md:8},flexDirection:{xs:'column',md:'row'},backgroundImage:`url(${MainImage})`,backgroundRepeat:'no-repeat',backgroundSize:'cover',backgroundPosition:'top center'}}>
        <Box sx={{display:'flex',justifyContent:'start',alignItems:{xs:'center',md:'start'},flexDirection:'column',pb:{xs:10,md:8}}}>
          <Box sx={{pb:1,display:'flex',justifyContent:'center',alignItems:{xs:'center',md:'start'},flexDirection:'column'}}>
            <Box ref={(el)=>refs.current[0]=el} sx={{alignItems:{xs:'center',md:'start'},justifyContent:'start',display:'flex',flexDirection:'column',opacity:0}}>
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
            <Box ref={(el)=>refs.current[1]=el} sx={{ display:'flex',flexDirection:'column',alignItems:'start',opacity:0}}>
                <Typography color="white" sx={{fontSize:{xs:15,md:20},fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                  혼자서는 막막한 포트폴리오, 대신 만들어드립니다.
                </Typography>
            </Box>
          </Box>
          <Box sx={{display:'flex',justifyContent:'start',alignItems:'start'}}>
            <Box ref={(el)=>refs.current[2]=el} sx ={{pt:2,opacity:0}}>
              <Button variant="contained" color="inherit" sx={{borderRadius:3,width:{xs:170,md:200},height:{xs:40,md:60}}}>
                  <Typography color="black" sx={{fontFamily:'SUIT Variable',fontWeight:"bold",fontSize:{xs:20,md:25}}}>
                      베타테스트 신청
                  </Typography>
              </Button>
            </Box>
          </Box>
        </Box>
        <Box sx = {{display:'flex',alignItems:{xs:'center',md:'flex-end'},justifyContent:'center',pb:10,pl:{xs:0,md:25}}}>
          <Box
          ref={imgref}
          component="img"
          sx={{
            width: {xs:'350px',md:"90vh"},
            opacity:0,
            borderRadius:5
          }}
          src={imageA}
          />
        </Box>
       
      </Box>
    )
}