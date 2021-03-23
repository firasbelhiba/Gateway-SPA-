import React, { Fragment } from 'react'
import Suggestions from '../components/Suggestions'
import User_data from '../components/User_data'
import Tags from '../components/Tags'
import Forum_header from '../components/Forum_header'
import Post_item from '../components/Post_item'
import Top_profiles from '../components/Top_profiles'
import Widget_sign_up from '../components/Widget_sign_up'
import Top_jobs from '../components/Top_jobs'
import Most_viewed from '../components/Most_viewed'
import Most_viewed_people from '../components/Most_viewed_people'
import Post_form from '../components/Form/Post_form'
import Post_forum2 from '../components/Form/Post_forum2'



const Forum = () => {
    return (
        <Fragment>
            <body oncontextmenu="return false;">
                <div class="wrapper">

                    <main>
                        <div class="main-section">
                            <div class="container">
                                <div class="main-section-data">
                                    <div class="row">
                                        <div class="col-lg-3 col-md-4 pd-left-none no-pd">
                                            <div class="main-left-sidebar no-margin">
                                                <User_data />
                                                <Suggestions />
                                                <Tags />
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-8 no-pd">
                                            <div class="main-ws-sec">
                                                <Forum_header />
                                                <Post_item />
                                                <Top_profiles />
                                            </div>
                                        </div>
                                        <div class="col-lg-3 pd-right-none no-pd">
                                            <div class="right-sidebar">
                                                <Widget_sign_up />
                                                <Top_jobs />
                                                <Most_viewed />
                                                <Most_viewed_people />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main>
                    <Post_form />
                    <Post_forum2 />

                </div>

            </body>
        </Fragment>
    )
}

export default Forum
