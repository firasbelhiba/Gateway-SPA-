import React from 'react'

export const Profile_header = () => {
    return (
        <div>
            <h3>John Doe</h3>
            <div className="star-descp">
                <span>Graphic Designer at Self Employed</span>
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
