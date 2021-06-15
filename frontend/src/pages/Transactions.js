import React,{Fragment,useEffect} from 'react';
import { makeStyles,withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import {deleteTransaction} from '../actions/stockaction'
import { getTransaction } from '../actions/stockaction'
import { useDispatch, useSelector } from 'react-redux'
import TransactionTable from '../components/TransactionTable';


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
  
  
 
  const Transactions = () => {
    const dispatch = useDispatch()
    const classes = useStyles();

    useEffect(() => {
      dispatch(getTransaction())
    },[dispatch]);
    const transaction = useSelector(state => state.tradeReducer.transaction)
    transaction.reverse()
   
    return (
      <Fragment>
       <AppBar position="static">
          <Toolbar>
              <Button color="inherit" href="/">Homepage</Button>
              <Button color="inherit" href="/portfolio">My Portfolio</Button>
          </Toolbar>
      </AppBar>
      <h1 className="text-center" >Recent Transactions</h1>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Name</StyledTableCell>
              <StyledTableCell align="left">Trade</StyledTableCell>
              <StyledTableCell align="left">Price</StyledTableCell>
              <StyledTableCell align="left">Quantity</StyledTableCell>
              <StyledTableCell align="left">DELETE</StyledTableCell>
            </TableRow>
          </TableHead>
           {transaction.map(item => 
              <TransactionTable item={item}/>
            )}
        </Table>
      </TableContainer>
      </Fragment>
    );
  }


  export default Transactions;