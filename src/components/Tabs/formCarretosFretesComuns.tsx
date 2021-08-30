import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button, MenuItem } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider
  } from '@material-ui/pickers';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    textField:{
        width: 129
    },
    buttonSubmit: {
        flexGrow: 1,
        textAlign:'center',
    },
  }),
);

export default function FormPropsTextFields() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
        <p>
        Confira os horários que estamos disponíveis no calendário abaixo, após isso simplesmente preencha o formulário  abaixo e entraremos em contato o mais rápido possível 👍
        </p>
        <br/>
      <div>
          
         <TextField id="outlined-basic" label="Nome solicitante" variant="outlined" style = {{width:"31%"}}/>
         <TextField id="outlined-basic" label="Telefone solicitante" variant="outlined" style = {{width:"27%"}} />
         <TextField id="outlined-basic" label="Telefone solicitante" variant="outlined" style = {{width:"27%"}} />

         <br/>
         <br/>

         <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <TextField
                    id="datetime-local"
                    label="Data e hora"
                    type="datetime-local"
                    defaultValue="2021-08-24T10:30"
                    className={classes.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
        </MuiPickersUtilsProvider>  
            
        <br/>
        <br/>

         <TextField id="outlined-basic" label="CEP origem" variant="outlined" style = {{width:"31%"}}/>
         <TextField id="outlined-basic" label="Cidade de origem" variant="outlined" />
         <TextField id="outlined-basic" label="Endereço de origem" variant="outlined" />
         <TextField id="outlined-basic" label="Bairro de origem" variant="outlined" />
         <TextField id="outlined-basic" label="Número de origem" variant="outlined" />

         <br/>
         <br/>

         <TextField id="outlined-basic" label="CEP destino" variant="outlined"  style={{width:"31%"}} />
         <TextField id="outlined-basic" label="Cidade de destino" variant="outlined" />
         <TextField id="outlined-basic" label="Endereço de destino" variant="outlined" />
         <TextField id="outlined-basic" label="Bairro de destino" variant="outlined" />
         <TextField id="outlined-basic" label="Número de destino" variant="outlined" />
        
         <br/>
         <br/>

         <TextField
            select
            defaultValue= {[]}
            label="Precisa de ajudante?"
            margin={'normal'}
            variant={'outlined'}
            fullWidth
         >
            <MenuItem value="" disabled>
                <em>Selecione sim ou não</em>
            </MenuItem>
            <MenuItem value="sim">
                <em>Sim</em>
            </MenuItem>
            <MenuItem value="nao">
                <em>Não</em>
            </MenuItem>
        </TextField>

         <TextField id="outlined-basic" label="Observações para mercadoria" variant="outlined"  multiline rows="4" style = {{width:"100%"}}/>
        <br/>
        <br/>
        
        <Typography className={classes.buttonSubmit}>
            <Button variant="contained" size="large" color="primary" className={classes.buttonSubmit}>
                SOLICITAR COTAÇÃO
            </Button>
        </Typography>

      </div>
    </form>
  );
}
