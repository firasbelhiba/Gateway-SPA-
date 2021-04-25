import React, { Fragment } from 'react'
import './Css/Notfound.css'

const Notfound = () => {
    return (
        <Fragment>
            <div className="whole">
                <div class="container-404">
                    <input id="switch" type="checkbox" />
                    <div class="ellipse"></div>
                    <div class="ray"></div>
                    <div class="head"></div>
                    <div class="neck"></div>
                    <div class="whole">
                        <label for="switch"></label>
                    </div>
                </div>
                <div class="container">
                    <div class="msg msg_1">404</div>
                    <div class="msg msg_2">Page Not Found</div>
                </div>
            </div>
        </Fragment>
    )
}

export default Notfound
