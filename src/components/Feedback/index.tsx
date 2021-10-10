// @flow 
import  {useContext, useState} from 'react';
import {Button, createStyles, makeStyles, TextField, Theme } from '@material-ui/core';
import {DispatchContext} from '../../Context'

import RatingMUI from '../RatingMUI';
import FeedbackService from '../../service/FeedbackService';
import Toastr from '../toastr';


type Props = {
    
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container:{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      borderRadius: "20px",
      background:  '#FFFFFF',
      boxShadow: "8px 8px 32px rgba(0, 0, 0, 0.16)",
      [theme.breakpoints.up('md')] : {
      },
      padding:"30px 20px"
    },
    subContainer:{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      background: "#FAFAFA",
      marginTop:"30px",
      height:"100%",
      padding:"30px"
    },
    presentation:{
      fontSize:"20px",
      marginTop:"60px"
    },
    text:{
      fontSize:"18px",
      color:"rgba(0, 102, 255, 0.79)",
      [theme.breakpoints.up('md')] : {
        fontSize:"22px"
      },
      textAlign:"center"
    },
    textFeedback:{
      fontSize: "16px", 
      textAlign:"center",
      [theme.breakpoints.up('md')] : {
        fontSize:"20px"
      },
    },
    whoIAm:{
      position:"absolute",
      marginTop:"-150px",
      left: "50%",
      marginLeft: "-100px",
      width:"170px",
      height:"170px",
      [theme.breakpoints.up('md')] : {
        width:"180px",
        height:"180px"
      },
      borderRadius: "180px"
    },
    buttonSubmit: {
      flexGrow: 1,
      textAlign:'center',
      marginTop:"24px"
    }
  }),
);



const Feedback = (props: Props) => {
  const classes = useStyles();
  const {state, dispatch} = useContext(DispatchContext)
  
  const sendFeedback = () => { 
    let service = new FeedbackService()
    if(state.feedback.avaliation !== 0){
      dispatch({type: 'FEEDBACK_CLEAR_ALL'})
      Toastr("WARNING","Estamos enviando seu feedback, aguarde alguns segundos, por favor")
      service.sendFeedback(state.feedback)
        .then(res => Toastr("SUCCESS","Feedback enviado com sucesso, muito obrigado!"))
        .catch(error => {
            Toastr("ERROR","Ops, algum problema aconteceu")
            console.log(error)
        })
    } else {
      Toastr("WARNING","Por favor, avalie para seguir com o feedback :)")
    }

    console.log(state.feedback)

  }
  
  const handleChange = (e: any) => {
    dispatch({type: 'CHANGE_FEEDBACK_DESCRIPTION', description: e.target.value})
  }
   
  return (
      <div className={classes.container}>
          <p className={classes.text}>Recebeu uma entrega? Nos conte como foi! É rápido, apenas uma pergunta :)</p>
          <div className={classes.subContainer} >
            <RatingMUI/>
          </div>
          <div className={classes.subContainer}>
            <p className={classes.textFeedback}>Aproveite o espaço abaixo para deixar sugestões de melhoria, elogios entre outros. Todas as respostas são anônimas 😉</p> 
            <TextField value={state.feedback.description} onChange={handleChange} id="outlined-basic" label="Queremos sua opinão! Estamos indo bem? (opcional)" variant="outlined"  multiline rows="4" style = {{width:"100%", marginTop:"20px"}}/>
            <Button onClick={sendFeedback} variant="contained" size="large" color="primary" className={classes.buttonSubmit}>
                Enviar feedback
            </Button>
          </div>
      </div>
  );
};

export default Feedback