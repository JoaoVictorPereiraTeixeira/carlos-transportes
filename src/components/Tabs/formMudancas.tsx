import TextField from '@material-ui/core/TextField';
import {useContext} from 'react';
import {DispatchContext} from '../../Context'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Button, MenuItem } from '@material-ui/core';
import { Typography } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { useForm, Controller} from 'react-hook-form';
import useWindowDimensions from '../../utils/responsive/index'

import Toastr from '../toastr/index';
import {
  MuiPickersUtilsProvider
} from '@material-ui/pickers';
import { ComboItems } from '../ComboItems';
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
  const {state} = useContext(DispatchContext)
  let windowDimensions = useWindowDimensions();

  function resetValues(){
    setValue("destinyAddress", undefined)
    setValue("destinyCep", "")
    setValue("destinyCity", undefined)
    setValue("destinyDistrict", undefined)
    setValue("destinyNumber", "")
    setValue("originAddress", undefined)
    setValue("originCep", "")
    setValue("originCity", undefined)
    setValue("originDistrict", undefined)
    setValue("originNumber", "")
    setValue("requesterName", "")
    setValue("requesterMainTelephone", "")
    setValue("requesterSecondaryTelephone", "")
    setValue("dateToCollect", "")
    setValue("typeHousing", "")
    setValue("hasElevator", "")
    setValue("needHelper", "")
  }
  
  const {register, handleSubmit, control, setValue} = useForm();
  
  const onSubmit = (formData: any) => {
      formData.itemsTransport = state.itemsToTransport
      formData.quotationType = "MUDANCAS"
      formData.needHelper = formData.needHelper === "true"
      formData.hasElevator = formData.hasElevator === "true"   
      console.log(formData) 
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
    
    return (
      <form 
        onSubmit={handleSubmit(onSubmit)}
        className={classes.root} 
        noValidate autoComplete="off"
      >
        <p>
            De mudança?

            Bora facilitar tudo isso! 😁 Confira os horários que estamos disponíveis no calendário abaixo, após isso simplesmente preencha o formulário  logo abaixo e entraremos em contato  o mais rápido possível 
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

        <TextField {...register("requesterSecondaryTelephone")}  
          id="outlined-basic"
          label="Telefone secundário"
          variant="outlined" 
          style = {{width: `${windowDimensions.width > 700 ? "27%": "100%"}`}} 
        />

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
                  {...register("dateToCollect")}
                  id="datetime-local"
                  required
                  error={!!error}
                  helperText={error ? error.message : null}
                  label="Data e hora de coleta"
                  type="datetime-local"
                  defaultValue="2021-08-24T10:30"
                  className={classes.textField}
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

          <CommonsFields control={control} register={register} setValue={setValue}/>   
       
         <br/>
         <br/>


        <br/>
        <br/>
            

        <Controller
            name="typeHousing"
            control={control}
            defaultValue=""
            rules={{ required: 'Campo obrigatório' }}
            render={({field: { onChange, value }, fieldState: { error } }) => (
                <TextField
                    {...register("typeHousing")}
                    select
                    required
                    defaultValue= {[]}
                    label="Tipo de moradia"
                    margin={'normal'}
                    variant={'outlined'}
                    fullWidth
                    error={!!error}
                    helperText={error ? error.message : null}
                    value={value}
                    onChange={onChange}
                    style = {{width: `${windowDimensions.width > 700 ? "20%": "100%"}`}}
                >
                    <MenuItem value="" disabled>
                        <em>Selecione tipo moradia</em>
                    </MenuItem>
                    <MenuItem value="CASA">
                        <em>Casa</em>
                    </MenuItem>
                    <MenuItem value="APARTAMENTO">
                        <em>Apartamento</em>
                    </MenuItem>
                    <MenuItem value="CONDOMINIO">
                        <em>Condominio</em>
                    </MenuItem>
                </TextField>
        )}/>
        
        <Controller
            name="hasElevator"
            control={control}
            defaultValue=""
            rules={{ required: 'Campo obrigatório' }}
            render={({field: { onChange, value }, fieldState: { error } }) => (
            <TextField
                {...register("hasElevator")}
                select
                defaultValue= {[]}
                required
                label="Possui elevador?"
                margin={'normal'}
                variant={'outlined'}
                fullWidth
                error={!!error}
                helperText={error ? error.message : null}
                value={value}
                style = {{width: `${windowDimensions.width > 700 ? "20%": "100%"}`}}
                onChange={onChange}
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
        )}/>


        <Controller
            name="needHelper"
            control={control}
            defaultValue=""
            rules={{ required: 'Campo obrigatório' }}
            render={({field: { onChange, value }, fieldState: { error } }) => (
            <TextField
                {...register("needHelper")}
                select
                defaultValue= {[]}
                required
                label="Precisa de ajudante?"
                margin={'normal'}
                variant={'outlined'}
                fullWidth
                error={!!error}
                helperText={error ? error.message : null}
                value={value}
                style = {{width: `${windowDimensions.width > 700 ? "20%": "100%"}`}}
                onChange={onChange}
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
        )}/>

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
