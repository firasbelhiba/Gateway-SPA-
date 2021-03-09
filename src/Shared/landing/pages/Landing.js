import React from 'react'
import { Most_viewd_people } from '../components/Most_viewd_people'
import { Most_viewed_this_week } from '../components/Most_viewed_this_week'
import { Sign_up_popup } from '../components/Sign_up_popup'
import { Suggestions } from '../components/Suggestions'
import { Top_jobs } from '../components/Top_jobs'
import { Visitor_forum } from './Visitor_forum'



export const Landing = () => {
    return (
        <main>
            <div class="main-section">
                <div class="container">
                    <div class="main-section-data">
                        <div class="row">
                            <div class="col-lg-3 col-md-4 pd-left-none no-pd">
                                <div class="main-left-sidebar no-margin">
                                    <Most_viewed_this_week />
                                    <Suggestions />
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-8 no-pd">
                                <Visitor_forum />
                            </div>
                            <div class="col-lg-3 pd-right-none no-pd">
                                <div class="right-sidebar">
                                    <Sign_up_popup />
                                    <Top_jobs />
                                    <Most_viewd_people />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}