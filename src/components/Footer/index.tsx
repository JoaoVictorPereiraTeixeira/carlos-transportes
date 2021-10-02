// @flow 
import * as React from 'react';
import {createStyles, makeStyles, TextField, Theme } from '@material-ui/core';
import facebookLogo from '../../static/img/facebookLogo.png'
import linkedInLogo from '../../static/img/linkedInLogo.png'
import iconPhone from '../../static/img/iconPhone.png'
import iconComment from '../../static/img/iconComment.png'


type Props = {
    
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container:{
      display: "flex",
      justifyContent: "space-around",
      width:"100%",
      height:"250px",
      background:"#5F5F5F",
      padding:"50px",
      marginTop:"150px"
    },
    title:{
        color:"#F1F8FF",
        fontSize:"14px",
        fontWeight:"bold"
    },
    contact:{
      fontSize:"12px",
      color:"#F1F8FF",
      marginLeft:"20px"
      
    },
    contactContainer:{
      display:"flex",
      marginTop:"10px"
    },
    networkContainer:{
      marginTop:"50px"
    }
  }),
);


const Footer = (props: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
          <div>
            <p className={classes.title}>
              Visite nossas redes sociais!
            </p>
            <div className={classes.networkContainer}>
              <img style={{marginRight:"20px"}} src={facebookLogo} alt="Facebook"/>
              <img src={linkedInLogo} alt="LinkedIn"/>
            </div>
          </div>

          <div>
            <p className={classes.title}>Entre em contato:</p>

            <div className={classes.contactContainer} style={{marginTop:"40px"}}>
              <img src={iconPhone} alt="Ícone telefone"/>
              <span className={classes.contact}>(019) 99999-9999</span>
            </div>

            <div className={classes.contactContainer}>
              <img src={iconComment} alt="Ícone email"/>
              <span className={classes.contact}>atendimento@carlosTransportes.com.br</span>
            </div>

          </div>
        </div>
    );
};

export default Footer