import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createProfile, getCurrentProfile } from '../../../actions/profile';

const Profile_edit_form
    = ({ createProfile, history, getCurrentProfile, profile: { profile, loading } }) => {

        let thisProfile = JSON.parse(localStorage.getItem("profile"))

        const [formData, setFormData] = useState({
            company: '',
            website: '',
            location: '',
            status: '',
            skills: '',
            githubusername: '',
            bio: '',
            twitter: '',
            facebook: '',
            linkedin: '',
            youtube: '',
            instagram: ''
        });

        const [displaySocialInputs, toggleSocialInputs] = useState(false);

        useEffect(() => {
            getCurrentProfile();

            setFormData({
                company: loading || !thisProfile.company ? '' : thisProfile.company,
                website: loading || !thisProfile.website ? '' : thisProfile.website,
                location: loading || !thisProfile.location ? '' : thisProfile.location,
                status: loading || !thisProfile.status ? '' : thisProfile.status,
                skills: loading || !thisProfile.skills ? '' : thisProfile.skills.join(','),
                githubusername: loading || !thisProfile.githubusername ? '' : thisProfile.githubusername,
                bio: loading || !thisProfile.bio ? '' : thisProfile.bio,
                twitter: loading || !thisProfile.social ? '' : thisProfile.social.twitter,
                facebook: loading || !thisProfile.social ? '' : thisProfile.social.facebook,
                linkedin: loading || !thisProfile.social ? '' : thisProfile.social.linkedin,
                youtube: loading || !thisProfile.social ? '' : thisProfile.social.youtube,
                instagram: loading || !thisProfile.social ? '' : thisProfile.social.instagram,
            });

        }, [loading]);

        const {
            company,
            website,
            location,
            status,
            skills,
            githubusername,
            bio,
            twitter,
            facebook,
            linkedin,
            youtube,
            instagram,
        } = formData;

        const [inputValue, setValue] = useState("");


        const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

        const onSubmit = e => {
            e.preventDefault();
            createProfile(formData, history, true);
        }

        return (
            <Fragment>
                <div className="row">
                    <div className="col-md-12">
                        <form action="index.html" method="post" className="form_create" onSubmit={e => onSubmit(e)}>
                            <h1 className="h1_profile">Edit your profile</h1>

                            <fieldset>
                                <legend><span className="number">1</span> Let's get some information to make your profile stand out</legend>
                                <label className="mt-5" htmlFor="name">Company:</label>
                                <input
                                    className="input"
                                    type="text"
                                    id="name"
                                    placeholder="Company"
                                    name="company"
                                    value={company}
                                    onChange={e => onChange(e)} />

                                <small className="form-text">
                                    Could be your own company or one you work for
                            </small>

                                <label className="mt-5" htmlFor="email">Website:</label>
                                <input
                                    className="input"
                                    type="text"
                                    id="mail"
                                    placeholder="Website"
                                    name="website"
                                    value={website}
                                    onChange={e => onChange(e)} />
                                <small className="form-text">
                                    Could be your own or a company website
                            </small>


                                <label className="mt-5" htmlFor="name">Location:</label>
                                <input
                                    className="input"
                                    type="text"
                                    id="name"
                                    placeholder="Location"
                                    name="location"
                                    value={location}
                                    onChange={e => onChange(e)} />
                                <small className="form-text">
                                    City & state suggested
                            </small>


                                <label className="mt-5" htmlFor="name">Skills:</label>
                                <input
                                    className="input"
                                    type="text"
                                    id="name"
                                    placeholder="Skills"
                                    name="skills"
                                    value={skills}
                                    onChange={e => onChange(e)} />
                                <small className="form-text">
                                    Please use comma seperated values (eg. HTML , CSS , ...)
                            </small>


                                <label className="mt-5" htmlFor="name">Github username:</label>
                                <input
                                    className="input"
                                    type="text"
                                    id="name"
                                    placeholder="Github Username"
                                    name="githubusername"
                                    value={githubusername}
                                    onChange={e => onChange(e)} />
                                <small className="form-text">
                                    If you want your latest repos and a github link , include your username
                            </small>

                                <label className="mt-5" htmlFor="name">Bio:</label>
                                <input
                                    className="input"
                                    type="text"
                                    id="name"
                                    placeholder="A short bio of yourself"
                                    name="bio"
                                    value={bio}
                                    onChange={e => onChange(e)} />
                                <small className="form-text">
                                    Tell us a little about yourself
                            </small>



                                <label className="mt-5" htmlFor="job">Status:</label>
                                <select className="select" id="job" name="status" value={status} onChange={e => onChange(e)}>
                                    <option value="0">* Select Professional status</option>
                                    <optgroup label="Web">
                                        <option value="Front-End Developer">Front-End Developer</option>
                                        <option value="PHP Developer">PHP Developer</option>
                                        <option value="Python Developer">Python Developer</option>
                                        <option value="Rails Developer">Rails Developer</option>
                                        <option value="Web Designer">Web Designer</option>
                                        <option value="Wordpress Developer">Wordpress Developer</option>
                                    </optgroup>
                                    <optgroup label="Mobile">
                                        <option value="Android Developer">Android Developer</option>
                                        <option value="IOS Developer">IOS Developer</option>
                                        <option value="Mobile Designer">Mobile Designer</option>
                                    </optgroup>
                                    <optgroup label="Business">
                                        <option value="Business Owner">Business Owner</option>
                                        <option value="Freelancer">Freelancer</option>
                                    </optgroup>
                                </select>
                                <small className="form-text">
                                    Give us an idea of where you are at in your career
                            </small>

                            </fieldset>
                            <fieldset>
                                <legend onClick={() => toggleSocialInputs(!displaySocialInputs)}><span className="number">2</span> Social Network<small className="pointer">(Click here to add your links)</small></legend>

                                {displaySocialInputs && <Fragment>
                                    <div className="form-group social-input">
                                        <i className="fab fa-twitter fa-2x"></i>
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="Twitter URL"
                                            name="twitter"
                                            value={twitter}
                                            onChange={e => onChange(e)} />

                                    </div>

                                    <div className="form-group social-input">
                                        <i className="fab fa-facebook fa-2x"></i>
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="Facebook URL"
                                            name="facebook"
                                            value={facebook}
                                            onChange={e => onChange(e)}
                                        />

                                    </div>

                                    <div className="form-group social-input">
                                        <i className="fab fa-youtube fa-2x"></i>
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="Youtube URL"
                                            name="youtube"
                                            value={youtube}
                                            onChange={e => onChange(e)}
                                        />

                                    </div>

                                    <div className="form-group social-input">
                                        <i className="fab fa-linkedin fa-2x"></i>
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="Linkedin URL"
                                            name="linkedin"
                                            value={linkedin}
                                            onChange={e => onChange(e)}
                                        />

                                    </div>

                                    <div className="form-group social-input">
                                        <i className="fab fa-instagram fa-2x"></i>
                                        <input
                                            className="input"
                                            type="text"
                                            placeholder="Instagram URL"
                                            name="instagram"
                                            value={instagram}
                                            onChange={e => onChange(e)}
                                        />

                                    </div>
                                </Fragment>}


                            </fieldset>

                            <button className="button_form" type="submit">Save</button>
                            <Link to='/myprofile' className="btn btn-light my-1">Go Back</Link>
                        </form>
                    </div>
                </div>

            </Fragment>
        )
    }

Profile_edit_form
    .propTypes = {
    createProfile: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    profile: state.profile
});


export default connect(mapStateToProps, { createProfile, getCurrentProfile })(withRouter(Profile_edit_form
));
