// @flow 
import {createStyles, makeStyles, Theme } from '@material-ui/core';
import whoIAm from '../../static/img/whoIAm.png'

import useWindowDimensions from '../../utils/responsive/index'


type Props = {
    
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container:{
      borderRadius: "20px",
      background:  '#FFFFFF',
      boxShadow: "8px 8px 32px rgba(0, 0, 0, 0.16)",
      height:"550px",
      padding:"30px 20px"
    },
    subContainer:{
      background: "#FAFAFA",
      width:"100%",
      height:"100%",
      padding:"30px"
    },
    presentation:{
      fontSize:"20px"
    },
    describe:{
      fontSize:"24px"
    },
    whoIAm:{
      position:"absolute",
      marginTop:"-150px",
      left: "50%",
      marginLeft: "-100px",
      width:"180px",
      height:"180px",
      borderRadius: "180px"
    }
  }),
);



const WhoIAm = (props: Props) => {

    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.subContainer} >
              <img src={whoIAm} alt="Quem é Carlos Transportes?" className={classes.whoIAm} />
              
              <p className={classes.presentation}>Olá, sou Alexandre</p>
              <p className={classes.describe}>
                Realizo entregas a 8 anos is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ips
              </p>
            </div>
        </div>

    );
};

export default WhoIAm