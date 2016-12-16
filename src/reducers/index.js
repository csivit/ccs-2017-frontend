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

export const flexPaper = (state, action) => {
    switch(action.type){
        case 'PAPER_CHANGE_HEIGHT':
            return Object.assign({},
            state,
            {height: action.height})
        case 'PAPER_CHANGE_WIDTH':
            return Object.assign({},
            state,
            {width: action.width}
            )
        case 'PAPER_CHANGE_TOP':
            return Object.assign({},
            state,
            {top: action.top}
            )
        default:
            return state || {}
    }
}