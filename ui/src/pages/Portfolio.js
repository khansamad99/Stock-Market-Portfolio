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
  
 
  const Portfolio = () => {
    const classes = useStyles();
    const [stocks,setStocks] = useState([]);

    useEffect(() => {
        fetch(`${API}/portfolio`,{method:"GET"})
          .then(res => res.json())
          .then(data => {
            setStocks(data);
            console.log(data);
          })
          .catch(err => console.log(err));
    },[]);
        const res = stocks.map(item => {
        return (
            <TableBody>
                <TableRow key={item._id}>
                  <TableCell align="left">{item.stockName}</TableCell>
                  <TableCell align="left">{item.currentPrice}</TableCell>
                  <TableCell align="left">{item.buyPrice}</TableCell>
                  <TableCell align="left">{item.sellPrice}</TableCell>
                  <TableCell align="left">{item.returns}</TableCell>
                  <TableCell align="left">{item.quantity}</TableCell>
                  {/* <TableCell align="left">
                     <BuyTrade name={item.name} type="Buy" price={item.buy[0].price} quantity={item.buy[0].quantity}/>
                     <SellTrade name={item.name} type="Sell" price={item.sell[0].price} quantity={item.sell[0].quantity}/>
                  </TableCell> */}
                </TableRow>
            </TableBody>
        )
    })
   
    return (
      <Fragment>
      <h1 className="text-center" >Portfolio</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Current Stock Price</StyledTableCell>
              <StyledTableCell align="left">AVG. Buy Price</StyledTableCell>
              <StyledTableCell align="left">AVG. Sell Price</StyledTableCell>
              <StyledTableCell align="left">Current Returns</StyledTableCell>
              <StyledTableCell align="left">Quantity</StyledTableCell>
              <StyledTableCell align="left">Buy/Sell</StyledTableCell>
            </TableRow>
          </TableHead>
           {res}
        </Table>
      </TableContainer>
      </Fragment>
    );
  }


  export default Portfolio;