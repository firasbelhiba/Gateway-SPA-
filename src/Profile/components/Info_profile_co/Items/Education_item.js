import React, { Fragment } from 'react'
import Moment from 'react-moment';


const Education_item = ({ education }) => {

    const educations = education.map(item => (
        <div key={item._id}>
            <h4 className="mt-4" style={{ color: '#17a2b8' }}>{item.school}</h4>
            <h1>{item.degree}</h1>
            <h1 className="mt-2 mb-2">Field of study : {item.fieldofstudy}</h1>
            <span style={{ color: '#8a97a0' }}>
                <Moment format='YYYY/MM/DD'>{item.from}</Moment>-{' '}
                {item.to === null ? ('Now') : (<Moment format='YYYY/MM/DD'>{item.to}</Moment>)}
            </span>
            <p>
                {item.description}
            </p>
        </div>
    ));

    return (
        <Fragment>
            {educations}
        </Fragment>
    )
}

export default Education_item
