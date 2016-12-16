import React from 'react';
import Paper from 'material-ui/Paper';

const FlexiblePaperComponent = (props) => {

    const styles = {
        maxWidth : props.paperWidth,
        height: props.paperHeight,
        top: props.paperTop || "15vh",
        position: "relative",
        margin: "auto"
    } 

    const children = props.children;
    return (
        <Paper style={styles} className="card-main" zDepth={1}>
            {children}
        </Paper>
    );
};

export default FlexiblePaperComponent;