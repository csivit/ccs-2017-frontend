import React from 'react';
import Paper from 'material-ui/Paper';

const FlexiblePaperComponent = (props) => {

    const styles = {
        maxWidth : props.paperWidth || 0,
        height: props.paperHeight || 0,
        top: props.paperTop || "15vh",
        position: "relative",
        margin: "auto",
        transitionDuration: '1s'
    } 

    const children = props.children;
    return (
        <Paper style={styles} className="card-main" zDepth={1}>
            {children}
        </Paper>
    );
};

export default FlexiblePaperComponent;