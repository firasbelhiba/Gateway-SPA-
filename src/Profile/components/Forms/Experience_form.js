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
        <Fragment>
            <div className="row">
                <div className="col-md-12">
                    <form action="index.html" method="post" className="form_create" onSubmit={e => onSubmit(e)}>
                        <h1 className="h1">Add Experience</h1>

                        <fieldset>
                            <legend><span className="number">1</span>Add any developper/programming  positions that you have had in the past</legend>

                            <label className="mt-5" htmlFor="name">Title:</label>
                            <input type="text"
                                placeholder="* Experience Title"
                                className="input"
                                name="title"
                                value={title}
                                onChange={e => onChange(e)}
                                required />
                            <small className="form-text">
                                Could be your own company or one you work for
                            </small>

                            <label className="mt-5" htmlFor="email">Company:</label>
                            <input type="text"
                                className="input"
                                placeholder="Company"
                                name="company"
                                value={company}
                                onChange={e => onChange(e)}
                                required />
                            <small className="form-text">
                                Could be your own or a company website
                            </small>


                            <label className="mt-5" htmlFor="name">Location:</label>
                            <input type="text"
                                className="input"
                                placeholder="Location"
                                name="location"
                                value={location}
                                onChange={e => onChange(e)} />
                            <small className="form-text">
                                City & state suggested
                        </small>


                            <label className="mt-5" htmlFor="name">From:</label>
                            <input type="date"
                                className="input"

                                name="from"
                                value={from}
                                onChange={e => onChange(e)}
                            />


                            <label className="mt-5" htmlFor="name">Current job : </label>
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
                            />Current job</p>

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


Experience_form.propTypes = {
    addExperience: PropTypes.func.isRequired,
}


export default connect(null, { addExperience })(withRouter(Experience_form))

