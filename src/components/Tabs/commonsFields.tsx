// @flow 
import { TextField } from '@material-ui/core';
import * as React from 'react';
import { Controller } from 'react-hook-form';
import CorreiosService from '../../service/CorreiosService';
import Toastr from '../toastr/index';

type Props = {
    control: any;
    register: any;
    setValue: any;
};
export const CommonsFields = (props: Props) => {

    function setCEPInformations(event : any, fieldTarget: any){
        let correiosService = new CorreiosService();
        var validacep = /^[0-9]{8}$/;
        let city = fieldTarget + "City"
        let address = fieldTarget + "Address"
        let district = fieldTarget + "District"
    
        if(validacep.test(event.target.value)){
          correiosService.getCEP(event.target.value).then((res : any) => {
            props.setValue(city, res.data.localidade,  {shouldValidate: true })  
            props.setValue(address, res.data.logradouro, {shouldValidate: true })  
            props.setValue(district, res.data.bairro, {shouldValidate: true })
          }).catch(error => {
            Toastr("WARNING","CEP não localizado")
          })
        } else {
          props.setValue(city, undefined ,  {shouldValidate: false })
          props.setValue(address, undefined, {shouldValidate: false })
          props.setValue(district, undefined, {shouldValidate: false })
        }
    }

    return (
        <>
            <Controller
                name="originCep"
                control={props.control}
                defaultValue=""
                rules={{ required: 'Campo obrigatório' }}
                render={({field: { onChange, value }, fieldState: { error } }) => (
                <TextField 
                    {...props.register("originCep")} 
                    required 
                    error={!!error}
                    helperText={error ? error.message : null}
                    id="outlined-required" 
                    label="CEP origem"
                    value={value}
                    onChange={(e) => {
                        onChange(e)
                        setCEPInformations(e,"origin")
                    }} 
                    variant="outlined" 
                    style = {{width:"31%"}} />
                )}
            />
            <Controller
                name="originCity"
                control={props.control}
                rules={{ required: 'Campo obrigatório' }}
                render={({field: { onChange, value }, fieldState: { error } }) => (
                <TextField 
                    {...props.register("originCity")} 
                    required
                    error={!!error}
                    helperText={error ? error.message : null}
                    id="outlined-required"
                    label="Cidade de origem"
                    value={value != null ? value : ""}
                    onChange={onChange}
                    variant="outlined" />
                )}
            />    

            <Controller
                name="originAddress"
                control={props.control}
                rules={{ required: 'Campo obrigatório' }}
                render={({field: { onChange, value }, fieldState: { error } }) => (
                <TextField 
                    {...props.register("originAddress")} 
                    required
                    error={!!error}
                    helperText={error ? error.message : null}
                    id="outlined-required"
                    label="Endereço de origem"
                    value={value != null ? value : ""}
                    onChange={onChange}
                    variant="outlined" />
                )}
            />

            <Controller
                name="originDistrict"
                control={props.control}
                rules={{ required: 'Campo obrigatório' }}
                render={({field: { onChange, value }, fieldState: { error } }) => (
                <TextField 
                {...props.register("originDistrict")} 
                required
                error={!!error}
                helperText={error ? error.message : null}
                id="outlined-required" 
                label="Bairro de origem"
                value={value != null ? value : ""}
                onChange={onChange}
                variant="outlined" />
                )}
            />     

            <Controller
                name="originNumber"
                control={props.control}
                defaultValue=""
                rules={{ required: 'Campo obrigatório' }}
                render={({field: { onChange, value }, fieldState: { error } }) => (
                <TextField 
                    {...props.register("originNumber")} 
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
                control={props.control}
                defaultValue=""
                rules={{ required: 'Campo obrigatório' }}
                render={({field: { onChange, value }, fieldState: { error } }) => (
                <TextField 
                    {...props.register("destinyCep")} 
                    required 
                    error={!!error}
                    helperText={error ? error.message : null}
                    id="outlined-required" 
                    label="CEP destino"
                    value={value}
                    onChange={(e) => {
                    onChange(e)
                    setCEPInformations(e,"destiny")
                    }} 
                    variant="outlined" 
                    style = {{width:"31%"}} />
                )}
            />

            <Controller
                name="destinyCity"
                control={props.control}          
                rules={{ required: 'Campo obrigatório' }}
                render={({field: { onChange, value }, fieldState: { error } }) => (
                <TextField 
                    {...props.register("destinyCity")}
                    required
                    error={!!error}
                    helperText={error ? error.message : null}
                    id="outlined-required"
                    value={value != null ? value : ""}
                    onChange={onChange}
                    label="Cidade de destino" 
                    variant="outlined"/>
                )}
            />

            <Controller
                name="destinyAddress"
                control={props.control}
                rules={{ required: 'Campo obrigatório' }}
                render={({field: { onChange, value }, fieldState: { error } }) => (
                <TextField 
                    {...props.register("destinyAddress")} 
                    required
                    error={!!error}
                    helperText={error ? error.message : null}
                    id="outlined-required"
                    label="Endereço de destino"
                    value={value != null ? value : ""}
                    onChange={onChange}
                    variant="outlined" />
                )}
            />

            <Controller
                name="destinyDistrict"
                control={props.control}
                rules={{ required: 'Campo obrigatório' }}
                render={({field: { onChange, value }, fieldState: { error } }) => (
                <TextField 
                {...props.register("destinyDistrict")} 
                required
                error={!!error}
                helperText={error ? error.message : null}
                id="outlined-required" 
                label="Bairro de destino"
                value={value != null ? value : ""}
                onChange={onChange}
                variant="outlined" />
                )}
            />     

            <Controller
                name="destinyNumber"
                control={props.control}
                defaultValue=""
                rules={{ required: 'Campo obrigatório' }}
                render={({field: { onChange, value }, fieldState: { error } }) => (
                <TextField 
                    {...props.register("destinyNumber")} 
                    required
                    error={!!error}
                    helperText={error ? error.message : null}
                    id="outlined-required" 
                    label="Número de destino"
                    value={value}
                    onChange={onChange}
                    variant="outlined"/>
                )}
            />
        </>
    );
};