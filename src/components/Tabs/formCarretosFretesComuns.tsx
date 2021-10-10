import React from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button, MenuItem } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { useForm, Controller } from 'react-hook-form';
import Toastr from '../toastr/index';


import {
    MuiPickersUtilsProvider
  } from '@material-ui/pickers';
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
    },
  }),
);

function onSubmit(formData: any){
  formData.quotationType = "FRETES_COMUNS"
  formData.needHelper = formData.needHelper == "true"
  
  Toastr("WARNING","Estamos enviando sua cotação, aguarde alguns segundos")
  
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
  const {register, handleSubmit, control} = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes.root} noValidate autoComplete="off">
        <p>
          Confira os horários que estamos disponíveis no calendário abaixo, após isso simplesmente preencha o formulário  abaixo e entraremos em contato o mais rápido possível 👍
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
              label="Nome solicitante" 
              variant="outlined"
              value={value}
              onChange={onChange}
              style = {{width:"31%"}}
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
              style = {{width:"27%"}}
              error={!!error}
              helperText={error ? error.message : null}
            />
          )}
        /> 

        <TextField {...register("requesterSecondaryTelephone")} 
          required id="outlined-required" 
          label="Telefone secundário" 
          variant="outlined" 
          style = {{width:"27%"}} />

         <br/>
         <br/>
        
         <Controller
          name="dateToCollect"
          control={control}
          defaultValue=""
          rules={{ required: 'Campo obrigatório' }}
          render={({field: { onChange, value }, fieldState: { error } }) => (
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
          )}/>
            
        <br/>
        <br/>

        <Controller
          name="originCep"
          control={control}
          defaultValue=""
          rules={{ required: 'Campo obrigatório' }}
          render={({field: { onChange, value }, fieldState: { error } }) => (
            <TextField 
              {...register("originCep")} 
              required 
              error={!!error}
              helperText={error ? error.message : null}
              id="outlined-required" 
              label="CEP origem"
              value={value}
              onChange={onChange} 
              variant="outlined" 
              style = {{width:"31%"}} />
          )}
        />

        <Controller
          name="originCity"
          control={control}
          defaultValue=""
          rules={{ required: 'Campo obrigatório' }}
          render={({field: { onChange, value }, fieldState: { error } }) => (
            <TextField 
              {...register("originCity")} 
              required
              error={!!error}
              helperText={error ? error.message : null}
              id="outlined-required"
              value={value}
              onChange={onChange}
              label="Cidade de origem" 
              variant="outlined"/>
          )}
        />

        <Controller
          name="originAddress"
          control={control}
          defaultValue=""
          rules={{ required: 'Campo obrigatório' }}
          render={({field: { onChange, value }, fieldState: { error } }) => (
            <TextField 
              {...register("originAddress")} 
              required
              error={!!error}
              helperText={error ? error.message : null}
              id="outlined-required"
              label="Endereço de origem"
              value={value}
              onChange={onChange}
              variant="outlined" />
          )}
        />

        <Controller
          name="originDistrict"
          control={control}
          defaultValue=""
          rules={{ required: 'Campo obrigatório' }}
          render={({field: { onChange, value }, fieldState: { error } }) => (
          <TextField 
            {...register("originDistrict")} 
            required
            error={!!error}
            helperText={error ? error.message : null}
            id="outlined-required" 
            label="Bairro de origem"
            value={value}
            onChange={onChange}
            variant="outlined" />
          )}
        />     

        <Controller
          name="originNumber"
          control={control}
          defaultValue=""
          rules={{ required: 'Campo obrigatório' }}
          render={({field: { onChange, value }, fieldState: { error } }) => (
            <TextField 
              {...register("originNumber")} 
              required
              error={!!error}
              helperText={error ? error.message : null}
              id="outlined-required" 
              label="Número de origem"
              value={value}
              onChange={onChange}
              variant="outlined"/>
          )}
        />

         <br/>
         <br/>

         <Controller
          name="destinyCep"
          control={control}
          defaultValue=""
          rules={{ required: 'Campo obrigatório' }}
          render={({field: { onChange, value }, fieldState: { error } }) => (
            <TextField 
              {...register("destinyCep")}  
              required 
              error={!!error}
              helperText={error ? error.message : null}
              id="outlined-required" 
              label="CEP destino" 
              variant="outlined"
              value={value}
              onChange={onChange}  
              style={{width:"31%"}} />
          )}
        />  

        <Controller
          name="destinyCity"
          control={control}
          defaultValue=""
          rules={{ required: 'Campo obrigatório' }}
          render={({field: { onChange, value }, fieldState: { error } }) => (
            <TextField 
              {...register("destinyCity")} 
              required
              error={!!error}
              helperText={error ? error.message : null}
              id="outlined-required"
              label="Cidade de destino"
              value={value}
              onChange={onChange}
              variant="outlined" />
          )}
        />

        <Controller
          name="destinyAddress"
          control={control}
          defaultValue=""
          rules={{ required: 'Campo obrigatório' }}
          render={({field: { onChange, value }, fieldState: { error } }) => (
            <TextField 
              {...register("destinyAddress")} 
              required
              error={!!error}
              helperText={error ? error.message : null}
              id="outlined-required" 
              label="Endereço de destino"
              value={value}
              onChange={onChange} 
              variant="outlined" />
          )}
        /> 

        <Controller
          name="destinyDistrict"
          control={control}
          defaultValue=""
          rules={{ required: 'Campo obrigatório' }}
          render={({field: { onChange, value }, fieldState: { error } }) => (
            <TextField 
              {...register("destinyDistrict")} 
              required
              error={!!error}
              helperText={error ? error.message : null}
              id="outlined-required" 
              label="Bairro de destino"
              value={value}
              onChange={onChange}
              variant="outlined" />
          )}
        />       

        <Controller
          name="destinyNumber"
          control={control}
          defaultValue=""
          rules={{ required: 'Campo obrigatório' }}
          render={({field: { onChange, value }, fieldState: { error } }) => (
            <TextField {
              ...register("destinyNumber")} 
              required
              error={!!error}
              helperText={error ? error.message : null}
              id="outlined-required" 
              label="Número de destino"
              value={value}
              onChange={onChange}
              variant="outlined" />
          )}
        /> 
        
         <br/>
         <br/>

         <TextField
            select
            defaultValue= {[]}
            label="Precisa de ajudante?"
            margin={'normal'}
            variant={'outlined'}
            fullWidth
            required
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

         <TextField {...register("merchandiseObservations")}  id="outlined-basic" label="Observações para mercadoria" variant="outlined" 
            multiline rows="4" style = {{width:"100%"}}/>

        <br/>
        <br/>
        
        <Typography className={classes.buttonSubmit}>
            <Button type="submit"  variant="contained" size="large" color="primary" className={classes.buttonSubmit}>
                SOLICITAR COTAÇÃO
            </Button>
        </Typography>

      </div>
    </form>
  );
}
