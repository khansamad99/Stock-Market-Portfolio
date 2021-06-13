import React,{Fragment,useEffect,useState} from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';
import {API} from '../backend';
import { tradeStocks } from '../actions/stockaction';


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
    button: {
      margin: "0 5px"
    },
    container: {
      height: "100vh",
    },
    appBar: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
    hero: {
      margin: "25px 0",
      padding: "0 25px",
      display: 'flex',
      alignItems: "center"
    },
    heroRight: {
      padding: "0 5%",
    },
    heroTitle: {
      fontWeight: "bold",
      marginBottom: "15px"
    }
  });
  
 
  const Portfolio = () => {
    const classes = useStyles();
    const [stocks,setStocks] = useState([]);
    const [quantity,setQuantity] = useState(0);

    useEffect(() => {
        fetch(`${API}/portfolio`,{method:"GET"})
          .then(res => res.json())
          .then(data => {
            setStocks(data);
            console.log(data);
          })
          .catch(err => console.log(err));
    },[]);
    const dispatch = useDispatch()
        const res = stocks.map(item => {
        item.currentPrice = (400 + Math.random()*300).toFixed(2)
        return (
            <TableBody>
                <TableRow key={item._id}>
                  <TableCell align="left">{item.stockName}</TableCell>
                  <TableCell align="left">{item.currentPrice}</TableCell>
                  <TableCell align="left">{item.buyPrice}</TableCell>
                  <TableCell align="left">{item.sellPrice}</TableCell>
                  <TableCell align="left">{item.returns.toFixed(2)}</TableCell>
                  <TableCell align="left">{item.quantity}</TableCell>
                  <TableCell align="left"><TextField  onChange={e => setQuantity(e.target.value)}/></TableCell>
                  <TableCell align="left">
                    <Button className={classes.button} onClick={() => dispatch(tradeStocks(item.stockName, 'buy', item.currentPrice, quantity))} variant="contained" color="primary">
                      Buy
                    </Button>
                    <Button className={classes.button}onClick={() => dispatch(tradeStocks(item.stockName, 'sell', item.currentPrice, quantity))}  variant="contained" color="primary">
                      Sell
                    </Button>
                    <Button className={classes.button} variant="contained" color="primary">
                      Edit
                    </Button>
                  </TableCell>
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
      <AppBar position="static">
          <Toolbar>
              <Button color="inherit" href="/">Homepage</Button>
              <Button color="inherit" href="/transaction">Recent Transactions</Button>
          </Toolbar>
      </AppBar>
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
              <StyledTableCell align="left">Place a Trade</StyledTableCell>
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