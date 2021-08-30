import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button, FormControl, Grid, InputAdornment, InputLabel, MenuItem } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { Typography } from '@material-ui/core';
import {
    MuiPickersUtilsProvider
  } from '@material-ui/pickers';

import { OutlinedInput } from '@material-ui/core';

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
    formControlAmount:{
        marginTop:7
    }
  }),
);

export default function FormPropsTextFields() {
  const classes = useStyles();

  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date('2014-08-18T21:11:54'),
  );

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
        <p>
            Precisa realizar uma entrega? 
            Nos informe algumas informações e entraremos em contato 😉
        </p>
        <br/>
      <div>
          
         <TextField id="outlined-basic" label="Empresa solicitante" variant="outlined" style = {{width:"31%"}}/>
         <TextField id="outlined-basic" label="Telefone solicitante" variant="outlined" style = {{width:"27%"}} />
         <TextField id="outlined-basic" label="CNPJ Remente" variant="outlined" style = {{width:"27%"}} />
         <TextField id="outlined-basic" label="CNPJ Destinatário" variant="outlined" style = {{width:"27%"}} />

         <TextField
            select
            defaultValue= {[]}
            label="Pago na origem?"
            margin={'normal'}
            variant={'outlined'}
            style = {{width:"14%"}}
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

         <br/>
         <br/>

         <TextField id="outlined-basic" label="CEP origem" variant="outlined" style = {{width:"31%"}}/>
         <TextField id="outlined-basic" label="Cidade de origem" variant="outlined"  />
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

         {/* <FormControl className={classes.formControlAmount} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-amount">Valor NF</InputLabel>
          <OutlinedInput
            id="outlined-adornment-amount"
            startAdornment={<InputAdornment position="start">R$</InputAdornment>}
            labelWidth={70}
          />
        </FormControl> */}

        <TextField 
            id="filled-start-adornment"
            label="Peso" 
            variant="outlined" 
            InputProps={{
                startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
            }}   
        />
         <TextField id="outlined-basic" label="Quant. items" variant="outlined" style = {{width:"10%"}} />
            
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <TextField
                    id="datetime-local"
                    label="Data e hora de coleta"
                    type="datetime-local"
                    defaultValue="2021-08-24T10:30"
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
        </MuiPickersUtilsProvider>      
        
         <TextField id="outlined-basic" label="Observações para coleta" variant="outlined" multiline rows="4" style = {{width:"100%"}}/>
         <br/>
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
