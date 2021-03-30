import React,{Fragment} from 'react';
import { SearchBar } from '../layout/SearchBar';
import { Filters } from '../components/Filters' ;
import { JobPosts } from '../components/JobPosts';
import  Widget_sign_up  from '../../Forum/components/Widget_sign_up'
import { TopJobs } from '../components/TopJobs';
import { MostViewedJobs } from '../components/MostViewedJobs';
import { Footer } from '../layout/Footer';




export const Jobs = () => {
    return (
        <Fragment>
            <div className="wrapper">
         {/*<header>
              <Navbar/>
         </header>**/} 
               <SearchBar/>
          <main>
            <div className="main-section">
              <div className="container">
                <div className="main-section-data">
                  <div className="row">
                    <Filters/>
                    <JobPosts/>
                    <div className="col-lg-3">
                      <div className="right-sidebar">
                         <Widget_sign_up/>
                         <TopJobs/>
                         < MostViewedJobs/>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
        <Footer/>
        </Fragment>
    )
}


