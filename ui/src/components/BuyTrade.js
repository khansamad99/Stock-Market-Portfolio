import React,{useState } from 'react'
import toastifier from 'toastifier'
import {useDispatch } from 'react-redux'
import { buyStocks } from '../actions/stockaction'

const BuyTrade = (name,price) => {
    const [quantity, setQuantity] = useState(0)
    const dispatch = useDispatch()
    const buy = () => {
        if(isNaN(parseInt(quantity)) || parseInt(quantity) === 0){
            toastifier("Enter Valid Quantity", { type: 'error', showIcon: true, animation: 'flip' })
        }
        else{
            dispatch(buyStocks(name,'Buy',parseFloat(price), parseInt(quantity)))
        }
    }

    return (
        <div>
            <form>
                <div>
                    <input value={quantity} onClick={() => setQuantity("")} onChange={(e) => setQuantity(e.target.value)} required placeholder="Enter Quantity" />
                </div>
                <div className="flex justify-center mt-8 items-center">
                    <button onClick={(e) => { e.preventDefault(); buy()}} type="submit" >Buy Stock</button>
                </div>
            </form>
        </div>
    )
}

export default BuyTrade
