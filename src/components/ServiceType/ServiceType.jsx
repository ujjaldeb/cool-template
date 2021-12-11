import React from 'react';

const ServiceType = ({ imgUrl, text }) => {

    return (
        <div className="col-md-6 col-lg-3 text-center wow fadeInLeft">
            <img src={imgUrl} alt="Service Icon" className="img-fluid" />
            <h6>{text}</h6>
        </div>
    );
};

export default ServiceType;