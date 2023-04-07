import {Box,Typography,Button,Link} from '@mui/material';
import React, { useState,useEffect,useRef } from "react";
import gsap from 'gsap';
import ReactTyped from "react-typed";
import ScrollTrigger from 'gsap/ScrollTrigger';

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
        <Box sx={{ width:'100%',backgroundColor:'#141414',height:{xs:'120vh',md:'150%'}}}>
          <Box sx={{px:2,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',pt:25}}>
            <Box sx={{pb:2,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                <Typography color="white" sx={{fontSize:50,fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                간단하게 작성하세요
                </Typography>
            </Box>
          </Box>
          <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Box sx={{display:'flex',flexDirection:'column'}}>
              <Box ref={(el)=>refs.current[0]=el} sx={{pb:1,opacity:0}}>
                <Typography color="white" sx={{fontSize:20,fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                  오늘 공부한 내용은 무엇인가요?
                </Typography>
              </Box>
              <Box ref={(el)=>refs.current[1]=el} sx={{border:1,borderColor:"white",width:400,height:200,display:'flex', fontFamily : 'SUIT Variable',fontWeight:"bold",opacity:0,borderRadius:5}}>
                <div 
                    style={{color:"white",padding:'10px',paddingLeft:'15px'}}>
                  <ReactTyped
                    strings={["Carrying Capacity의 개념", "SQL을 이용한 데이터분석", "SSR,CSR 개념"]}
                    typeSpeed={70}
                    backSpeed={40}
                    backDelay={1}
                    loop
                    smartBackspace
                  />
                </div>
              </Box>
            </Box>
          </Box>
      </Box>
    )
}