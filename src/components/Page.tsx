// @flow 
import * as React from 'react';
import { Box, Container} from '@material-ui/core';
import { Navbar } from './Navbar';
import Footer from './Footer';


export const Page: React.FC = (props) => {
    return (
        <div>
            <Navbar/>
            <Container>
                <Box>
                    {props.children}
                </Box>
            </Container>
            <Footer/>
        </div>
    );
};