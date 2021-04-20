import React, { Fragment, useEffect, useState } from 'react'
import { Link, useLocation, withRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateEducation, getCurrentProfile } from '../../../actions/profile';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Education_edit_form = ({
    updateEducation
    , getCurrentProfile
    , history
    , profile: { profile, loading } }) => {

    let query = useQuery();
    let thisProfile = JSON.parse(localStorage.getItem("profile"))


    const [formData, setFormData] = useState({
        school: '',
        degree: '',
        fieldofstudy: '',
        form: new Date(),
        to: new Date(),
        current: false,
        description: ''
    });

    const [toDateDisabled, toggleDisabled] = useState(false);


    let index = thisProfile.education.findIndex(x => x._id === query.get("id"));

    useEffect(() => {
        getCurrentProfile();

        setFormData({
            school: loading || !thisProfile.education[index].school ? '' : thisProfile.education[index].school,
            degree: loading || !thisProfile.education[index].degree ? '' : thisProfile.education[index].degree,
            fieldofstudy: loading || !thisProfile.education[index].fieldofstudy ? '' : thisProfile.education[index].fieldofstudy,
            form: loading || !thisProfile.education[index].form ? '' : thisProfile.education[index].form.toLocaleString(),
            to: loading || !thisProfile.education[index].to ? '' : thisProfile.education[index].to,
            current: loading || !thisProfile.education[index].current ? '' : thisProfile.education[index].current,
            description: loading || !thisProfile.education[index].description ? '' : thisProfile.education[index].description,
        });

    }, [loading]);

    const { school, degree, fieldofstudy, from, to, current, description } = formData;


    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });


    const onSubmit = e => {
        e.preventDefault();
        updateEducation(formData, history, query.get("id"))
    }


    return (
        <Fragment>
            <ToastContainer />
            <div className="row">
                <div className="col-md-12">
                    <form action="index.html" method="post" className="form_create" onSubmit={e => onSubmit(e)}>
                        <h1 className="h1">Add Your Education</h1>

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
                                required
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

Education_edit_form.propTypes = {
    updateEducation: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, { updateEducation, getCurrentProfile })(withRouter(Education_edit_form))
