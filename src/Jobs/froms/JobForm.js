import React,{Fragment,useState, useMemo,useEffect } from 'react'
import InputSkill from './InputSkill'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { setDisactive,addJob,getJobs, updateJob ,clearCurrent,setDisactiveReport} from '../../actions/Job';
import Select from 'react-select'
import countryList from 'react-select-country-list'
import 'sanitize.css'

 const JobForm = ({Job:{active,current}, setDisactive , addJob,getJobs,updateJob,clearCurrent ,setDisactiveReport}) => {
  const [value, setValue] = useState('aaaaaa');
    const [location, setCountry] = useState('aaaaaa');
    const [title, setJobType] = useState('');
    const [category, setcategory] = useState('python');
    const [availability, setAvailability] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [skills, setSkills] = useState([]);

   
    useEffect(() => {
      if (current) {
        setCountry(current.location);
        const pays = {
          label : current.location,
          value : countryList().getValue(current.location)
        }
        setValue(pays);
        setJobType(current.title);
        setcategory(current.category);
        setAvailability(current.availability);
        setPrice(current.price);
        setDescription(current.description);
        
        setSkills(Array.prototype.push.apply(skills, current.skills));
        console.log(current)
        console.log(skills)
         
       
      }else{
        setCountry("")
        setValue('');
        setJobType('');
        setcategory('');
        setAvailability('');
        setPrice('');
        setDescription('');
        
        setSkills(skills.splice(0,skills.length));
        console.log(skills)
        console.log(current)
      }
      
      },[current,active]);

    const options = useMemo(() => countryList().getData(), [])
    const styles = {
      valueContainer: (base, state) => {
        const height = "30px";
        
        
        return { ...base, height };
      }
    };
   
    const onSub=(e)=>{
      e.preventDefault()
     
     if(current){
      const updJob = {
        _id: current._id,
        location,
        title,
        category,
        availability,
        price,
        description,
        skills,
        
      };
      console.log("aaa");
      updateJob(updJob)
      clearCurrent()
      setDisactive();
     }
     else{

      const newJob = {
        location,
        title,
        category,
        availability,
        price,
        description,
        skills,
        
      };
      addJob(newJob);
      setDisactive();
      clearCurrent()
     }
       
  
       
        
       
    }
  
  const changeHandler = value => {
    const {label}=value
    setCountry(label)
    setValue(value)
  }
 const setInput=(e)=>{
   e.preventDefault();
 }
 return (
   <Fragment>
    <div className={`post-popup job_post ${active}`} >
        <div className="post-project">
          <h3>Post a job</h3>
          <div className="post-project-fields">
            <form onSubmit={e=>{onSub(e)}} onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}>
              <div className="row">
                <div className="col-lg-12">
                  <input type="text" name="title" value={title} onChange={(e)=>setJobType(e.target.value)} placeholder="job type" />
                </div>
                <div className="col-lg-12">  
               
                <div className="inp-field">     
                <Select styles={styles} options={options} value={value} onChange={changeHandler} />   
                
                </div>
                </div>
               
                <div className="col-lg-12">   
                    <p style={{ color: 'white' }}>pppppppp</p>
                </div>
                
                <div className="col-lg-12">
                  <div className="inp-field">
                    <select
                     value={category}
                     name="category"
                     onChange={(e)=>setcategory(e.target.value)}>
                    <option value="Science, Technology, Engineering and Mathematics">Science, Technology, Engineering and Mathematics</option>
                    <option value="Hospitality and Tourism">Hospitality and Tourism</option>
                    <option value="Education and Training">Education and Training</option>
                    <option value="Agriculture, Food and Natural Resources">Agriculture, Food and Natural Resources</option>
                    <option value="Architecture and Construction">Architecture and Construction</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <InputSkill setSkills={setSkills} skills={skills} onChange={(e)=>{setInput(e)}}/>
                </div>
                
                <div className="col-lg-6">
                  <div className="price-br">
                    <input type="number" name="price1" placeholder="Price" value={price} onChange={(e)=>setPrice(e.target.value)} />
                    <i className="la la-dollar" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="inp-field">
                    <select  value={availability}
                     name="availability"
                     onChange={(e)=>setAvailability(e.target.value)}>
                      <option>Full Time</option>
                      <option>Half time</option>
                      <option>Hourly</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <textarea name="description" placeholder="Description"  value={description} onChange={(e)=>setDescription(e.target.value)} />
                </div>
                <div className="col-lg-12">
                  <ul>
                    <li><button type="submit">Post</button></li>
                    <li><a href ="#" onClick={()=>{setDisactive();clearCurrent();}} title>Cancel</a></li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
          <a href ="#" onClick={()=>{setDisactive();clearCurrent();}} title><i className="la la-times-circle-o" /></a>
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
  { setDisactive , addJob,getJobs ,updateJob,clearCurrent,setDisactiveReport}
)(JobForm);