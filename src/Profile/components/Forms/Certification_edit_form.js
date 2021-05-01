import React, { Fragment, useEffect, useState } from 'react'
import { Link, useLocation, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateCertification, getCurrentProfile } from "../../../actions/profile";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Certification_edit_form = ({ updateCertification, getCurrentProfile, history, profile: { profile, loading } }) => {

    let query = useQuery();
    let thisProfile = JSON.parse(localStorage.getItem("profile"));

    const [formData, setFormData] = useState({
        title: '',
        field: '',
        form: '',
        to: '',
        picture: '',
        code: ''
    });

    const { title, field, from, to, picture, code } = formData;


    let index = thisProfile.certification.findIndex(x => x._id === query.get("id"));

    useEffect(() => {
        getCurrentProfile();

        setFormData({
            title: loading || !thisProfile.certification[index].title ? '' : thisProfile.certification[index].title,
            field: loading || !thisProfile.certification[index].field ? '' : thisProfile.certification[index].field,
            form: loading || !thisProfile.certification[index].form ? '' : thisProfile.certification[index].form.toLocaleString(),
            to: loading || !thisProfile.certification[index].to ? '' : thisProfile.certification[index].to,
            code: loading || !thisProfile.certification[index].code ? '' : thisProfile.certification[index].code,
        });

    }, [loading]);


    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        updateCertification(formData, history, query.get("id"))
    }

    return (
        <Fragment>
            <div className="row">
                <div className="col-md-12">
                    <form action="index.html" method="post" className="form_create" onSubmit={e => onSubmit(e)}>
                        <h1 className="h1_profile">Add Certification</h1>

                        <fieldset>
                            <legend><span className="number">1</span>Add any certification that you have had in the past</legend>

                            <label className="mt-5" htmlFor="name">Title:</label>
                            <input type="text"
                                placeholder="* Experience Title"
                                className="input"
                                name="title"
                                value={title}
                                onChange={e => onChange(e)}
                                required />
                            <small className="form-text">
                                Could be any title that describe your volunteer experience
                    </small>

                            <label className="mt-5" htmlFor="email">Field:</label>
                            <input type="text"
                                className="input"
                                placeholder="Field"
                                name="field"
                                value={field}
                                onChange={e => onChange(e)}
                                required />
                            <small className="form-text">
                                Your field that you got certificated in
                            </small>



                            <label className="mt-5" htmlFor="name">From:</label>
                            <input type="date"
                                className="input"
                                name="from"
                                value={from}
                                onChange={e => onChange(e)}
                                required
                            />


                            <label className="mt-5" htmlFor="name">To:</label>
                            <input type="date"
                                className="input"
                                name="to"
                                value={to}
                                onChange={e => onChange(e)}
                                required
                            />

                            <label className="mt-5" htmlFor="name">Code:</label>
                            <input
                                type="text"

                                className="input"
                                name="code"
                                cols="30"
                                rows="5"
                                placeholder="Code"
                                value={code}
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


Certification_edit_form.propTypes = {
    updateCertification: PropTypes.func.isRequired,
    getCurrentProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,

}

const mapStateToProps = state => ({
    profile: state.profile
});

export default connect(mapStateToProps, { updateCertification, getCurrentProfile })(withRouter(Certification_edit_form))
