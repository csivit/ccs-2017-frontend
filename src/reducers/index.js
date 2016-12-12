export const firstTime = (state, action) =>{
    switch(action.type){
        case 'CHECK_EMAIL_RESPONSE':
            return action.data.firstTime
        default:
            return state || false
    }
}

export const userEmail = (state, action) => {
    switch(action.type){
        case 'CHECK_EMAIL_RESPONSE':
            return action.data.email
        default:
            return state || ''
    }
}