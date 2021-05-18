import React, {useEffect} from 'react';
import {getAllProfiles} from '../../actions/profile';
import {connect} from "react-redux";
import {Header} from "semantic-ui-react";

const TopUser = ({score, getAllProfiles, profile: {profiles, loading}}) => {
    useEffect(() => {
        getAllProfiles();
    }, []);

    var profileInfo = null

    for (var i in profiles) {
        if (profiles[i].user === score.user)
            profileInfo = profiles[i]
    }

    console.log(profileInfo)

    return loading || profileInfo === null ? (
        <div className="ui container segment" style={{display: 'flex', justifyContent: 'space-between'}}>
            <div className="ui segment">
                <div className="ui placeholder">
                    <div className="header">
                        <div className="line"/>
                        <div className="line"/>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className="ui container segment" style={{display: 'flex', justifyContent: 'space-between'}}>
            <div className="item" style={{width: '210px'}}>
                <img className="ui avatar image" src={profileInfo.avatar} alt="top"/>
                <div className="content">
                    <div className="ui sub header">{profileInfo.name}</div>
                    {profileInfo.status}
                </div>
            </div>
            <div><i
                className="trophy icon"/>{score.total}</div>
        </div>
    );
}
const mapStateToProps = (state) => ({
    profile: state.profile
});

export default connect(mapStateToProps, {getAllProfiles})(TopUser);
