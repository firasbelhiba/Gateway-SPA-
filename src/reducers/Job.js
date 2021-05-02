
import {
  GET_JOBS,
  JOB_ERROR,
  UPDATE_LIKE,
  DELETE_JOB,
  ADD_JOB,
  GET_JOB,
  UPDATE_JOB,
  SET_CURRENT,
  SET_LOADING,
  CLEAR_CURRENT,
  GET_USER,
  SET_ACTIVE,
  UPDATE_SAVE_JOB,
  ADD_VIEWS,
  SET_DISACTIVE,
  ADD_COMME,
  DELETE_COMMENT,
  SEARCH_PRICE,
  SEARCH_JOB_TYPE,
  SEARCH_COUNTRY,
  SEARCH_AVAILABILITY,
  SEARCH_SKILLS,
  GET_JOBS_BY_USER,
  ADD_CANDIDATE,
  JOB_APPLY,
  SET_ACTIVE_REPORT,
  SET_DISACTIVE_REPORT,
  ADD_REP,
  SET_ACTIVE_MAIL,
  SET_DISACTIVE_MAIL,
  ADD_MAIL
  }from  "../actions/types";

const initialState = {
    jobs: [],
    current: null,
    loading: false,
    error: null,
    active : "",
    activeReport :"",
    activeMail :""
  };
  
// eslint-disable-next-line import/no-anonymous-default-export  
export default function (state = initialState, action) {
    
    switch (action.type) {
      case GET_JOBS:
        return {
          ...state,
          jobs: action.payload,
          loading: false
        };
        case GET_JOBS_BY_USER:
          return {
            ...state,
            jobs: action.payload,
            loading: false
          };
      
      case ADD_JOB:
        return {
            ...state,
            jobs: [...state.jobs, action.payload],
            loading: false
          };
      case DELETE_JOB:
        return {
            ...state,
            jobs: state.jobs.filter(job => job._id !== action.payload),
            loading: false
        };
        case UPDATE_JOB:
        return {
        ...state,
        jobs: state.jobs.map(job =>
          job._id === action.payload._id ? action.payload : job
        ),
        loading: false
      };
      case JOB_ERROR:
        return {
          ...state,
          error: action.payload
          
        };
      case UPDATE_LIKE:
        return {
          ...state,
          jobs: state.jobs.map((job) => 
          job._id === action.payload.id ? { ...job, likes: action.payload.likes } : job
          ),
          loading: false,
           };
      case ADD_CANDIDATE:
            return {
              ...state,
              jobs: state.jobs.map((job) => 
              job._id === action.payload.id ? { ...job, candidates: action.payload.candidates } : job
              ),
              loading: false,
               };
       case JOB_APPLY:
            return {
              ...state,
               jobs: state.jobs.map((job) => 
               job._id === action.payload.id ? { ...job, appliedTo: action.payload.appliedTo } : job
               ),
               loading: false,
                   };
      case ADD_VIEWS:
        return {
              ...state,
              jobs: state.jobs.map((job) => 
              job._id === action.payload.id ? { ...job, views: action.payload.views } : job
              ),
              loading: false,
               };
      case ADD_COMME:
             return {
              ...state,
               jobs: state.jobs.map((job) => 
               job._id === action.payload.id ? { ...job, comments: action.payload.comments } : job
               ),
              loading: false,
               };
       case ADD_REP:
                return {
                 ...state,
                  jobs: state.jobs.map((job) => 
                  job._id === action.payload.id ? { ...job, reports: action.payload.reports } : job
                  ),
                 loading: false,
                  };

        case DELETE_COMMENT:
            return {
              ...state,
              jobs: state.jobs.map((job) => 
                job._id === action.payload.id ? { ...job, comments: action.payload.comments } : job
               ),
                  loading: false,
             };

                    
        case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case SET_ACTIVE:
        return {
          ...state,
          active: "active",
          activeReport: "",
          activeMail :""
        };  
    case SET_DISACTIVE:
        return {
          ...state,
          active: ""
        };  
    case SET_ACTIVE_REPORT:
          return {
            ...state,
            activeReport: "active",
            active: "",
            activeMail :""
          };  
    case SET_DISACTIVE_REPORT:
          return {
            ...state,
            activeReport: ""
          };      
    case SET_ACTIVE_MAIL:
            return {
              ...state,
              activeMail: "active",
              active: "",
              activeReport: ""
            };  
    case SET_DISACTIVE_MAIL:
            return {
              ...state,
              activeMail: ""
            };  
      case ADD_MAIL:
          return state;                 

    case UPDATE_SAVE_JOB:
        return {
          ...state,
          loading: false,
        };  
    case SEARCH_PRICE:
          return {
            ...state,
            jobs: state.jobs.filter((job) => job.price.toString().startsWith(action.payload)),
            loading: false,
          };  
    case SEARCH_JOB_TYPE:
            return {
              ...state,
              jobs: state.jobs.filter((job) => job.title.toString().startsWith(action.payload)),
              loading: false,
            };  
    case SEARCH_COUNTRY:
        return {
            ...state,
            jobs: state.jobs.filter((job) => job.location.toString().startsWith(action.payload)),
            loading: false,
            };   
    case SEARCH_AVAILABILITY:
          return {
            ...state,
            jobs: state.jobs.filter((job) => job.availability.toString().startsWith(action.payload)),
            loading: false,
          };  
    case SEARCH_SKILLS:
          return {
            ...state,
            jobs: state.jobs.filter((job) => job.category.toString().startsWith(action.payload)),
            loading: false,
          };    
        
      default:
        return state;
    }
  }
  