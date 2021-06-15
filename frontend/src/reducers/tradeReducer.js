import { DELETE_TRANSACTION, GET_RETURNS, GET_TRADE, PLACE_TRADE ,SET_ERROR, SET_TRANSACTION } from '../actions/constant'

const initialState = {
    trade: {},
    transaction: [],
    error: "",
    portfolio: null,
    returns:0
}

const tradeReducer = (state = initialState, actions) => {
    switch(actions.type){
        case PLACE_TRADE:
            return {
                ...state,
                trade: actions.payload
            }
        case GET_TRADE:
            return {
                ...state,
                portfolio: actions.payload
            }
        case GET_RETURNS:
            return {
                ...state,
                returns: actions.payload
            }    
        case SET_ERROR:
            return {
                ...state,
                error: actions.payload
            }
        case SET_TRANSACTION:
            return {
                ...state,
                transaction: actions.payload
            }
        case DELETE_TRANSACTION: 
            return {
                ...state,
                transaction: state.transaction.filter(t => t._id !== actions.payload)
            }
        default:
            return state
    }           
}

export default tradeReducer