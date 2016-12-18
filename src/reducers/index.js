import {
  LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_SUCCESS
} from '../actions/index.js'

export const auth = (state = {
    isFetching: false,
    isAuthenticated: sessionStorage.getItem('id_token') ? true : false
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

export const adminEditingQuestion = (state = false, action) => {
    switch(action.type){
        case 'ADMIN_EDITING_QUESTION':
            return action.isEdting
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