export const checkEmailResponse = (data) => ({type: 'CHECK_EMAIL_RESPONSE', data: data})

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'

function requestLogout() {
  return {type: LOGOUT_REQUEST, isFetching: true, isAuthenticated: true}
}

function receiveLogout() {
  return {type: LOGOUT_SUCCESS, isFetching: false, isAuthenticated: false}
}

export const addOrEditQuestionAdmin = (state) =>{
  return {type: 'ADMIN_ADD_OR_EDIT', state}
}

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const requestLogin = (creds) => {
  return {type: LOGIN_REQUEST, isFetching: true, isAuthenticated: false, creds}
}

export const receiveLogin = (user) => {
  return {type: LOGIN_SUCCESS, isFetching: false, isAuthenticated: true, id_token: user.token}
}

export const loginError = (message) => {
  return {type: LOGIN_FAILURE, isFetching: false, isAuthenticated: false, message}
}

export const apiError = (message) =>{
  return {type: 'API_ERROR', message}
}

export const addQuestionSuccess = (data) => {
  return {type: 'ADMIN_QUESTION_ADD', question: data.question}
}

export const getQuestionsAdminSuccess = (data) => {
  return {type: 'ADMIN_QUESTION_GET', questions: data.questions}
}

export const getQuestionsQuizSuccess = (data) => {
  return {type: 'QUIZ_QUESTION_GET', questions: data.questionSet._questions, time_attempted: data.questionSet.attemptedOn}
}

export const checkEmailRequest = (email) => {
  return (dispatch) => {
    fetch('/checkEmail', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
      body: JSON.stringify({email: email})
    }).then((res) => {
      return res.json();
    }).then(json => dispatch(checkEmailResponse(json)));
  }
}

export const loginRequest = (values) => {
  return (dispatch) => {
    dispatch(requestLogin(values))
    fetch('/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json'
      },
        body: JSON.stringify(values)
      })
      .then(response => response.json().then(user => ({user, response})))
      .then(({user, response}) => {
        if (!response.ok) {
          dispatch(loginError(user.message))
          return Promise.reject(user)
        } else {
          sessionStorage.setItem('id_token', user.token)
          dispatch(receiveLogin(user))
        }
      })
      .catch(err => console.log("Error: ", err))
  }
}

export const getQuestionsAdmin = () => {
    return (dispatch) => {
      fetch('/admin/questions')
      .then(response => response.json().then(questions => ({questions, response})))
      .then(({questions, response}) => {
        if (!response.ok) {
          dispatch(apiError(questions.message))
          return Promise.reject(questions)
        } else {
          dispatch(getQuestionsAdminSuccess(questions))
        }
      })
      .catch(err => console.log("Error: ", err))
    }
}

export const getQuestionsQuiz = (type) => {
    return (dispatch) => {
      fetch('/user/getQuestions/'+ type,{
        headers: {
        Accept: 'application/json',
        Authorization: sessionStorage.getItem('id_token') || ''
        }
      })
      .then(response => response.json().then(questions => ({questions, response})))
      .then(({questions, response}) => {
        if (!response.ok) {
          dispatch(apiError(questions.message))
          return Promise.reject(questions)
        } else {
          console.log(questions);
          dispatch(getQuestionsQuizSuccess(questions))
        }
      })
      .catch(err => console.log("Error: ", err))
    }
}

export const addQuestionRequest = (values) => {
  return (dispatch) => {
    fetch('/admin/questions/addQuestion', {
      method: 'POST',
      body: values
      })
      .then(response => response.json().then(question => ({question, response})))
      .then(({question, response}) => {
        if (!response.ok) {
          dispatch(apiError(question.message))
          return Promise.reject(question)
        } else {
          
          dispatch(addQuestionSuccess(question))
        }
      })
      .catch(err => console.log("Error: ", err))
  }
}


export function logoutUser() {
  return dispatch => {
    dispatch(requestLogout())
    sessionStorage.removeItem('id_token')
    dispatch(receiveLogout())
  }
}

export const changeCurrentQuestion = currentQuestion => ({type: 'QUIZ_CHANGE_QUESTION', currentQuestion})

export const changePaperHeight = height => ({type: 'PAPER_CHANGE_HEIGHT', height})

export const changePaperWidth = width => ({type: 'PAPER_CHANGE_WIDTH', width})

export const changePaperTop = top => ({type: 'PAPER_CHANGE_TOP', top})