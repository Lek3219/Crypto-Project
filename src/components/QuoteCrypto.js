import React from 'react'

const Quote=({result,currency,crypto})=>{
    console.log(result)
    return(
        <div>
            <div>EL precio es:</div>
            <div>{`1${result[crypto][currency].FROMSYMBOL} = ${result[crypto][currency].PRICE}`}</div>
        </div>
    )
}
export default Quote