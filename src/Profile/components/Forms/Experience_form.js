import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addExperience } from '../../../actions/profile';

const Experience_form = ({ addExperience, history }) => {

    const [formData, setFormData] = useState({
        company: '',
        title: '',
        location: '',
        form: '',
        to: '',
        current: false,
        description: ''
    });

    const [toDateDisabled, toggleDisabled] = useState(false);

    const { company, title, location, from, to, current, description } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        addExperience(formData, history);
    }


    return (
        <div className="overview-box" id="experience-box">
            <div className="overview-edit">
                <h3>Add Experience</h3>
                <p className="mb-2">
                    <h1>Add any developper/programming  positions that you have had in the past</h1>
                </p>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-row">
                        <div className="col">
                            <input
                                type="text"
                                placeholder="* Job Title"
                                name="title"
                                value={title}
                                onChange={e => onChange(e)}
                                required
                            />
                        </div>
                        <div className="col">
                            <input
                                type="text"
                                placeholder="Company"
                                name="company"
                                value={company}
                                onChange={e => onChange(e)}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="col">
                            <input
                                type="text"
                                placeholder="Location"
                                name="location"
                                value={location}
                                onChange={e => onChange(e)}
                            />
                        </div>
                        <div className="col">
                            <h4 >Current Job : </h4>

                            <input
                                type="checkbox"
                                name="current"
                                value={current}
                                checked={current}
                                onChange={e => {
                                    setFormData({ ...formData, current: !current });
                                    toggleDisabled(!toDateDisabled)
                                }}
                            />
                        </div>
                    </div>


                    <div className="form-row">
                        <div className="col">
                            <h4 className="mb-2">From : </h4>
                            <input
                                type="date"
                                name="from"
                                value={from}
                                onChange={e => onChange(e)}
                            />
                        </div>
                        <div className="col">
                            <h4 className="mb-2">To date : </h4>
                            <input type="date"
                                name="to"
                                value={to}
                                onChange={e => onChange(e)}
                                disabled={toDateDisabled ? 'disabled' : ''}
                            />
                        </div>
                    </div>

                    <textarea
                        name="description"
                        cols="30"
                        rows="5"
                        placeholder="Job Description"
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


Experience_form.propTypes = {
    addExperience: PropTypes.func.isRequired,
}


export default connect(null, { addExperience })(withRouter(Experience_form))

