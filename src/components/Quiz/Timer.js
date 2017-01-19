import React, {Component} from 'react';

class TimerComponent extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
            time: this.props.time
        }

        this.tick = this.tick.bind(this)
    }
    
    componentDidMount() {
        this.timer = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }
    
    componentWillUpdate(nextProps, nextState) {
        if(nextState.time < 0){
            clearInterval(this.timer);
            this.setState({
                time: 0
            })
            alert("Time Up");
            this.props.onTimeUp();
        }
    }
    
    
    tick(){
        var time = this.state.time;
        this.setState({
            time: time - 1000
        })
    }

    render() {
        const seconds = parseInt((this.state.time / 1000) % 60);
        const minutes = parseInt((this.state.time / 1000) / 60);
        return (
            <div>
                <p>{(minutes >= 10)?minutes:('0' + minutes)} : {(seconds >= 10)?seconds:('0' + seconds)}</p>
            </div>
        );
    }
}

export default TimerComponent;