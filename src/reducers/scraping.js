import {
  GET_STACKOVERFLOW_SCRAPED_DATA,
  SCRAPING_ERROR,
  GET_TANITJOB_SCRAPED_DATA,
} from "../actions/types";

const initialState = {
  stackoverflow_data: [],
  tanitjob_data: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_STACKOVERFLOW_SCRAPED_DATA:
      localStorage.setItem("stackoverflow", JSON.stringify(payload));
      return {
        ...state,
        stackoverflow_data: payload,
        loading: false,
      };

    case GET_TANITJOB_SCRAPED_DATA:
      localStorage.setItem("tanitjob", JSON.stringify(payload));
      return {
        ...state,
        tanitjob_data: payload,
        loading: false,
      };

    case SCRAPING_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    default:
      return state;
  }
}
