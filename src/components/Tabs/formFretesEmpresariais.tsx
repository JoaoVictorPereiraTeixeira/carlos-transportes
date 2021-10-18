import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button, InputAdornment, MenuItem } from '@material-ui/core';
import { useForm, Controller } from "react-hook-form";
import DateFnsUtils from '@date-io/date-fns';
import { Typography } from '@material-ui/core';
import Toastr from '../toastr/index';
import useWindowDimensions from '../../utils/responsive/index'

import {
    MuiPickersUtilsProvider
  } from '@material-ui/pickers';

import QuotationsService from '../../service/QuotationsService';
import { CommonsFields } from './commonsFields';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
    textField:{
      [theme.breakpoints.up('md')] : {
        width:"500px"
      },
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

function handleFormData(formData: any){
  formData.quotationType = "FRETES_EMPRESARIAIS"
  formData.paidAtOrigin = formData.paidAtOrigin === "true"
  formData.weight = Number(formData.weight.replace(',','.'))
  formData.quantityItems = Number(formData.quantityItems)
  return formData
}

export default function FormPropsTextFields() {
  const classes = useStyles();
  const {register, handleSubmit, setValue, control} = useForm();
  let windowDimensions = useWindowDimensions();
  
  const onSubmit = (formData: any) => {
    formData = handleFormData(formData)
    let service = new QuotationsService()
    Toastr("WARNING","Estamos enviando sua cotação, aguarde alguns segundos")
    resetValues()
    service.sendQuotation(formData)
      .then(res => Toastr("SUCCESS","Cotação enviada com sucesso!"))
      .catch(error => {
          Toastr("ERROR","Ops, algum problema aconteceu")
          console.log(error)
      })
  }

  function resetValues(){
    setValue("destinyAddress", "")
    setValue("destinyCep", "")
    setValue("destinyCity", "")
    setValue("destinyDistrict", "")
    setValue("destinyNumber", "")
    setValue("originAddress", "")
    setValue("originCep", "")
    setValue("originCity", "")
    setValue("originDistrict", "")
    setValue("originNumber", "")
    setValue("requesterName", "")
    setValue("requesterMainTelephone", "")
    setValue("requesterSecondaryTelephone", "")
    setValue("dateToCollect", "")
    setValue("needHelper", "")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.root} noValidate autoComplete="off">
        <p>
            Precisa realizar uma entrega? 
            Nos informe algumas informações e entraremos em contato 😉
        </p>
        <br/>
      <div>
          

        <Controller
          name="requesterName"
          control={control}
          defaultValue=""
          rules={{ required: 'Campo obrigatório' }}
          render={({field: { onChange, value }, fieldState: { error } }) => (
            <TextField {...register("requesterName")} 
              required={true}
              id="outlined-required" 
              label="Empresa solicitante" 
              variant="outlined"
              value={value}
              onChange={onChange}
              style = {{width: `${windowDimensions.width > 700 ? "31%": "100%"}`}}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
        />       
  
        <Controller
          name="requesterMainTelephone"
          control={control}
          defaultValue=""
          rules={{ required: 'Campo obrigatório' }}
          render={({field: { onChange, value }, fieldState: { error } }) => (
            <TextField {...register("requesterMainTelephone")} 
              required={true}
              id="outlined-required" 
              label="Telefone principal" 
              variant="outlined"
              value={value}
              onChange={onChange}
              style = {{width: `${windowDimensions.width > 700 ? "27%": "100%"}`}}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
        /> 

         <TextField 
            {...register("cnpjSender")} 
            id="outlined-basic" 
            label="CNPJ Remente" 
            variant="outlined" 
            style = {{width: `${windowDimensions.width > 700 ? "27%": "100%"}`}}
          />
            
         <TextField 
          {...register("cnpjRecipient")} 
          id="outlined-basic" 
          label="CNPJ Destinatário" 
          variant="outlined" 
          fullWidth 
          style = {{width: `${windowDimensions.width > 700 ? "31%": "100%"}`}}
        />
        

         <Controller
          name="paidAtOrigin"
          control={control}
          defaultValue=""
          rules={{ required: 'Campo obrigatório' }}
          render={({field: { onChange, value }, fieldState: { error } }) => (
          <TextField
              {...register("paidAtOrigin")}
              select
              required
              error={!!error}
              helperText={error ? error.message : null}
              type="boolean"
              defaultValue= {[]}
              label="Pago na origem?"
              margin={'normal'}
              value={value}
              onChange={onChange}
              variant={'outlined'}
              style = {{width: `${windowDimensions.width > 700 ? "18%": "100%"}`}}
              
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
          )}
        />

      <br/>
      <br/>
        
     
      <CommonsFields control={control} register={register} setValue={setValue}/>        

      <br/>
      <br/>
      <br/>
      
  
        <TextField 
            {...register("weight")}
            id="filled-start-adornment"
            label="Peso" 
            variant="outlined" 
            style = {{width: `${windowDimensions.width > 700 ? "10%": "100%"}`}}
            InputProps={{
                startAdornment: <InputAdornment position="start">Kg</InputAdornment>,
            }}
            
        />
         <TextField 
          {...register("quantityItems")} 
          id="outlined-basic" 
          label="Quant. items" 
          variant="outlined" 
          style = {{width: `${windowDimensions.width > 700 ? "10%": "100%"}`}}
        />
        
         <Controller
          name="dateToCollect"
          control={control}
          defaultValue=""
          rules={{ required: 'Campo obrigatório' }}
          render={({field: { onChange, value }, fieldState: { error } }) => (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <TextField
                  {...register("dateToCollect")}
                  id="datetime-local"
                  required
                  error={!!error}
                  helperText={error ? error.message : null}
                  label="Data e hora de coleta"
                  type="datetime-local"
                  defaultValue="2021-08-24T10:30"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  value={value}
                  onChange={onChange}
              />
            </MuiPickersUtilsProvider>
          )}/>
        
        <br/>
        <br/>

         <TextField 
          {...register("collectObservations")} 
          id="outlined-basic" 
          label="Observações para coleta" 
          variant="outlined" 
          multiline 
          rows="4"
          style = {{width:"100%"}}
        />
         <br/>

          <TextField 
            {...register("merchandiseObservations")} 
            id="outlined-basic" 
            label="Observações para mercadoria" 
            variant="outlined"  
            multiline rows="4" 
            style = {{width:"100%"}}
          />
            
         <br/>
         <br/>
        
        <Typography className={classes.buttonSubmit}>
            <Button type="submit" variant="contained" size="large" color="primary" className={classes.buttonSubmit}>
                SOLICITAR COTAÇÃO
            </Button>
        </Typography>

      </div>
    </form>
  );
}
