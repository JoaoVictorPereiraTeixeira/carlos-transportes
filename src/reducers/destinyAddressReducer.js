export const initialState = {
    destinyAddress: "",
    destinyCity: "",
    destinyDistrict: ""
}

export const feedbackReducer = (state, action) => {  
    switch(action.type){
        case 'CHANGE_FEEDBACK_AVALIATION':
            return {
                avaliation: action.avaliation,
                description: state.description
            }
        case 'CHANGE_FEEDBACK_DESCRIPTION':
            return {
                avaliation: state.avaliation,
                description: action.description
            }
        case 'FEEDBACK_CLEAR_ALL':
            return {
                avaliation: 0,
                description: ''
            }
        default:
            return state;
    }
}
