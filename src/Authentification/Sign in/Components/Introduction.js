import React from 'react';

import './Introduction.css';

const Introduction = props => {
    return (<div className="col-lg-6">
        <div className="cmp-info">
            <div className="cm-logo">
                <img src="assets/images/Gateway.png" alt="" />
                <p>
                    Gateway application is a social network that focuses on
                    professional use and career development, it can be used by a
                    student, teacher, worker, human resource, manager, etc.
            </p>
            </div>
            <img src="assets/images/cm-main-img.png" alt="" />
        </div>
    </div>);
};

export default Introduction;