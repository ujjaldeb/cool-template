import React from 'react';
import SectionHeading from '../SectionHeading/SectionHeading';

const SectionTop = (props) => {
    const { h2Text, pText } = props;

    return (
        <div>
            <div className="col-lg-12 text-center wow fadeInDown">
                <SectionHeading text={h2Text} />
            </div>
            <div className="col-lg-8 offset-lg-2 text-center wow fadeInUp">
                <p>{pText}</p>
            </div>
        </div>
    );
};

export default SectionTop;