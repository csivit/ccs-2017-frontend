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
        case 'ADMIN_QUESTION_EDIT':
            return state.map((question) => (question._id === action.question._id)?action.question:question)
        default:
            return state
    }
}

export const currentQuestionQuiz = (state = 0, action) =>{
    switch(action.type){
        case 'QUIZ_CHANGE_QUESTION':
            return action.currentQuestion
        default:
            return state
    }
}

export const questionsQuiz = (state=[], action) =>{
    switch(action.type){
        case 'QUIZ_QUESTION_GET':
            return action.questions
        default:
            return state
    }
}

export const appHeader = (state="CSI Core Committee Selection", action) =>{
    switch(action.type){
        case 'CHANGE_APP_HEADER':
            return action.header
        default:
            return state
    }
}

export const timeQuiz = (state = Date.now(), action) => {
    switch(action.type){
        case 'QUIZ_START':
            return Date.now()
        case 'QUIZ_QUESTION_GET':
            return Date.parse(action.time_attempted)
        default:
            return state
    }
}

export const inQuiz = (state=false, action) => {
    switch(action.type){
        case 'QUIZ_START':
            return true;
        case 'QUIZ_STOP':
        case 'QUIZ_ANSWERS_SUBMITTED':
            return false;
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

export const userDetails = (state={}, action) => {
    switch(action.type){
        case 'QUIZ_USER_GET':
            return action.user;
        default:
            return state
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