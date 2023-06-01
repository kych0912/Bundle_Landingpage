import {Box,Typography,Button,Link} from '@mui/material';
import React, { useState } from "react";
import "../Fonts/font.css";

export default function Fifth(){
    return(
        <Box sx={{ display:'flex',justifyContent:'center',alignItems:'center',width:'100%',backgroundColor:'#141414',height:{xs:'100vh',md:'100%'}}}>
          <Box sx={{px:2,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <Box sx={{pb:5,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                <Typography color="white" sx={{fontSize:{xs:30,md:50},fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                  휘발되는 커리어들
                </Typography>
                <Box sx={{display:'flex'}}>
                    <Typography sx={{fontSize:{xs:28,md:50},fontFamily:"Adam Script" ,color :"white"}}>
                      Bundle
                    </Typography>
                    <Typography color="white" sx={{fontSize:{xs:30,md:50},fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                    &nbsp;에서 관리하세요
                    </Typography>
                </Box>
                <Box sx={{pt:1, display:'flex',flexDirection:'column',alignItems:'center',flexDirection:'column'}}>
                  <Typography color="white" sx={{fontSize:{xs:15,md:20},fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                    베타테스터로 참여하세요
                  </Typography>
                  <Typography color="white" sx={{fontSize:{xs:15,md:20},fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                    ~6월 30일(금)까지
                  </Typography>
                </Box>
                <Box sx={{pt:2}}>
                  <Link underline="none" color="inherit" href="https://docs.google.com/forms/d/1Kf1Pq9w4QxSq_bOy7w_lLF2M9156Hza4Q3W-3p2zK1w/edit">
                    <Button variant="contained" color="inherit" sx={{borderRadius:8,width:200,height:60}}>
                      <Typography color="black" sx={{fontSize:{xs:15,md:20},fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                          지금 신청하기
                      </Typography>
                    </Button>
                  </Link>
                </Box>
            </Box>
          </Box>
        </Box>
    )
}