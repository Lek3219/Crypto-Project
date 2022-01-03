import React, {useState, useEffect, useMemo} from "react";
import SelectCrypto from "./SelectCrypto";
import SelectCurrency from "./SelectCurrency";
import {getTopMarket} from '../services/AppCrud'


const Form=({currency, setCurrency, crypto, setCrypto, ...props})=>{

    const[cryptos, setCryptos]=useState([])
    const CURRENCYS=[
        {code:'USD', name:'Dolar Americano'},
        {code:'MXN', name:'Peso Mexicano'}, 
        {code:'EUR', name:'Euro'},
        {code:'GBP', name:'Libra Esterlina '}
    ]

    useEffect(()=>{
        const temp = {
            CoinInfo:{
                Id: 4365575,
                Name: "SLP",
                FullName:'Small Love Potion'
            }
        }
        getTopMarket(10).then((res)=>{
            setCryptos([temp,...res.data.Data])
        })

    },[])

    //aqui  hay una manera de hacerlo q no es esa pero todavia no la has dado
    // const criptos = useMemo(()=>{
    //     let res=[]
    //     getTopMarket(10).then((res)=>{
    //         res = res.data.Data
    //     })
    //     return res
    // },[])


    //Select de un array
    return(
        <>
            <SelectCurrency options={CURRENCYS} currency={currency} setCurrency={setCurrency}/>
            <SelectCrypto options={cryptos} crypto={crypto} setCrypto={setCrypto}/>
        </>
           
           
    )
    //Select de un array de la AP
}
export default Form