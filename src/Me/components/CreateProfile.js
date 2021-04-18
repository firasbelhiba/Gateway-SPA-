import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createProfile } from '../../actions/profile';
import './Css/CreateProfile.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateProfile = ({ createProfile, history }) => {

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



    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        createProfile(formData, history)
    }

    return (
        <Fragment>
            <ToastContainer />
            <div className="row">
                <div className="col-md-12">
                    <form className="form_create" onSubmit={e => onSubmit(e)}>
                        <h1 className="h1">Create Your profile</h1>

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
                        <Link to='/me' className="btn btn-light my-1">Go Back</Link>
                    </form>
                </div>
            </div>

        </Fragment>
    )
}

CreateProfile.propTypes = {
    createProfile: PropTypes.func.isRequired,
};


export default connect(null, { createProfile })(withRouter(CreateProfile));
