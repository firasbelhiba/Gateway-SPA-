import React,{Fragment,useState} from 'react';
import  Filters  from '../components/Filters' ;
import  JobPosts  from '../components/JobPosts';
import  WidgetInterview  from '../components/WidgetInterview'
import  TopJobs  from '../components/TopJobs';
import  MostViewedJobs  from '../components/MostViewedJobs';
import { Footer } from '../layout/Footer';
import  JobForm  from '../froms/JobForm'
import ReportForm from '../froms/ReportForm'
import MailForm from '../froms/MailForm';
import VideoChat from '../video/VideoChat';



export const Jobs = () => {
  
    return (
        <Fragment>
          <body oncontextmenu="return false;">
            <div className="wrapper">
         {/*<header>
              <Navbar/>
         </header>**/} 
               
          <main>
            <div className="main-section">
              <div className="container">
                <div className="main-section-data">
                  <div className="row">
                    <Filters/>
                    <JobPosts />
                    <div className="col-lg-3">
                      <div className="right-sidebar">
                         <WidgetInterview/>
                         <TopJobs />
                         < MostViewedJobs/>                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <JobForm  />
          <ReportForm />
          <MailForm />
        </div>
        </body>
        <Footer/>
        </Fragment>
    )
}


export default Jobs


