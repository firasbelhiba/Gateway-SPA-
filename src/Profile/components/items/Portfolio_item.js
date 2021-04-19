import React from 'react'

const Portfolio_item = ({ portfolio }) => {
    return (
        <div className="col-lg-4 col-md-4 col-sm-6 col-6">
            <div className="gallery_pt">
                <img src={portfolio.image[0]} alt="" />
                <a href="#" title=""
                ><img src="assets/images/all-out.png" alt=""
                    /></a>
            </div>
        </div>
    )
}

export default Portfolio_item
