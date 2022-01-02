
const SelectCurrency=({options,currency, setCurrency})=>{
        return(
        <form>
            <>
            <label>Selecciona la moneda</label>
            <select value={currency} onChange={e=>setCurrency(e.target.value)}>
                <option  value=''>-Selecciona una moneda-</option>
                {options.map(actualOption=>(  
                    <option key = {actualOption.value} value={actualOption.value}>{actualOption.name}</option>
                ))}
            </select>
            </>
        </form>
        )


}
export default SelectCurrency;