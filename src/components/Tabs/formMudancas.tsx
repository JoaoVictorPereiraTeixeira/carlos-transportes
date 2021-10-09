import React from 'react';
import TextField from '@material-ui/core/TextField';
import {useState} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button, MenuItem } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { useForm } from 'react-hook-form';
import Toastr from '../toastr/index';

import {
    MuiPickersUtilsProvider
  } from '@material-ui/pickers';
import { ComboItems } from '../ComboItems';
import { Alert } from '@mui/material';
import QuotationsService from '../../service/QuotationsService';


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


const onSubmit = (formData: any) => {
    formData.quotationType = "MUDANCAS"
    formData.needHelper = formData.needHelper == "true"
    formData.hasElevator = formData.hasElevator == "true"    
    let service = new QuotationsService()
    service.sendQuotation(formData)
        .then(res => Toastr("SUCCESS","Cotação enviada com sucesso!"))
        .catch(error => {
            Toastr("ERROR","Ops, algum problema aconteceu")
            console.log(error)
        })
}


export default function FormPropsTextFields() {
    
    const classes = useStyles();

    const {register, handleSubmit} = useForm();

    return (
        <form 
            onSubmit={handleSubmit(onSubmit)}
            className={classes.root} 
            noValidate autoComplete="off">
            <p>
                De mudança?

                Bora facilitar tudo isso! 😁 Confira os horários que estamos disponíveis no calendário abaixo, após isso simplesmente preencha o formulário  logo abaixo e entraremos em contato  o mais rápido possível 
            </p>
            <br/>
            
        <div>
            <TextField {...register("requesterName")} required id="outlined-required"  label="Nome solicitante" variant="outlined" style = {{width:"31%"}}/>
            <TextField {...register("requesterMainTelephone")} required id="outlined-required" label="Telefone principal" variant="outlined" style = {{width:"27%"}}  />
            <TextField {...register("requesterSecondaryTelephone")} id="outlined-basic" label="Telefone secundário" variant="outlined" style = {{width:"27%"}} />
        
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <TextField
                        id="datetime-local"
                        required
                        label="Data e hora"
                        type="datetime-local"
                        defaultValue="2021-08-24T10:30"
                        className={classes.textField}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        {...register("dateToCollect")}
                    />
            </MuiPickersUtilsProvider>  
                
            <br/>
            <br/>

            <TextField {...register("originCep")} required id="outlined-required" label="CEP origem" variant="outlined" style = {{width:"31%"}} />
            <TextField {...register("originCity")} required id="outlined-required" label="Cidade de origem" variant="outlined"/>
            <TextField {...register("originAddress")} required id="outlined-required" label="Endereço de origem" variant="outlined" />
            <TextField {...register("originDistrict")} required id="outlined-required" label="Bairro de origem" variant="outlined" />
            <TextField {...register("originNumber")} required id="outlined-required" label="Número de origem" variant="outlined"/>

            <br/>
            <br/>

            <TextField {...register("destinyCep")}  required id="outlined-required" label="CEP destino" variant="outlined"  style={{width:"31%"}} />
            <TextField {...register("destinyCity")} required id="outlined-required" label="Cidade de destino" variant="outlined" />
            <TextField {...register("destinyAddress")} required id="outlined-required" label="Endereço de destino" variant="outlined" />
            <TextField {...register("destinyDistrict")} required id="outlined-required" label="Bairro de destino" variant="outlined" />
            <TextField {...register("destinyNumber")} required id="outlined-required" label="Número de destino" variant="outlined" />
            
            <br/>
            <br/>

            <TextField
                select
                required
                defaultValue= {[]}
                label="Tipo de moradia"
                margin={'normal'}
                variant={'outlined'}
                fullWidth
                {...register("typeHousing")}
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
                required
                label="Possui elevador?"
                margin={'normal'}
                variant={'outlined'}
                fullWidth
                {...register("hasElevator")}
            >
                <MenuItem value="" disabled>
                    <em>Selecione sim ou não</em>
                </MenuItem>
                <MenuItem value="true">
                    <em>Sim</em>
                </MenuItem>
                <MenuItem value="false">
                    <em>Não</em>
                </MenuItem>
            </TextField>

            <TextField
                select
                required
                defaultValue= {[]}
                label="Precisa de ajudante?"
                margin={'normal'}
                variant={'outlined'}
                fullWidth
                {...register("needHelper")}
            >
                <MenuItem value="" disabled>
                    <em>Selecione sim ou não</em>
                </MenuItem>
                <MenuItem value="true">
                    <em>Sim</em>
                </MenuItem>
                <MenuItem value="false">
                    <em>Não</em>
                </MenuItem>
            </TextField>

            <br/>
            <br/>

            <ComboItems/>
            
            <Typography className={classes.buttonSubmit}>
                <Button
                    type="submit"
                    variant="contained" 
                    size="large" 
                    color="primary" 
                    className={classes.buttonSubmit}>
                    SOLICITAR COTAÇÃO
                </Button>
            </Typography>
        </div>
        </form>
    );
}
