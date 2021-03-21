import React from 'react';

import './Introduction.css';

const Introduction = props => {
    return (<div className="col-lg-6">
        <div className="cmp-info">
            <div className="cm-logo">
                <img src="assets/images/Gateway.png" alt="" />
                <p>
                    Workwise, is a global freelancing platform and social
                    networking where businesses and independent professionals
                    connect and collaborate remotely
            </p>
            </div>
            <img src="assets/images/cm-main-img.png" alt="" />
        </div>
    </div>);
};

export default Introduction;