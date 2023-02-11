import React, {ChangeEvent, useState} from "react";
type FullInputProps={
    addNewTitle:(title:string)=>void
}
export const FullInput=(props:FullInputProps)=>{
    let [title,setTitle]=useState('')
    const onchangeInputHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onClickhandler = () => {

        props.addNewTitle(title)
        setTitle('')

    }
    return(
        <div>
            <div>
                <input value={title} onChange={onchangeInputHandler}/>
                <button onClick={onClickhandler}>_</button>
            </div>
        </div>
    )
}