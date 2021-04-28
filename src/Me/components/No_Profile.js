import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { createProfileViaLinkedin } from '../../actions/profile'

const No_Profile = ({ createProfileViaLinkedin, history }) => {

    const [loginForm, toggleLoginForm] = useState(false)

    const [formData, setFormData] = useState({
        link: '',
        cookie: ''
    });

    const {
        link,
        cookie,
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        createProfileViaLinkedin(formData, history);
    }

    const createProfile = (
        <Fragment>

            <legend><span className="number mt-4" style={{ color: 'white' }}>1</span>First Step : </legend>

            <label className="mt-5" htmlFor="name">Linkedin's account link</label>

            <form onSubmit={e => onSubmit(e)} style={{ maxWidth: '10000px' }}>
                <ul>
                    <li>
                        <input
                            className="input"
                            type="text"
                            id="link"
                            placeholder="Linkedin's account link"
                            name="link"
                            value={link}
                            onChange={e => onChange(e)}
                        />
                        <small className="form-text">
                            Put the link of your profile it should be like this : https://www.linkedin.com/in/xxxxxxxxxxxx/
                    </small>
                    </li>
                </ul>

                <legend><span className="number mt-4" style={{ color: 'white' }}>2</span>Second step :</legend>

                <label className="mt-5" htmlFor="name">Linkedin cookie :</label>

                <ul >
                    <li>
                        <input
                            className="input"
                            type="text"
                            id="cookie"
                            placeholder="li_at cookie"
                            name="cookie"
                            value={cookie}
                            onChange={e => onChange(e)}
                        />
                        <small className="form-text">
                            Put your linkedin cookie here , its name should be : li_at
                    </small>
                    </li>
                </ul>
                <button className="button_form" type="submit">Save</button>

            </form>
        </Fragment>
    )

    const linkedinShowFormButton = (
        <Fragment>
            <h4>Do you want to create a profile using your linkedin data ? </h4>
            <ul>
                <li>
                    <a onClick={() => toggleLoginForm(true)} title="" className="tw" style={{ color: 'white', cursor: 'pointer' }}
                    ><i className="fa fa-linkedin"></i>Create Profile via Linkedin</a>
                </li>
            </ul>
        </Fragment>
    )

    return (
        <Fragment>
            <span>You don't have yet a profile ? please add some info </span>

            <div className="user-profy">
                <Link to="/create-profile" title="">Create Profile</Link>
            </div>

            <div className="login-resources">
                {!loginForm ? linkedinShowFormButton : createProfile}
            </div>

        </Fragment>
    )
}

No_Profile.propTypes = {
    createProfileViaLinkedin: PropTypes.func.isRequired,
};

export default connect(null, { createProfileViaLinkedin })(No_Profile)
