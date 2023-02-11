import './App.css'
import {MouseEvent, useState} from "react";
import {FullInput} from "./component/FullInput";
import {Input} from "./component/Input";
import {Button} from "./component/Button";

function App() {
    const [message, setMessage] = useState([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"},
    ])
    let [title, setTitle] = useState('')
    const addNewTitle = () => {
        setMessage([{message: title}, ...message])
        setTitle('')
    }
    return (
        <div className={"App"}>
            {/*<FullInput addNewTitle={addNewTitle}/>*/}
            <Input setTitle={setTitle} title={title}/>
            <Button name={'+'} callBack={addNewTitle}/>
            {message.map((e, i) => {
                return (
                    <div key={i}>{e.message}</div>
                )
            })
            }
        </div>
    )
}

export default App
