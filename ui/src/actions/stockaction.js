import axios from "axios";
import toastifier from 'toastifier'
import 'toastifier/dist/toastifier.min.css';
import {API} from '../backend';
import {
  BUY_TRADE,
  SELL_TRADE,
  SET_ERROR,
} from "./constant";

export const buyStocks = (stockName,trade,price,quantity) => async(dispatch) => {
    try {
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
          const data = { stockName, trade,price, quantity };
          const res = await axios.post(
            `${API}/transactions`,
            data,
            config
          );
          dispatch({
            type: BUY_TRADE,
            payload: res.data,
          });

          toastifier("Trade completed", { showIcon: true, animation: 'flip' })

          setTimeout(() => {
            if (process.browser)
              window.location.reload()
          }, 2000)
    } catch (error) {
        toastifier(error.response.data.message, { type: 'error', showIcon: true, animation: 'flip' })
        console.log(error);
        dispatch({ type: SET_ERROR });
  }
}


export const sellStocks = (stockName,trade,price,quantity) => async(dispatch) => {
    try {
        const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
          const data = { stockName,trade,price, quantity };
          const res = await axios.post(
            `${API}/transactions`,
            data,
            config
          );
          dispatch({
            type: SELL_TRADE,
            payload: res.data,
          });
          toastifier("Trade completed", { showIcon: true, animation: 'flip' })
          setTimeout(() => {
            if (process.browser)
              window.location.reload()
          }, 2000)
    } catch (error) {
        toastifier(error.message, { type: 'error', showIcon: true, animation: 'flip' })
        console.error(error);
         dispatch({ type: SET_ERROR });
  }
}
