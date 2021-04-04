import React from 'react'

export const Cover_picture = () => {
    return (
        <section className="cover-sec">
            <img src="assets/images/resources/cover-img.jpg" alt="" />
            <div className="add-pic-box">
                <div className="container">
                    <div className="row no-gutters">
                        <div className="col-lg-12 col-sm-12">
                            <input type="file" id="file" />
                            <label htmlFor="file">Change Image</label>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
