import React from 'react';

const BaseComponent = (props) => {
    return (
        <div>
            {props.children}
        </div>
    );
};

export default BaseComponent;