import React from 'react'

export const Experience_form = () => {
    return (
        <div className="overview-box" id="experience-box">
            <div className="overview-edit">
                <h3>Experience</h3>
                <form>
                    <input type="text" name="subject" placeholder="Subject" />
                    <textarea></textarea>
                    <button type="submit" className="save">Save</button>
                    <button type="submit" className="save-add">Save & Add More</button>
                    <button type="submit" className="cancel">Cancel</button>
                </form>
                <a href="#" title="" className="close-box"><i className="la la-close"></i></a>
            </div>
        </div>
    )
}
