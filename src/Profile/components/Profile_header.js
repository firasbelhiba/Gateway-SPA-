import React from 'react'

export const Profile_header = (props) => {
    return (
        <div>
            <h3>{props.name}</h3>
            <div className="star-descp">
                <span>{props.status}</span>
                <ul>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star"></i></li>
                    <li><i className="fa fa-star-half-o"></i></li>
                </ul>
                <a href="#" title="">Status</a>
            </div>
        </div>
    )
}
