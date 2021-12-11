import React from 'react';

const SectionHeading = (props) => {
    const { text } = props;
    return (
        <div>
            <h2>{text}</h2>
            <hr />
        </div>
    );
};

export default SectionHeading;