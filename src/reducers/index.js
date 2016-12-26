import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS
} from '../actions/index.js'

export const auth = (state = {
    isFetching: false,
    isAuthenticated: sessionStorage.getItem('id_token') ? true : false,
    id_token: sessionStorage.getItem('id_token')
  }, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false,
      })
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: true,
        errorMessage: '',
        id_token: action.id_token
      })
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        isAuthenticated: false,
        errorMessage: action.message
      })
    case LOGOUT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: true,
        isAuthenticated: false
      })
    default:
      return state
  }
}

export const firstTime = (state, action) =>{
    switch(action.type){
        case 'CHECK_EMAIL_RESPONSE':
            return action.data.firstTime
        default:
            return state || false
    }
}


export const questionsAdmin = (state=[], action) =>{
    switch(action.type){
        case 'ADMIN_QUESTION_GET':
            return action.questions
        case 'ADMIN_QUESTION_ADD':
            return state.concat([action.question])
        default:
            return state
    }
}

export const addOrEditQuestionAdmin = (state='none', action) =>{
    switch(action.type){
        case 'ADMIN_ADD_OR_EDIT':
            return action.state
        default:
            return state
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