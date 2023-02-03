import './App.css'
import {useState} from "react";

function App() {
    const [money, setMoney] = useState([
        { banknots: 'Dollars', value: 100, number: ' a1234567890' },
        { banknots: 'Dollars', value: 50, number: ' z1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' w1234567890' },
        { banknots: 'Dollars', value: 100, number: ' e1234567890' },
        { banknots: 'Dollars', value: 50, number: ' c1234567890' },
        { banknots: 'RUBLS', value: 100, number: ' r1234567890' },
        { banknots: 'Dollars', value: 50, number: ' x1234567890' },
        { banknots: 'RUBLS', value: 50, number: ' v1234567890' },
    ])
    const [filteredArr,setfilteredArr]=useState(money)

        const Dollars=(a:string)=>{
            setfilteredArr(money)
            if (a==='Dollars'){
            return setfilteredArr(money.filter(b =>{
            return b.banknots==='Dollars'}))}
            if (a==='RUBLS'){
                return setfilteredArr(money.filter(b =>{
                    return b.banknots==='RUBLS'}))}
            return filteredArr
    }
/*const Sort=()=>{
    setfilteredArr(filteredArr.map(a=>a.sort((a,b)=>)))
}*/
  return (
   <div>
       <>

           <ul>
               {filteredArr.map((a,i)=>{
                   return(<>

                           <li key={i} ><span>{a.banknots}</span> : <span>{a.value}</span>:<span>{a.number}</span></li>
                       </>
                   )
               })}
           </ul>
           <button onClick={()=>Dollars("Dollars")}>USD</button>
           <button onClick={()=>Dollars('RUBLS')}>RUBLS</button>
           <button onClick={()=>Dollars('')}>All</button>
           <button onClick={()=>Sort()}>Sort Max/min</button>

       </>

   </div>
  )
}
export default App
