import react, {useState, useEffect} from "react";
import SelectCrypto from "./SelectCrypto";
import SelectCurrency from "./SelectCurrency";
import axios from "axios";
import Quote from "./QuoteCrypto";


const Form=({currency, setCurrency, crypto, setCrypto, ...props})=>{

    const[cryptos, setCryptos]=useState('')
    const CURRENCYS=[
        {code:'USD', name:'Dolar Americano'},
        {code:'MXN', name:'Peso Mexicano'}, 
        {code:'EUR', name:'Euro'},
        {code:'GBP', name:'Libra Esterlina '}]

        useEffect(()=>{
            const consultAPI = async()=>{
                const url='https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
                const result = await axios.get(url);
                setCryptos(result.data.Data)

            }
            consultAPI()
        },[])


    //Select de un array
    return(
        <>
            <SelectCurrency options={CURRENCYS} currency={currency} setCurrency={setCurrency}/>
            <SelectCrypto options={cryptos} crypto={crypto} setCrypto={setCrypto}/>
            <button type='submit' value='result'>Calcular</button>
        </>
           
           
    )
    //Select de un array de la AP
}
export default Form