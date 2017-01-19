import React, {Component} from 'react';
import TrackCard from './TrackCard';
import editor from '../../svg/editor.svg';
import code from '../../svg/coding.svg';
import bars from '../../svg/bars-chart.svg';
import {connect} from 'react-redux';
import {getUserQuizRequest} from '../../actions/index';

const tracks = {
    tech: {
        image: code,
        name: "Technical",
        quizType: 'tech'
    },
    management: {
        image: bars,
        name: "Management",
        quizType: 'management'
    },
    creative: {
        image: editor,
        name: "Creative",
        quizType: 'creative'
    }
}

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row wrap'
    },
    headingSecond:{
        textAlign: 'center',
        fontWeight: 200,
        fontSize: '3rem',
        margin: 0,
        marginBottom: '5%'
    }        
}

class TrackChoosingComponent extends Component {

    componentDidMount() {
        this.props.getDetails();
    }
    
    
    render() {
        const {userDetails} = this.props;
        return (
            <div className="dashboardContainer">
            <h1 style={styles.headingSecond}>Choose a track to get started</h1>
            {(userDetails._id)&&
            <div style={styles.container}>
                <TrackCard isTaken={userDetails.testTaken.tech} track={tracks.tech}/>
                <TrackCard isTaken={userDetails.testTaken.management} track={tracks.management}/>
                <TrackCard isTaken={userDetails.testTaken.creative} track={tracks.creative}/>
            </div>
            }
            </div>
        );
    }
}

const mapStateToProps = state => ({
    userDetails: state.userDetails
})

const mapDispatchToProps = dispatch => ({
    getDetails: () => dispatch(getUserQuizRequest())
})
export default connect(mapStateToProps, mapDispatchToProps)(TrackChoosingComponent);