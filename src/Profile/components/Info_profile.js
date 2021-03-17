import React, { Fragment } from 'react'
import { Experience } from './Info_profile_co/Experience'
import { Education } from './Info_profile_co/Education'
import { Location } from './Info_profile_co/Location'
import { Overview } from './Info_profile_co/Overview'
import { Skills } from './Info_profile_co/Skills'

export const Info_profile = () => {
    return (
        <Fragment>
            <Overview />
            <Experience />
            <Education />
            <Location />
            <Skills />
        </Fragment>
    )
}
