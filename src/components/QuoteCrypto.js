
const Quote=({result})=>{
    if(Object.keys(result).length===0) return null
    return(
        <div>
            <p>
                El precio es : <span>{result.PRICE}</span>
            </p>
        </div>
    )
}
export default Quote