import React,{ useState, useEffect } from "react";
import axios from "axios";
import Form from "./components/Form";
import Quote from "./components/QuoteCrypto";
import {getPriceMultiFull} from './services/AppCrud'

function App() {

  const [currency, setCurrency]=useState('')
  const [crypto, setCrypto]=useState('')
  const [result, setResult]=useState(null)
  const [calculate, setCalculate] = useState(false)

  const handleChangeCrypto = (to) =>{
    setCalculate(false)
    setCrypto(to)
  }

  const handleChangeCurrency = (to) =>{
    setCalculate(false)
    setCurrency(to)
  }

  useEffect(()=>{
    setCalculate(false)
    if(!currency.length || !crypto.length) return

    getPriceMultiFull(crypto,currency).then((res)=>{
      setResult(res.data.DISPLAY)
    })
 
   },[currency, crypto])

  return (
    <div className="App">
      <h1>COTIZADOR DE CRIPTOS</h1>

      <Form currency={currency} setCurrency={handleChangeCurrency} crypto={crypto} setCrypto={handleChangeCrypto}/>
      <button onClick={()=>setCalculate(true)}>Calcular</button>
      
      {calculate && result && (
        <Quote result={result} currency={currency} crypto={crypto}/>
      )}
      
    </div>
  );
}

export default App;
