import axios from "axios";
import { GET_STACKOVERFLOW_SCRAPED_DATA, SCRAPING_ERROR } from "./types";

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
