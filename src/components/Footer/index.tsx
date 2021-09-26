// @flow 
import * as React from 'react';
import {createStyles, makeStyles, TextField, Theme } from '@material-ui/core';



type Props = {
    
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container:{
      marginTop:"250px",
      width:"100%",
      height:"180px",
      background:"#5F5F5F"
    }
  }),
);


const Footer = (props: Props) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
          <div>
            Visite nossas redes sociais!
          </div>
          <div>
            <img src={""} alt="Facebook"/>
            <img src={""} alt="Facebook"/>
          </div>
          <div>
            <p>Entre em contato:</p>
            <div>
              (019) 99999-9999
            </div>
            <div>
              atendimento@carlosTransportes.com.br
            </div>
          </div>
        </div>
    );
};

export default Footer