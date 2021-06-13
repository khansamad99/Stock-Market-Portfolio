import axios from "axios";
import toastifier from 'toastifier'
import 'toastifier/dist/toastifier.min.css';
import {API} from '../backend';
import {
  GET_TRADE,
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
          const data = { stockName, trade, currentPrice, quantity};
          console.log("chala2");
          const res = await axios.post(
            `${API}/transactions`,
            data,
            config
          );
          console.log("chala3");
          dispatch({
            type: PLACE_TRADE,
            payload: res.data,
          });
          toastifier("Trade completed", { showIcon: true, animation: 'flip' })
          console.log("chala");
          dispatch(getPortfolio())
    } catch (error) {
        toastifier(error.message, { type: 'error', showIcon: true, animation: 'flip' })
        console.log(error);
        dispatch({ type: SET_ERROR });
  }
}

export const getPortfolio = () => async dispatch => {
  try {
    const res = await axios.get(
      `${API}/portfolio`
    );
    console.log(res);
    dispatch({
      type: GET_TRADE,
      payload: res.data,
    });
  } catch (error) {
    toastifier("Cant fetch data now", { type: 'error', showIcon: true, animation: 'flip' })
    console.log(error);
    dispatch({ type: SET_ERROR });
}
}
// export const deleteTransaction = (id) => async(dispatch) => {
//   try {
//       const config = {
//           headers: {
//             "Content-Type": "application/json",
//           },
//         };
//         const data = { id};
//         const res = await axios.delete(
//           `${API}/transactions`,
//           data,
//           config
//         );
//         dispatch({
//           type: DELETE_TRANSACTION,
//           payload: res.data,
//         });
//         toastifier("Transaction Deleted", { showIcon: true, animation: 'flip' })
//         setTimeout(() => {
//           if (process.browser)
//             window.location.reload()
//         }, 500)
//   } catch (error) {
//       toastifier(error.response.data.message, { type: 'error', showIcon: true, animation: 'flip' })
//       console.log(error);
//       dispatch({ type: SET_ERROR });
// }
// }