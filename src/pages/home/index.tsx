
import { Page } from '../../components/Page';
import { Box, makeStyles, Typography, Theme, Container } from '@material-ui/core';
import Principles from '../../components/Principles';
import Modalities from '../../components/Modalities';
import LogoHome from '../../components/LogoHome';
import backgroundHome from '../../static/img/backgroundHome.png'
import useWindowDimensions from '../../utils/responsive/index'
import WhoIAm from '../../components/WhoIAm';

interface PageFormProps {
    
};


const useStyles = makeStyles((theme : Theme) => ({
    container:{
        marginTop:"100px"
    },
    backgroundHome:{
        backgroundImage: `url(${backgroundHome})`,
        backgroundPosition: 'center', 
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    principles:{
        marginTop:"10%"
    },
    whoIAm : {
        marginTop: "280px"
    }
}));


export const HomePage = (props: PageFormProps) => {
    const classes = useStyles();
    const {innerHeight } = window;
    console.log(innerHeight) //TODO
   
    return (
       <div>
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
            </Page>
       </div>

    );
};

export default HomePage;