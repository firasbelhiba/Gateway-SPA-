import React from 'react'

export const Widget_portfolio = ({ portfolio }) => {
    return (
        <div className="widget widget-portfolio">
            <div className="wd-heady">
                <h3>Portfolio</h3>
                <img src="assets/images/photo-icon.png" alt="" />
            </div>
            <div className="pf-gallery">
                <ul>
                    {portfolio.map(p => (
                        <li>
                            <a href="#" title="">
                                <img src={p.image} alt="" />
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
