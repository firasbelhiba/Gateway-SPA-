import React from 'react'
import { Item } from '../components/Item'

export const Profiles = () => {
    return (
        <section className="companies-info">
            <div className="container">
                <div className="company-title">
                    <h3>All Profiles</h3>
                </div>
                <div className="companies-list">
                    <div className="row">
                        <Item />
                    </div>
                </div>
            </div>
        </section>

    )
}
