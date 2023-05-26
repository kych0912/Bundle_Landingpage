import {Box,Typography,Button,Link} from '@mui/material';
import React, { useState,useEffect,useRef } from "react";
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {Card,Grid,Paper} from '@mui/material';
import confusion from '../img/problem_img/confusion.png';
import files from '../img/problem_img/files.png';
import laptop from '../img/problem_img/laptop.png';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";


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
        <Box sx={{ width:'100%',backgroundColor:'#202020',height:{xs:'100vh',md:'100%'}}}>
          <Box sx={{px:2,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',pt:{xs:25,md:25}}}>
            <Box sx={{pb:2,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                <Typography color="white" sx={{fontSize:{xs:30,md:50},fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                  어려운 커리어 정리
                </Typography>
                <Typography color="white" sx={{fontSize:{xs:30,md:50},fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                  휘발되는 커리어
                </Typography>
            </Box>
          </Box>
          <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>
            <Box sx={{display:'flex',flexDirection:'column'}}>
                <Typography color="white" sx={{fontSize:{xs:15,md:20},fontFamily:'SUIT Variable'}}>
                정리하지 않으면 놓치기 쉬운 기록들
                </Typography>
            </Box>
          </Box>
          <Box sx={{display:{ xs: 'flex', md: 'none' },pt:10,justifyContent:'center',alignItems:'center'}}>
            <Swiper navigation={true} modules={[Navigation]}>
              <SwiperSlide>
                <Box >
                  <Card sx={{width:'300px',height:'200px',display:'flex',justifyContent:'center',alignItems:'start',borderRadius:3,backgroundColor:'#343434',flexDirection:'column'}}>
                    <Typography color="white" sx={{fontSize:20,fontFamily:'SUIT Variable',fontWeight:600,pl:3}}>
                      그 자료 어딨더라...
                    </Typography>
                    <Typography color="white" sx={{fontSize:15,fontFamily:'SUIT Variable',fontWeight:400,pl:3}}>
                      커리어 정리가 어려워요
                    </Typography>
                    <Box
                    ref={(el)=>refs.current[0]=el}
                    component="img"
                    sx={{
                      height: "110px",
                      pl:25
                    }}
                    alt="The house from the offer."
                    src={files}
                  />
                  </Card>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box sx={{}}>
                  <Card sx={{width:'300px',height:'200px',display:'flex',justifyContent:'center',alignItems:'start',borderRadius:3,backgroundColor:'#343434',flexDirection:'column'}}>
                    <Typography color="white" sx={{fontSize:20,fontFamily:'SUIT Variable',fontWeight:600,pl:3}}>
                      내가 뭘 했었지...
                    </Typography>
                    <Typography color="white" sx={{fontSize:15,fontFamily:'SUIT Variable',fontWeight:400,pl:3}}>
                      정리를 안해놔서 까먹어요
                    </Typography>
                      <Box
                      ref={(el)=>refs.current[0]=el}
                      component="img"
                      sx={{
                        height: "110px",
                        pl:22
                      }}
                      alt="The house from the offer."
                      src={confusion}
                    />
                  </Card>
                </Box>
              </SwiperSlide>
              <SwiperSlide>
                <Box sx={{}}>
                  <Card sx={{width:'300px',height:'200px',display:'flex',justifyContent:'center',alignItems:'start',borderRadius:3,backgroundColor:'#343434',flexDirection:'column'}}>
                    <Typography color="white" sx={{fontSize:20,fontFamily:'SUIT Variable',fontWeight:600,pl:3}}>
                      뭐라고 써야하지...
                    </Typography>
                    <Typography color="white" sx={{fontSize:15,fontFamily:'SUIT Variable',fontWeight:400,pl:3}}>
                      활동을 기록할 때 막막해요
                    </Typography>
                    <Box
                    ref={(el)=>refs.current[0]=el}
                    component="img"
                    sx={{
                      height: "110px",
                      pl:18
                    }}
                    alt="The house from the offer."
                    src={laptop}
                    />
                  </Card>
                </Box>
              </SwiperSlide>
            </Swiper>
          </Box>
          <Box sx ={{display:{xs:'none',md:'flex'},justifyContent:'center',alignItems:'center',pt:10}}>
            <Box sx={{pr:5}}>
              <Card sx={{width:'300px',height:'200px',display:'flex',justifyContent:'center',alignItems:'start',borderRadius:3,backgroundColor:'#343434',flexDirection:'column'}}>
                <Typography color="white" sx={{fontSize:20,fontFamily:'SUIT Variable',fontWeight:600,pl:3}}>
                  그 자료 어딨더라...
                </Typography>
                <Typography color="white" sx={{fontSize:15,fontFamily:'SUIT Variable',fontWeight:400,pl:3}}>
                  커리어 정리가 어려워요
                </Typography>
                <Box
                ref={(el)=>refs.current[0]=el}
                component="img"
                sx={{
                  height: "110px",
                  pl:25
                }}
                alt="The house from the offer."
                src={files}
              />
              </Card>
            </Box>
            <Box sx={{pr:5}}>
              <Card sx={{width:'300px',height:'200px',display:'flex',justifyContent:'center',alignItems:'start',borderRadius:3,backgroundColor:'#343434',flexDirection:'column'}}>
                <Typography color="white" sx={{fontSize:20,fontFamily:'SUIT Variable',fontWeight:600,pl:3}}>
                  내가 뭘 했었지...
                </Typography>
                <Typography color="white" sx={{fontSize:15,fontFamily:'SUIT Variable',fontWeight:400,pl:3}}>
                  정리를 안해놔서 까먹어요
                </Typography>
                  <Box
                  ref={(el)=>refs.current[0]=el}
                  component="img"
                  sx={{
                    height: "110px",
                    pl:22
                  }}
                  alt="The house from the offer."
                  src={confusion}
                />
              </Card>
            </Box>
            <Box sx={{}}>
              <Card sx={{width:'300px',height:'200px',display:'flex',justifyContent:'center',alignItems:'start',borderRadius:3,backgroundColor:'#343434',flexDirection:'column'}}>
                <Typography color="white" sx={{fontSize:20,fontFamily:'SUIT Variable',fontWeight:600,pl:3}}>
                  뭐라고 써야하지...
                </Typography>
                <Typography color="white" sx={{fontSize:15,fontFamily:'SUIT Variable',fontWeight:400,pl:3}}>
                  활동을 기록할 때 막막해요
                </Typography>
                <Box
                ref={(el)=>refs.current[0]=el}
                component="img"
                sx={{
                  height: "110px",
                  pl:18
                }}
                alt="The house from the offer."
                src={laptop}
              />
              </Card>
            </Box>
          </Box>
        </Box>
    )
}