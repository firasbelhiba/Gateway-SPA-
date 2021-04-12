import React from 'react'
import { Fragment } from 'react';
import { useState } from 'react';
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { Bids_profile } from '../../Profile/components/Bids_profile';
import Cover_picture from '../../Profile/components/Cover_picture';
import Edit_Profile from '../../Profile/components/Edit_Profile';
import { Feed_profile } from '../../Profile/components/Feed_profile';
import { Location_form } from '../../Profile/components/Forms/Location_form';
import { Overview_form } from '../../Profile/components/Forms/Overview_form';
import { Portfolio_form } from '../../Profile/components/Forms/Portfolio_form';
import { Skills_form } from '../../Profile/components/Forms/Skills_form';
import { Info_profile } from '../../Profile/components/Info_profile';
import { Jobs_profile } from '../../Profile/components/Jobs_profile';
import Main_left_sidebar from '../../Profile/components/Main_left_sidebar';
import { Payment_profile } from '../../Profile/components/Payment_profile';
import { People_viewed_profile } from '../../Profile/components/People_viewed_profile';
import Profile_Github from '../../Profile/components/Profile_Github';
import { Profile_header } from '../../Profile/components/Profile_header';
import { Review_profile } from '../../Profile/components/Review_profile';
import { Settings } from '../../Profile/components/Settings';
import { Widget_portfolio } from '../../Profile/components/Widget_portfolio';
import { Loading_spinner } from '../../Shared/layouts/Loading_spinner';
import { Link, useLocation } from "react-router-dom";
import { getProfileById } from "../../actions/profile";
import { useEffect } from 'react';
import Profile from '../../Profile/Pages/Profile';


function useQuery() {
    return new URLSearchParams(useLocation().search);
}
console.log("firas")

const Profileby = ({ getProfileById }) => {
    console.log("firas2")

    let query = useQuery();

    let thisProfile = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
        getProfileById(query.get("id"));
    }, [getProfileById]);



    return (
        <div>{thisProfile.user.name}</div>
    );
}


Profileby.propTypes = {
    getProfileById: PropTypes.func.isRequired,
}


export default connect(null, { getProfileById })(Profileby)
