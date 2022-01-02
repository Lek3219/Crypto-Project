import axios from 'axios'



export function getPriceMultiFull(crypto,currency){
    return axios.get('/data/pricemultifull',{
        params:{
            fsyms:crypto,
            tsyms:currency,
        }
    })
}

export function getTopMarket(limit, compare='USD'){
    return axios.get('/data/top/mktcapfull',{
        params:{
           limit:limit,
           tsym:compare, 
        }
    })
}