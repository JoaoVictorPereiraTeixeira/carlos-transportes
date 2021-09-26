// @flow 
import * as React from 'react';
import { Box, Container, makeStyles, Theme, Typography } from '@material-ui/core';



type PageProps = {
    
};


const useStyles = makeStyles((theme : Theme) => ({
    container:{
        marginTop:"100px"
    },
    backgroundHome:{
        // backgroundImage: `url(${backgroundHome})`,
        // background: 'black',
        display: "table",
        width: "100%",
        height: "100vh",
        padding:" 100px 0",
        color: "white",
        backgroundPosition:" 30% 45%",
        backgroundSize: "cover"
    }
  }))

export const Page: React.FC = (props) => {
    
    const classes = useStyles();

    return (
      <div>
        <Container>
            <Box>
                {props.children}
            </Box>
        </Container>
        
        </div>
    );
};