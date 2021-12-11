import React from 'react';

const Button = (props) => {
    const { text } = props;

    return (
        <button type="button" className="btn btn-default">{text}</button>
    );
};

export default Button;