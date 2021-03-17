import React from 'react'

export const Education_form = () => {
    return (
        <div className="overview-box" id="education-box">
            <div className="overview-edit">
                <h3>Education</h3>
                <form>
                    <input type="text" name="school" placeholder="School / University" />
                    <div className="datepicky">
                        <div className="row">
                            <div className="col-lg-6 no-left-pd">
                                <div className="datefm">
                                    <input
                                        type="text"
                                        name="from"
                                        placeholder="From"
                                        className="datepicker"
                                    />
                                    <i className="fa fa-calendar"></i>
                                </div>
                            </div>
                            <div className="col-lg-6 no-righ-pd">
                                <div className="datefm">
                                    <input
                                        type="text"
                                        name="to"
                                        placeholder="To"
                                        className="datepicker"
                                    />
                                    <i className="fa fa-calendar"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <input type="text" name="degree" placeholder="Degree" />
                    <textarea placeholder="Description"></textarea>
                    <button type="submit" className="save">Save</button>
                    <button type="submit" className="save-add">Save & Add More</button>
                    <button type="submit" className="cancel">Cancel</button>
                </form>
                <a href="#" title="" className="close-box"><i className="la la-close"></i></a>
            </div>
        </div>
    )
}
