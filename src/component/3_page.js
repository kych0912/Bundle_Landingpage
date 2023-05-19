import {Box,Typography,Button,Link} from '@mui/material';
import React, { useState } from "react";
import imageA from "../img/portfolio.png"
import imageB from "../img/detail.png"

export default function Third(){
    return(
        <Box sx={{ width:'100%',backgroundColor:'#141414',height:{xs:'100vh',md:'100%'}}}>
          <Box>
            <Box sx={{px:2,display:'flex',justifyContent:'center',alignItems:'center',pt:20}}>
                <Box sx={{pb:5,display:'flex',justifyContent:'start',alignItems:'start',flexDirection:'column',pr:10}}>
                    <Typography color="white" sx={{fontSize:50,fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                      기록만 하세요
                    </Typography>
                    <Typography color="white" sx={{fontSize:50,fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                      정리해서 보여드릴게요
                    </Typography>
                </Box>
                <Box sx={{pl:10}}>
                  <Box
                  component="img"
                  sx={{
                    width: {xs:'50vh',md:"60vh"},
                    borderTopLeftRadius:15,
                    borderTopRightRadius:15
                  }}
                  alt="The house from the offer."
                  src={imageB}
                  />
                </Box>
            </Box>
          </Box>
          <Box>
            <Box sx={{px:2,display:'flex',justifyContent:'center',alignItems:'center'}}>
              <Box sx={{pr:10}}>
                <Box
                  component="img"
                  sx={{
                    width: {xs:'50vh',md:"60vh"},
                    borderTopLeftRadius:15,
                    borderTopRightRadius:15
                  }}
                  alt="The house from the offer."
                  src={imageA}
                  />
              </Box>
              <Box sx={{pb:5,display:'flex',justifyContent:'start',alignItems:'start',flexDirection:'column',pl:10}}>
                  <Typography color="white" sx={{fontSize:50,fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                    기록들이 정리되어
                  </Typography>
                  <Typography color="white" sx={{fontSize:50,fontFamily:'SUIT Variable',fontWeight:"bold"}}>
                    한번에 확인 가능
                  </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
    )
}