import React,{Fragment} from 'react'

export const Footer = () => {
    return (
        <Fragment>
            <footer>
            <div className="footy-sec mn no-margin">
             <div className="container">
              <ul>
                <li><a href="help-center.html" title>Help Center</a></li>
                <li><a href="about.html" title>About</a></li>
                <li><a href="#" title>Privacy Policy</a></li>
                <li><a href="#" title>Community Guidelines</a></li>
                <li><a href="#" title>Cookies Policy</a></li>
                <li><a href="#" title>Career</a></li>
                <li><a href="forum.html" title>Forum</a></li>
                <li><a href="#" title>Language</a></li>
                <li><a href="#" title>Copyright Policy</a></li>
              </ul>
              <p><img src="images/copy-icon2.png" alt="" />Copyright 2021</p>
              <img className="fl-rgt" src="images/logo2.png" alt="" />
            </div>
          </div>
        </footer> 
        </Fragment>
    )
}
