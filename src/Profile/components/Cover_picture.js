import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateCoverPicture } from '../../actions/profile';


const Cover_picture = ({ cover, updateCoverPicture, showActions }) => {

    const uploadImage = (files) => {
        let file = files[0];
        let formData = new FormData()
        formData.append('image', file)
        updateCoverPicture(formData);
        console.log(formData)
    }

    return (
        <section className="cover-sec">
            {cover === null ? (
                <div className="box2 big">
                    <img className="profile_pic" src="assets/images/resources/black.jpg" alt="" />
                </div>
            ) :
                (
                    <div className="box2 big">
                        <img className="profile_pic" src={cover} alt="" />
                    </div>
                )
            }
            {

                showActions && (<div className="add-pic-box">
                    <div className="container">
                        <div className="row no-gutters">
                            <div className="col-lg-12 col-sm-12">
                                <input type="file" id="file" onChange={(e) => uploadImage(e.target.files)} />
                                <label htmlFor="file">Change Image</label>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </section>
    )
}

Cover_picture.defaultProps = {
    showActions: true,
};


Cover_picture.propTypes = {
    updateCoverPicture: PropTypes.func.isRequired,
};

export default connect(null, { updateCoverPicture })(Cover_picture)

