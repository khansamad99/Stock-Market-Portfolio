import React,{Fragment,useEffect} from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { useDispatch, useSelector } from 'react-redux'
import {getPortfolio } from '../actions/stockaction';
import PortfolioTable from '../components/PortfolioTable';


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
      margin:30,
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
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPortfolio()) 
    },[dispatch]);
    
    const stocks = useSelector(state => state.tradeReducer.portfolio)
    let res = 0
    
    // useEffect(() =>{
    //     dispatch(getReturns())
    // },[])
    // const returns = useSelector(state => state.tradeReducer.returns)
    // console.log(returns)
    
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
          {stocks && stocks.map(item => { 
          item.currentPrice  = (500 + Math.random()*100).toFixed(2)
          item.returns = (item.currentPrice - item.buyPrice)*item.quantity
          res = res + item.returns
          return(
            <PortfolioTable item={item}/>
          )
          })}
        </Table>
      </TableContainer>
      <Typography variant="h6" className={classes.title}>
              Total Returns:{res.toFixed(2)}
       </Typography>
      </Fragment>
    );
  }


  export default Portfolio;