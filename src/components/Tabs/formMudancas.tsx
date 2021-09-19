import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button, MenuItem } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider
  } from '@material-ui/pickers';
import { ComboItems } from '../ComboItems';

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
        marginTop:'20px'
    },
  }),
);

export default function FormPropsTextFields() {
  const classes = useStyles();
  let defaultItemsTransport = [
        "Cama montada",
        "Cama desmontada",
        "Guarda-roupa montado",
        "Guarda-roupa desmontado",
        "Amário montado",
        "Armário desmontado",
        "Geladeira",
        "Fogão",
        "Mesa montada",
        "Mesa desmontada",
        "Sofá",
        "Televisão"
    ]

  return (
    <form className={classes.root} noValidate autoComplete="off">
        <p>
            De mudança?

            Bora facilitar tudo isso! 😁 Confira os horários que estamos disponíveis no calendário abaixo, após isso simplesmente preencha o formulário  logo abaixo e entraremos em contato  o mais rápido possível 
        </p>
        <br/>
         
      <div>
         <TextField id="outlined-basic" label="Nome solicitante" variant="outlined" style = {{width:"31%"}}/>
         <TextField id="outlined-basic" label="Telefone solicitante" variant="outlined" style = {{width:"27%"}} />
         <TextField id="outlined-basic" label="Telefone solicitante" variant="outlined" style = {{width:"27%"}} />
    
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
            label="Tipo de moradia"
            margin={'normal'}
            variant={'outlined'}
            fullWidth
         >
            <MenuItem value="" disabled>
                <em>Selecione tipo moradia</em>
            </MenuItem>
            <MenuItem value="casa">
                <em>Casa</em>
            </MenuItem>
            <MenuItem value="apartamento">
                <em>Apartamento</em>
            </MenuItem>
            <MenuItem value="condominio">
                <em>Condominio</em>
            </MenuItem>
        </TextField>

        <TextField
            select
            defaultValue= {[]}
            label="Possui elevador?"
            margin={'normal'}
            variant={'outlined'}
            fullWidth
         >
            <MenuItem value="" disabled>
                <em>Selecione sim ou não</em>
            </MenuItem>
            <MenuItem value="casa">
                <em>Sim</em>
            </MenuItem>
            <MenuItem value="apartamento">
                <em>Não</em>
            </MenuItem>
        </TextField>

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

        <br/>
        <br/>

        <ComboItems defaultValues={defaultItemsTransport}/>
        
        <Typography className={classes.buttonSubmit}>
            <Button variant="contained" size="large" color="primary" className={classes.buttonSubmit}>
                SOLICITAR COTAÇÃO
            </Button>
        </Typography>

      </div>
    </form>
  );
}
