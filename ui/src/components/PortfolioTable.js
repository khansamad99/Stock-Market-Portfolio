import React,{useState} from 'react'
import { makeStyles,withStyles } from '@material-ui/core/styles';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import TableRow from '@material-ui/core/TableRow';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';
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
  

const PortfolioTable = ({stocks}) => {
    const dispatch = useDispatch()
    const classes = useStyles();
    const [quantity,setQuantity] = useState(0);

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
}

export default PortfolioTable
