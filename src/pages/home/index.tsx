
import { Page } from '../../components/Page';
import { Box, makeStyles, Typography, Theme, Container } from '@material-ui/core';
import Principles from '../../components/Principles';
import Modalities from '../../components/Modalities';
import LogoHome from '../../components/LogoHome';
import backgroundHomeExtraBig from '../../static/img/backgroundHome5K.jpg'
import backgroundHomeBig from '../../static/img/backgroundHomeBig.jpg'
import backgroundHomeMedium from '../../static/img/backgroundHomeMedium.jpg'
import backgroundHomeSmall from '../../static/img/backgroundHomeSmall.jpg'

import useWindowDimensions from '../../utils/responsive/index'
import WhoIAm from '../../components/WhoIAm';
import Feedback from '../../components/Feedback';
import { isAbsolute } from 'path';

interface PageFormProps {
    
};


const useStyles = makeStyles((theme : Theme) => ({
    container:{
        marginTop:"100px"
    },
    backgroundHome:{
        backgroundImage: `url(${backgroundHomeBig})`,
        backgroundPosition: 'center', 
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat',
        height:"900px",
        display: 'flex',
        flexDirection:"column",
        marginTop:"0px"
         
    },
    principles:{
        marginTop:"10%"
    },
    whoIAm : {
        marginTop: "280px"
    },
    feedback:{
        marginTop: "150px"
    }
}));


export const HomePage = (props: PageFormProps) => {
    const classes = useStyles();
       
    return (
       <div className={classes.backgroundHome}>
            <Page>
                <div className={classes.container}>
                    <LogoHome/>
                    <div>
                        <Modalities title={"FRETES"}/>
                        <Modalities title={"CARRETOS"}/>
                        <Modalities title={"ENTREGAS EMPRESÁRIAIS"}/>
                        <Modalities title={"MUDANÇAS"}/>
                    </div>
                </div>
                <div className={classes.principles}>
                    <Principles/>
                </div>
                <div className={classes.whoIAm}>
                    <WhoIAm/>
                </div>
                <div className={classes.feedback}>
                    <Feedback/>
                </div>
            </Page>
       </div>

    );
};

export default HomePage;