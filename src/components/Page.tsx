// @flow 
import * as React from 'react';
import { Box, Container, makeStyles, Typography } from '@material-ui/core';


const useStyles = makeStyles({
    title:{
        color: '#999999'
    }
});

type PageProps = {
    
};

export const Page: React.FC = (props) => {
    const classes = useStyles();

    return (
       <Container>
           <Box >
               {props.children}
           </Box>
       </Container>
    );
};