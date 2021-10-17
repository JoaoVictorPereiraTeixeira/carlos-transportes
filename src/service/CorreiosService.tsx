import axios from 'axios'
export default class CorreiosService{

    getCEP(cep: string){
        return axios.get(`https://viacep.com.br/ws/${cep}/json`)
    }

}