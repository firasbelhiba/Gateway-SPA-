import React from 'react'
import { Link } from 'react-router-dom'
import Portfolio_item from './items/Portfolio_item'


export const Portfolio_profile = ({ portfolio }) => {
    return (
        <div className="portfolio-gallery-sec">
            <h3>Portfolio</h3>
            <div className="portfolio-btn">
                <Link to="/create-portfolio" title=""
                ><i className="fas fa-plus-square"></i> Add Portfolio</Link>
            </div>
            <div className="gallery_pf">
                <div className="row">
                    {portfolio.map(p => (
                        <Portfolio_item portfolio={p} />
                    ))}
                </div>
            </div>
        </div>
    )
}
