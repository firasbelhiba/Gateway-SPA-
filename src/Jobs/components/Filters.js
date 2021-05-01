import React,{Fragment,useEffect,useState,useMemo} from 'react'
import { connect } from 'react-redux';
import {searchPrice,getJobs,searchJobType,searchCountry,searchAvailability,searchSkills } from '../../actions/Job';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Link } from "react-router-dom";
import Select from 'react-select'
import countryList from 'react-select-country-list'
import 'sanitize.css'




const Filters = ({searchCountry,searchAvailability,searchSkills,searchPrice,searchJobType,getJobs,Job:{jobs}}) => {

  const [value,setValue]=useState({})
  const [price,setPrice]=useState(null)
  const [jobType,setJobType]=useState("")
  const [country,setCountry]=useState("")
  const [availability,setAvailability]=useState("")
  const [skills,setSkills]=useState([])


  const options = useMemo(() => countryList().getData(), [])
  const styles = {
    valueContainer: (base, state) => {
      const height = "30px";
      
      
      return { ...base, height };
    }
  };

  const changePrice=(e)=>{
   e.preventDefault()
   setPrice(e.target.value)
   function miseEnAttente()
      {
      //Traitement
      getJobs()
          setTimeout(fonctionAExecuter, 500); //On attend 5 secondes avant d'exécuter la fonction
       }
       function fonctionAExecuter()
           {
           
             searchPrice(e.target.value)
          console.log(jobs)
           }
           miseEnAttente();
    
  }
  const changeJobType=(e)=>{
    e.preventDefault()
    setJobType(e.target.value)
    function miseEnAttente()
       {
       //Traitement
       getJobs()
           setTimeout(fonctionAExecuter, 500); //On attend 5 secondes avant d'exécuter la fonction
           console.log(jobs)
        }
        function fonctionAExecuter()
            {
              
            console.log(e.target.value)
              searchJobType(e.target.value)
           
            }
            miseEnAttente();

     
   }

   const changeAvailability=(e)=>{
    e.preventDefault()
    setAvailability(e.target.value)
    function miseEnAttente()
       {
       //Traitement
       getJobs()
           setTimeout(fonctionAExecuter, 500); //On attend 5 secondes avant d'exécuter la fonction
           console.log(jobs)
        }
        function fonctionAExecuter()
            {
              
            console.log(e.target.value)
              searchAvailability(e.target.value)
           
            }
            miseEnAttente();

     
   }  
   const changeSkills=(e)=>{
    e.preventDefault()
    setSkills(e.target.value)
    function miseEnAttente()
       {
       //Traitement
       getJobs()
           setTimeout(fonctionAExecuter, 500); //On attend 5 secondes avant d'exécuter la fonction
           console.log(jobs)
        }
        function fonctionAExecuter()
            {
              
            console.log(e.target.value)
              searchSkills(e.target.value)
           
            }
            miseEnAttente();
     
   }  


const changeHandler = value => {
   
  setValue(value)
       const {label}=value
       setCountry(label)

       console.log(label)
    function miseEnAttente()
    
       {
       //Traitement
       
       
       getJobs()
           setTimeout(fonctionAExecuter, 500); //On attend 5 secondes avant d'exécuter la fonction
           console.log(jobs)
        }
        function fonctionAExecuter()
            {
            
              searchCountry(label)
           console.log(jobs)
            }
            miseEnAttente();

  }
    return (
        <Fragment>
            <div className="col-lg-3">
                      <div className="filter-secs">
                        <div className="filter-heading">
                          <h3>Filters</h3>
                          <a href="#" title>Clear all filters</a>
                        </div>
                        <div className="paddy">
                          <div className="filter-dd">
                            <div className="filter-ttl">
                              <h3>Skills</h3>
                              <a href="#" title>Clear</a>
                            </div>
                            <form>
                              <input type="text" name="search-skills" placeholder="Search skills" />
                            </form>
                          </div>
                          <div class="filter-dd">
                        <div class="filter-ttl">
                       <h3>Availability</h3>
                           <a href="#" title="">Clear</a>
                          </div>
                           <form class="job-tp">
                           <select  value={availability}
                                 name="availability"
                                    onChange={(e)=>changeAvailability(e)}>
                             
                                <option> </option>
                                <option>Hourly</option>
                                 <option>Half time</option>
                                  <option>full time</option>
                                 </select>
                                  <i class="fa fa-ellipsis-v" aria-hidden="true"></i>
                             </form>
                              </div>
                          <div className="filter-dd">
                            <div className="filter-ttl">
                              <h3>Job Type</h3>
                              <a href="#" title>Clear</a>
                            </div>
                            <form className="job-tp">
                              
                            <input type="text" name="search-job-type" placeholder="Search job type" value={jobType} onChange={(e)=>{changeJobType(e)}}/>
                            </form>
                          </div>
                          <div className="filter-dd">
                            <div className="filter-ttl">
                              <h3>Pay Rate / Hr ($)</h3>
                              <a href="#" title>Clear</a>
                            </div>
                            
                            <form>
                              <input type="number" name="search-price" placeholder="Search price" value={price} onChange={(e)=>{changePrice(e)}}/>
                             
                            </form>
                          
                          
                          </div>
                         
                          <div className="filter-dd">
                            <div className="filter-ttl">
                              <h3>Countries</h3>
                              <a href="#" title>Clear</a>
                            </div>
                            <form className="job-tp">
                            <Select styles={styles} options={options} value={value} onChange={changeHandler} />   
                              
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
        </Fragment>
    )
}
const mapStateToProps = state => ({
  Job: state.Job,
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  {searchPrice,getJobs,searchJobType,searchCountry,searchAvailability,searchSkills}
)(Filters);


