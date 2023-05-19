import React from 'react';
import { Fullpage, FullpageSection, FullPageSections, FullpageNavigation } from '@ap.cx/react-fullpage';
import First from './component/1_page';
import Second from './component/2_page';
import Third from './component/3_page';
import Fourth from './component/4_page';
import Fifth from './component/5_page';
import './App.css';


const FullPageScroll = () =>{
    const SectionStyle = {
        height:'100vh',
        width:'100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#141414',
        color:'white'
    }

    return(
        <Fullpage>
            <FullPageSections>
                <FullpageSection >
                    <First/>
                </FullpageSection>
                <FullpageSection >
                    <Second/>
                </FullpageSection>
                <FullpageSection>
                    <Third/>
                </FullpageSection>
                <FullpageSection>
                    <Fourth/>
                </FullpageSection>
                <FullpageSection>
                    <Fifth/>
                </FullpageSection>
            </FullPageSections>
        </Fullpage>
    );
}

export default FullPageScroll;