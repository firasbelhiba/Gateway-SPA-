import React from 'react'

export const Item = () => {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="company_profile_info">
                <div className="company-up-info">
                    <img src="assets/images/resources/pf-icon12.png" alt="" />
                    <h3>John Doe</h3>
                    <h4>Graphic Designer</h4>
                    <ul>
                        <li><a href="#" title="" className="follow">Follow</a></li>
                        <li>
                            <a href="#" title="" className="message-us"
                            ><i className="fa fa-envelope"></i
                            ></a>
                        </li>
                        <li><a href="#" title="" className="hire-us">Hire</a></li>
                    </ul>
                </div>
                <a href="user-profile.html" title="" className="view-more-pro"
                >View Profile</a
                >
            </div>
        </div>
    )
}
