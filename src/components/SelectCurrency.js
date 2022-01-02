
import React from 'react'

const SelectCurrency=({options,currency, setCurrency})=>{
        return(
        <form>
            <>
            <label>Selecciona la moneda</label>
            <select value={currency} onChange={e=>setCurrency(e.target.value)}>
                <option  value=''>-Selecciona una moneda-</option>
                {options.map(actualOption=>(  
                    <option key = {actualOption.code} value={actualOption.code}>{actualOption.name}</option>
                ))}
            </select>
            </>
        </form>
        )


}
export default SelectCurrency;