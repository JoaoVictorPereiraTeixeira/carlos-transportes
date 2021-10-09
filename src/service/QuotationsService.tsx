import ApiService from './ApiService.js'


export type QuotationType = {
    requesterName: string,
    requesterMainTelephone:  string,
    requesterSecondaryTelephone:  string,
    dateSolicitation: string,
    originCep: string,
    originCity: string,
    originAddress: string,
    paidAtOrigin: boolean,
    originDistrict: string,
    originNumber: string,
    destinyCep: string,
    destinyCity: string,
    destinyAddress: string,
    destinyDistrict: string,
    destinyNumber: string,
    quotationType?: string,
    weight?: number,
    quantityItems?: number,
    collectObservations?: string,
    merchandiseObservations?: string,
    dateToCollect?: string,
    typeHousing?: string,
    hasElevator?: boolean,
    needHelper?: boolean
    transportItems?: Array<{
        item: string,
        quantity: number
    }>
}

export default class QuotationsService extends ApiService {
    constructor(){
        super('/quotations')
    }

    sendQuotation(quotation: QuotationType){
        return this.post('/',quotation)
    }

}