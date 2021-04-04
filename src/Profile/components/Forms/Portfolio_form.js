import React from 'react'

export const Portfolio_form = () => {
    return (
        <div className="overview-box" id="create-portfolio">
            <div className="overview-edit">
                <h3>Create Portfolio</h3>
                <form>
                    <input type="text" name="pf-name" placeholder="Portfolio Name" />
                    <div className="file-submit">
                        <input type="file" id="file" />
                        <label htmlFor="file">Choose File</label>
                    </div>
                    <div className="pf-img">
                        <img src="assets/images/resources/np.png" alt="" />
                    </div>
                    <input
                        type="text"
                        name="website-url"
                        placeholder="htp://www.example.com"
                    />
                    <button type="submit" className="save">Save</button>
                    <button type="submit" className="cancel">Cancel</button>
                </form>
                <a href="#" title="" className="close-box"><i className="la la-close"></i></a>
            </div>
        </div>
    )
}
