import { useState, useEffect } from "react";
import axios from "axios";
import Form from "./components/Form";
import Quote from "./components/QuoteCrypto";

function App() {
  const [currency, setCurrency]=useState('')
  const [crypto, setCrypto]=useState('')
  const [result, setResult]=useState('')
  useEffect(()=>{
    const quoteCrypto = async()=>{
       if(currency==='' ) return
       const url =`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`
       const res=await axios.get(url);
       setResult(res.data.DISPLAY)
     }
 
     quoteCrypto();
 
   },[currency, crypto])

  return (
    <div className="App">
      <h1>COTIZADOR DE CRIPTOS</h1>
      <Form currency={currency} setCurrency={setCurrency} crypto={crypto} setCrypto={setCrypto}/>
      <Quote value={result}/>
    </div>
  );
}

export default App;
