import { GET_TRADE, PLACE_TRADE ,SET_ERROR } from '../actions/constant'

const initialState = {
    trade: {},
    error: "",
    portfolio: null
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
        case SET_ERROR:
            return {
                ...state,
                error: actions.payload
            }
        default:
            return state
    }           
}

export default tradeReducer