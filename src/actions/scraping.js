import axios from "axios";
import {
  GET_STACKOVERFLOW_SCRAPED_DATA,
  SCRAPING_ERROR,
  GET_TANITJOB_SCRAPED_DATA,
  GET_INDEED_SCRAPED_DATA,
} from "./types";

//Get scraped data
export const getScrapedData = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "http://localhost:5000/api/scrape/get-scraped-data-stackoverflow"
    );

    dispatch({
      type: GET_STACKOVERFLOW_SCRAPED_DATA,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: SCRAPING_ERROR,
      payload: { msg: e.response.statusText, status: e.response.status },
    });
  }
};

//Get scraped data tanitjob
export const getScrapedDataTJ = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "http://localhost:5000/api/scrape/get-scraped-data-tanitjob"
    );

    dispatch({
      type: GET_TANITJOB_SCRAPED_DATA,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: SCRAPING_ERROR,
      payload: { msg: e.response.statusText, status: e.response.status },
    });
  }
};

//Get scraped data Indeed
export const getScrapedDataIndeed = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "http://localhost:5000/api/scrape/get-scraped-data-indeed"
    );

    dispatch({
      type: GET_INDEED_SCRAPED_DATA,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: SCRAPING_ERROR,
      payload: { msg: e.response.statusText, status: e.response.status },
    });
  }
};
