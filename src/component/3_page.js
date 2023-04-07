import {Box,Typography,Button,Link} from '@mui/material';
import React, { useState } from "react";

export default function Third(){
    return(
        <Box sx={{ width:'100%',backgroundColor:'#141414',height:{xs:'120vh',md:'150%'}}}>
          <Box sx={{px:2,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',pt:25}}>
            <Box sx={{pb:5,display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
                <Typography color="white" sx={{fontSize:50,fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                기록들이 모여
                </Typography>
                <Typography color="white" sx={{fontSize:50,fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                간편한 포트폴리오 관리
                </Typography>
            </Box>
          </Box>
        </Box>
    )
}