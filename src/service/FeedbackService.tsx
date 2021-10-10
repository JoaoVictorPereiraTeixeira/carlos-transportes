import ApiService from './ApiService.js'

type Feedback = {
    avaliation: number,
    description: string
}

export default class FeedbackService extends ApiService {
    constructor(){
        super('/feedbacks')
    }

    sendFeedback(feedback: Feedback){
        return this.post('/',feedback)
    }

}