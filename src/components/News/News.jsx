import React from 'react';

const News = ({ imgUrl, h6Text, pText }) => {
    return (
        <>
            <div className="col-md-6 col-lg-4 mrgn-bottom image-card wow fadeInLeft">
                <a href="/">
                    <img src={imgUrl} alt="Mache News" className="img-fluid" style={{ width: '100%' }} />
                </a>
                <div className="card-content">
                    <h6>{h6Text}</h6>
                    <p>{pText}</p>
                </div>
            </div>
        </>
    );
};

export default News;