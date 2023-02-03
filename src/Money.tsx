import {useState} from "react";
import {MoneyType} from "./App";
type MoneyProps={
    bank:Array<MoneyType>
}
type FilterType="All"|"Dollars"|"RUBLS";

export const Money = (props:MoneyProps) => {
    const [filteredArr, setfilteredArr] = useState(props.bank)
    const Dollars = (a: FilterType) => {
        a === 'All' ? setfilteredArr(props.bank) : setfilteredArr(props.bank.filter(value => value.banknots === a))
    }

    return <div>
        <>

            <ul>
                {filteredArr.map((a, i) => {
                    return (<>

                            <li key={i}><span>{a.banknots}</span> : <span>{a.value}</span>:<span>{a.number}</span>
                            </li>
                        </>
                    )
                })}
            </ul>
            <button onClick={() => Dollars("Dollars")}>USD</button>
            <button onClick={() => Dollars('RUBLS')}>RUBLS</button>
            <button onClick={() => Dollars('All')}>All</button>
        </>

    </div>

}