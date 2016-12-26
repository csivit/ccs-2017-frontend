import React, {Component} from 'react';
import TrackCard from './TrackCard';

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
    
    render() {
        return (
            <div className="dashboardContainer">
            <h1 style={styles.headingSecond}>Choose a track to get started</h1>
            <div style={styles.container}>
                <TrackCard/>
                <TrackCard/>
                <TrackCard/>
            </div>
            </div>
        );
    }
}

export default TrackChoosingComponent;