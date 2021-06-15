import React from 'react'
import { TableBody, TableRow, TableCell, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { deleteTransaction } from '../actions/stockaction';
import { useDispatch } from 'react-redux'

const TransactionTable = ({item}) => {
      
    const useStyles = makeStyles({
      button: {
        margin: "0 5px"
      }
    });
    const classes = useStyles();
    const dispatch = useDispatch()
    return (
        <TableRow key={item._id}>
            <TableCell align="left">{item.stockName}</TableCell>
            <TableCell align="left">{item.trade.toUpperCase()}</TableCell>
            <TableCell align="left">{item.trade === 'sell' ? item.sell[0].price : item.buy[0].price}</TableCell>
            <TableCell align="left">{item.trade === 'sell' ? item.sell[0].quantity : item.buy[0].quantity}</TableCell>
            <TableCell align="left">
                <Button className={classes.button} onClick={() => dispatch(deleteTransaction(item._id))} variant="contained" color="primary">
                Delete
            </Button>
            </TableCell>
        </TableRow>
    )
}

export default TransactionTable