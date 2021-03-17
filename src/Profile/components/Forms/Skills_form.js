import React from 'react'

export const Skills_form = () => {
    return (
        <div className="overview-box" id="skills-box">
            <div className="overview-edit">
                <h3>Skills</h3>
                <ul>
                    <li>
                        <a href="#" title="" className="skl-name">HTML</a
                        ><a href="#" title="" className="close-skl"
                        ><i className="la la-close"></i
                        ></a>
                    </li>
                    <li>
                        <a href="#" title="" className="skl-name">php</a
                        ><a href="#" title="" className="close-skl"
                        ><i className="la la-close"></i
                        ></a>
                    </li>
                    <li>
                        <a href="#" title="" className="skl-name">css</a
                        ><a href="#" title="" className="close-skl"
                        ><i className="la la-close"></i
                        ></a>
                    </li>
                </ul>
                <form>
                    <input type="text" name="skills" placeholder="Skills" />
                    <button type="submit" className="save">Save</button>
                    <button type="submit" className="save-add">Save & Add More</button>
                    <button type="submit" className="cancel">Cancel</button>
                </form>
                <a href="#" title="" className="close-box"><i className="la la-close"></i></a>
            </div>
        </div>
    )
}
