import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { Typography } from '@mui/material';
import {AiOutlineMenu} from 'react-icons/ai'
import {Link} from '@mui/material';

const link = ['/','https://bundleportfolio.notion.site/WE-ARE-BUNDLE-1b79ec95b9604014b5497d49707e0ebd','http://pf.kakao.com/_yeryxj/chat','https://docs.google.com/forms/d/1Kf1Pq9w4QxSq_bOy7w_lLF2M9156Hza4Q3W-3p2zK1w/edit'];

export default function TemporaryDrawer() {

    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(()=>{
        window.addEventListener('scroll', updateScroll);
    });

    const [state, setState] = React.useState({
        'top': false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
        sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
        >
        <List sx={{backgroundColor:"white"}}>
            {['홈', '팀 소개', '문의하기','지금 신청하기'].map((text, index) => (
            <ListItem key={text} disablePadding>
                <ListItemButton >
                    <Link underline="none" color="inherit" sx={{width:"100%"}} href={link[index]}>
                        <Typography
                            variant="h4"
                            noWrap
                            component="div"
                            color ="black"
                            sx={{ display: { xs: 'block', sm: 'block' },fontSize:25,fontFamily:'SUIT Variable',fontWeight:"bold",width:'100%'}}
                        >
                            {text}
                        </Typography>
                    </Link>
                </ListItemButton>
            </ListItem>
            ))}
        </List>
        </Box>
    );

  return (
    <div>
        <React.Fragment key={'top'}>
            <Button onClick={toggleDrawer('top', true)}>
                <AiOutlineMenu size ='27' color={scrollPosition > 1200 ? 'black': 'white'}/>
            </Button>
            <Drawer
            anchor={'top'}
            open={state['top']}
            onClose={toggleDrawer('top', false)}
            >
            {list('top')}
            </Drawer>
        </React.Fragment>
    </div>
  );
}