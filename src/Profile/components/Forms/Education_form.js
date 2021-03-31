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
        <div className="overview-box" id="education-box">
            <div className="overview-edit">
                <h3>Add Your Education</h3>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-row">
                        <div className="col">
                            <input
                                type="text"
                                name="school"
                                value={school}
                                onChange={e => onChange(e)}
                                required
                                placeholder="School / University" />
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                placeholder="Degree or certificate"
                                name="degree"
                                value={degree}
                                onChange={e => onChange(e)}
                                required />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col">
                            <h4 class="mb-2">Current education : </h4>
                            <input
                                type="checkbox"
                                name="current"
                                value={current}
                                checked={current}
                                onChange={e => {
                                    setFormData({ ...formData, current: !current });
                                    toggleDisabled(!toDateDisabled)
                                }} />
                        </div>

                        <div className="col">
                            <input
                                type="text"
                                placeholder="Field of study"
                                name="fieldofstudy"
                                value={fieldofstudy}
                                onChange={e => onChange(e)} />
                        </div>
                    </div>
                    <div className="datepicky">
                        <div className="row">
                            <div className="col-lg-6 no-left-pd">
                                <div className="datefm">
                                    <input
                                        type="date"
                                        name="from"
                                        value={from}
                                        onChange={e => onChange(e)}
                                        className="datepicker"
                                    />
                                    <i className="fa fa-calendar"></i>
                                </div>
                            </div>
                            <div className="col-lg-6 no-righ-pd">
                                <div className="datefm">
                                    <input
                                        type="date"
                                        name="to"
                                        value={to}
                                        onChange={e => onChange(e)}
                                        disabled={toDateDisabled ? 'disabled' : ''}
                                        className="datepicker"
                                    />
                                    <i className="fa fa-calendar"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <textarea
                        name="description"
                        cols="30"
                        rows="5"
                        placeholder="Program Description"
                        value={description}
                        onChange={e => onChange(e)}
                    ></textarea>


                    <button type="submit" className="save">Save</button>
                    <Link to='/myprofile' className="cancel">Cancel</Link>
                </form>
                <a href="#" title="" className="close-box"><i className="la la-close"></i></a>
            </div>
        </div>
    )
}


Education_form.propTypes = {
    addExperience: PropTypes.func.isRequired,
}

export default connect(null, { addEducation })(withRouter(Education_form))
