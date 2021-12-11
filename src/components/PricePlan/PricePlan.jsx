import React from 'react';

const PricePlan = ({ price, plan, projectNum, storageCapacity }) => {
    return (
        <div className="col-md-6 col-lg-3 mrgn-bottom wow fadeInLeft">
            <div className="plan-hover">
                <div className="price-plan">
                    <p>$<span>{price}</span><br />per month</p>
                </div>
                <div className="plan-content">
                    <button type="button" className="btn btn-default btn-top">{plan}</button>
                    <ul className="list-unstyled text-center">
                        <li>{projectNum} Projects</li>
                        <li>{storageCapacity} Storage</li>
                        <li>Notification Settings</li>
                        <li>Password Protection</li>
                    </ul>
                    <button type="button" className="btn btn-default btn-bottom">buy now</button>
                </div>
            </div>
        </div>
    );
};

export default PricePlan;