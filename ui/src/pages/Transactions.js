import React,{Fragment,useEffect,useState} from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import BuyTrade from '../components/BuyTrade';
import SellTrade from '../components/SellTrade';
import {API} from '../backend';


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    },
  });
  
 
  const Transactions = () => {
    const classes = useStyles();
    const [transaction,setTransaction] = useState([]);

    useEffect(() => {
        fetch(`${API}/alltransactions`,{method:"GET"})
          .then(res => res.json())
          .then(data => {
            setTransaction(data);
          })
          .catch(err => console.log(err));
    },[]);
    console.log(transaction)
        const res = transaction.map(item => {
        return (
            <TableBody>
                <TableRow key={item._id}>
                  <TableCell align="left">{item.stockName}</TableCell>
                  <TableCell align="left">{item.trade.toUpperCase()}</TableCell>
                  <TableCell align="left">{item.trade === 'sell' ? item.sell[0].price : item.buy[0].price}</TableCell>
                  <TableCell align="left">{item.trade === 'sell' ? item.sell[0].quantity : item.buy[0].quantity}</TableCell>
                </TableRow>
            </TableBody>
        )
    })
   
    return (
      <Fragment>
      <h1 className="text-center" >Recent Transactions</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Trade</StyledTableCell>
              <StyledTableCell align="left">Price</StyledTableCell>
              <StyledTableCell align="left">Quantity</StyledTableCell>
            </TableRow>
          </TableHead>
           {res}
        </Table>
      </TableContainer>
      </Fragment>
    );
  }


  export default Transactions;