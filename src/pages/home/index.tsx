import React from 'react';
import Tabs from '../../components/Tabs/Tabs'
import useWindowDimensions from '../../utils/responsive/index'

import { Page } from '../../components/Page';
import { Box, makeStyles, Typography, Theme } from '@material-ui/core';
import logo from '../../static/img/table-truck-image.png'
import Principles from '../../components/Principles';

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


export const HomePage = (props: PageFormProps) => {
    const classes = useStyles();
    let windowDimensions = useWindowDimensions();
    return (
       <Page>
          <Principles/>
       </Page>
    );
};

export default HomePage;