import {Box,Typography,Button,Link} from '@mui/material';
import React, { useState } from "react";

export default function Fifth(){
    return(
        <Box sx={{ display:'flex',justifyContent:'center',alignItems:'center',width:'100%',backgroundColor:'#141414',height:{xs:'100vh',md:'100%'}}}>
          <Box sx={{px:2,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
            <Box sx={{pb:5,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                <Typography color="white" sx={{fontSize:50,fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                포트폴리오 관리
                </Typography>
                <Typography color="white" sx={{fontSize:50,fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                번들로부터
                </Typography>
                <Box sx={{pt:1, display:'flex',flexDirection:'column',alignItems:'center'}}>
                  <Typography color="white" sx={{fontSize:20,fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                  베타테스트 신청
                  </Typography>
                </Box>
                <Box sx={{pt:5}}>
                  <Button variant="contained" pill sx={{backgroundColor : "white", border:1,color:'white',borderRadius:8,width:200,height:60}}>
                    <Typography color="black" sx={{fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                        지금 시작하기
                    </Typography>
                  </Button>
                </Box>
            </Box>
          </Box>
        </Box>
    )
}