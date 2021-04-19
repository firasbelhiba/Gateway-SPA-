import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { addPortfolio } from '../../../actions/profile';
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Portfolio_form = ({ addPortfolio, history }) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");

    const onSubmit = e => {
        e.preventDefault();
        const data = new FormData();
        data.append("title", title);
        data.append("description", description);
        data.append("image", image);
        addPortfolio(data, history);
    }
    return (
        <Fragment>
            <div className="row">
                <div className="col-md-12">
                    <form action="index.html" method="post" className="form_create" onSubmit={e => onSubmit(e)}>
                        <h1 className="h1">Add an item to your Portfolio</h1>

                        <fieldset>
                            <legend><span className="number">1</span>Add any project or work you have had in the past </legend>

                            <label className="mt-5" htmlFor="name">Title:</label>
                            <input type="text"
                                placeholder="*Title"
                                className="input"
                                name="title"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                                required />
                            <small className="form-text">
                                Could be any title that describe your work/project
                            </small>

                            <label className="mt-5" htmlFor="name">Description:</label>
                            <input
                                type="text"

                                className="input"
                                name="description"
                                cols="30"
                                rows="5"
                                placeholder="*Description"
                                value={description}
                                onChange={e => setDescription(e.target.value)}
                            />
                            <small className="form-text">
                                Descripe your project with a paragraph
                            </small>

                            <div className="file-submit mt-5">
                                <input type="file" id="file" onChange={(e) => setImage(e.target.files[0])} />
                                <label htmlFor="file">Choose File</label>
                            </div>

                        </fieldset>


                        <button className="button_form" type="submit">Save</button>
                        <Link to='/myprofile' className="btn btn-light my-1">Go Back</Link>
                    </form>
                </div>
            </div>

        </Fragment>
    )
}

Portfolio_form.propTypes = {
    addPortfolio: PropTypes.func.isRequired,
};

export default connect(null, { addPortfolio })(Portfolio_form)
