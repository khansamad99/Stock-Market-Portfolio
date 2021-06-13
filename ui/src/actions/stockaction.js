import axios from "axios";
import toastifier from 'toastifier'
import 'toastifier/dist/toastifier.min.css';
import {API} from '../backend';
import {
  PLACE_TRADE,
  SET_ERROR,
} from "./constant";

export const tradeStocks = (stockName,trade,currentPrice,quantity) => async(dispatch) => {
    try {
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
          const data = { stockName, trade,currentPrice, quantity};
          const res = await axios.post(
            `${API}/transactions`,
            data,
            config
          );
          dispatch({
            type: PLACE_TRADE,
            payload: res.data,
          });
          toastifier("Trade completed", { showIcon: true, animation: 'flip' })
    } catch (error) {
        toastifier(error.response.data.message, { type: 'error', showIcon: true, animation: 'flip' })
        console.log(error);
        dispatch({ type: SET_ERROR });
  }
}