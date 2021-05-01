import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addCertification } from '../../../actions/profile';



const Certification_form = ({ addCertification, history }) => {


    const [formData, setFormData] = useState({
        title: '',
        field: '',
        form: '',
        to: '',
        picture: '',
        code: ''
    });

    const { title, field, from, to, picture, code } = formData;


    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        addCertification(formData, history);
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
                            />


                            <label className="mt-5" htmlFor="name">To:</label>
                            <input type="date"
                                className="input"
                                name="to"
                                value={to}
                                onChange={e => onChange(e)}
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


Certification_form.propTypes = {
    addCertification: PropTypes.func.isRequired,
}

export default connect(null, { addCertification })(withRouter(Certification_form))
