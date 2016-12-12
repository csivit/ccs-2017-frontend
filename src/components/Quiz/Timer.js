import React from 'react';



const TimerComponent = (props) => {
    return (
        <div>
            <p id="QuizTimer">Time remaining : <span id="QuizTime">{props.time}</span></p>
        </div>
    );
};

export default TimerComponent;