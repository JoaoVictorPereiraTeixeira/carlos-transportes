
import { Page } from '../../components/Page';
import {makeStyles, Theme } from '@material-ui/core';
import Principles from '../../components/Principles';
import Modalities from '../../components/Modalities';
import LogoHome from '../../components/LogoHome';
import backgroundHomeBig from '../../static/img/backgroundHome.png'
import WhoIAm from '../../components/WhoIAm';
import Feedback from '../../components/Feedback';
import { ToastContainer } from 'react-toastify';

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
                <ToastContainer /> 
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