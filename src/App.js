import './App.css';
import { useState, useEffect } from 'react'
import Axios from 'axios'
import Header from './components/Header';
import Footer from './components/Footer';
import Table from './components/Table'

function App() {

  const colNames = ['Id','Balance','Equity','Market Watch Time']
  
  const [tradeList, setTradeList] = useState([])

  useEffect(()=>{
    Axios.get("https://equity-bot-app.herokuapp.com/trades/50")
      .then((response) =>{
        setTradeList(response.data)
      })
  }, [])
  
  return (
    <div className="App">
        <Header title={"Equity Dashboard"}/>
        {/* <Table list={tradeList} colNames={colNames} /> */}
        <div className='trades'>
        {tradeList.map((trade)=>{
          return (
            <div>
              <h5>Balance : {trade.balance}</h5>
              <h5>Equity : {trade.equity}</h5>
              <h5>Market Watch Time : {trade.market_watch_time}</h5>
            </div>
          )
        })}
      </div>
        <Footer title={"alahira jeffrey"}/>
    </div>
  );
}

export default App;
