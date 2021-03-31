import React, { Fragment } from 'react'
import { Experience } from './Info_profile_co/Experience'
import { Education } from './Info_profile_co/Education'
import { Location } from './Info_profile_co/Location'
import { Overview } from './Info_profile_co/Overview'
import { Skills } from './Info_profile_co/Skills'
import Profile from '../Pages/Profile'
import Intrests from './Info_profile_co/Intrests'

export const Info_profile = (props) => {
    return (
        <Fragment>
            <Overview bio={props.bio} />
            <Skills skills={props.skills} />
            <Intrests intrests={props.intrests} />
            <Experience experience={props.experience} />
            <Education />
            <Location location={props.location} />
        </Fragment>
    )
}
