import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addEducation } from '../../../actions/profile';

const Education_form = ({ addEducation, history }) => {

    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        form: '',
        to: '',
        current: false,
        description: ''
    });

    const [toDateDisabled, toggleDisabled] = useState(false);

    const { school, degree, fieldofstudy, from, to, current, description } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        addEducation(formData, history);
    }


    return (
        <Fragment>
            <div className="row">
                <div className="col-md-12">
                    <form action="index.html" method="post" className="form_create" onSubmit={e => onSubmit(e)}>
                        <h1 className="h1_profile">Add Your Education</h1>

                        <fieldset>
                            <legend><span className="number">1</span>Add any school or bootcamp you attended</legend>

                            <label className="mt-5" htmlFor="name">Title:</label>
                            <input type="text"
                                placeholder="School or bootcamp"
                                name="school"
                                className="input"
                                value={school}
                                onChange={e => onChange(e)}
                                required />
                            <small className="form-text">
                                Could be your own company or one you work for
                            </small>

                            <label className="mt-5" htmlFor="email">Degree:</label>
                            <input type="text"
                                placeholder="Degree or certificate"
                                name="degree"
                                className="input"
                                value={degree}
                                onChange={e => onChange(e)}
                                required />
                            <small className="form-text">
                                Could be your own Degree or certificate
                        </small>


                            <label className="mt-5" htmlFor="name">Field of study:</label>
                            <input type="text"
                                className="input"
                                placeholder="Field of study"
                                name="fieldofstudy"
                                value={fieldofstudy}
                                onChange={e => onChange(e)} />
                            <small className="form-text">
                                Your field of study
                        </small>


                            <label className="mt-5" htmlFor="name">From:</label>
                            <input type="date"
                                className="input"
                                name="from"
                                value={from}
                                onChange={e => onChange(e)}
                            />


                            <label className="mt-5" htmlFor="name">Current  : </label>
                            <p><input
                                className="input"

                                type="checkbox"
                                name="current"
                                value={current}
                                checked={current}
                                onChange={e => {
                                    setFormData({ ...formData, current: !current });
                                    toggleDisabled(!toDateDisabled)
                                }}
                            />Current </p>

                            <label className="mt-5" htmlFor="name">To:</label>
                            <input type="date"
                                className="input"
                                name="to"
                                value={to}
                                onChange={e => onChange(e)}
                                disabled={toDateDisabled ? 'disabled' : ''}
                            />

                            <label className="mt-5" htmlFor="name">Description:</label>
                            <input
                                type="text"

                                className="input"
                                name="description"
                                cols="30"
                                rows="5"
                                placeholder="Experience Description"
                                value={description}
                                onChange={e => onChange(e)}
                            />

                        </fieldset>


                        <button className="button_form" type="submit">Save</button>
                        <Link to='/myprofile' className="btn btn-light my-1">Go Back</Link>
                    </form>
                </div>
            </div>

        </Fragment>
    )
}


Education_form.propTypes = {
    addExperience: PropTypes.func.isRequired,
}

export default connect(null, { addEducation })(withRouter(Education_form))
