import React from 'react';

const Info = ({ imgUrl, h6Text, pText }) => {
    return (
        <>
            <div className="col-md-1 col-lg-1 wow pulse">
                <img src={imgUrl} alt="Additional Info Icon" className="img-fluid" />
            </div>
            <div className="col-md-5 col-lg-3 mrgn-bottom wow fadeInDown">
                <h6>{h6Text}</h6>
                <p>{pText}</p>
            </div>
        </>
    );
};

export default Info;