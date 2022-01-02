
const SelectCrypto=({options,crypto, setCrypto,...props}) => {
    return(
        <form>
            <label>Seleccione la criptomoneda</label>
            <select value={crypto} onChange={e=>setCrypto(e.target.value)}>
             <option  value=''>-Selecciona una criptomoneda-</option>
                {options && options.map(actualOption=>(
                    <option key = {actualOption.CoinInfo.Id} value={actualOption.CoinInfo.Name}>{actualOption.CoinInfo.FullName}</option>
                ))
                }
            </select>
        </form>
    )
}

export default SelectCrypto;