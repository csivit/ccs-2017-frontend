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

export const changePaperHeight = height => ({
    type: 'PAPER_CHANGE_HEIGHT',
    height
})

export const changePaperWidth = width => ({
    type: 'PAPER_CHANGE_WIDTH',
    width
})

export const changePaperTop = top => ({
    type: 'PAPER_CHANGE_TOP',
    top
})