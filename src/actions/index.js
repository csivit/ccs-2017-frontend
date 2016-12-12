export const checkEmailResponse = (data) => ({
    type: 'CHECK_EMAIL_RESPONSE',
    data: data
})

export const checkEmailRequest = (email) => {
    return (dispatch) => {
        fetch('/checkEmail',{
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                email: email
            })
        }).then((res) =>{ 
            return res.json();
        }).then(json => dispatch(checkEmailResponse(json)));
    }
}

