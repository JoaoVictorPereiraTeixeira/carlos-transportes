import React from 'react';
import Tabs from '../../components/Tabs/Tabs'
import useWindowDimensions from '../../utils/responsive/index'

import { Page } from '../../components/Page';
import { Box, makeStyles, Typography, Theme } from '@material-ui/core';
import logo from '../../static/img/table-truck-image.png'

interface PageFormProps {
    
};

const useStyles = makeStyles((theme : Theme) => ({
    logo:{
        paddingTop:4,
        width: 120
    },
    tabTruck:{
      grow:1,
      position:'relative',
      top:65,
      left: 20
    }
}));

export const PageForm = (props: PageFormProps) => {
    const classes = useStyles();
    let windowDimensions = useWindowDimensions();
    return (
       <Page>
           <Box>
                {windowDimensions.width > 780 ? 
                (
                    <Typography align="right" className={classes.tabTruck}>
                        <img src={logo} alt="Carlos Transportes" className={classes.logo}/>
                    </Typography>                    
                ) : ("")}
                <Tabs/>
                
           </Box>
       </Page>
    );
};

export default PageForm;