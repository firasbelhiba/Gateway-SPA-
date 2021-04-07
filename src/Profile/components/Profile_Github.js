import React, { useEffect } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getGithubRepos } from "../../actions/profile";
import { Loading_spinner } from '../../Shared/layouts/Loading_spinner';

const Profile_Github = ({ username, getGithubRepos, repos }) => {

    useEffect(() => {
        getGithubRepos(username);
    }, [getGithubRepos])

    return (
        <div className="suggestions full-width">
            <div className="sd-title">
                <h3>Github repos</h3>
                <i className="la la-ellipsis-v"></i>
            </div>
            <div className="suggestions-list">
                {repos === null ? (<Loading_spinner />) : (
                    repos.map(repo => (
                        <div className="suggestion-usd">
                            <img src="assets/images/resources/s1.png" alt="" />
                            <div className="sgt-text">
                                <h4>{repo.name}</h4>
                                <span></span>
                            </div>
                            <a href={repo.html_url} target="_blank" rel="noopener noreferrer"><i className="la la-plus"></i></a>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

Profile_Github.propTypes = {
    getGithubRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
    username: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
    repos: state.profile.repos
});

export default connect(mapStateToProps, { getGithubRepos })(Profile_Github)
