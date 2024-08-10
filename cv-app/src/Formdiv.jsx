import { useState } from "react";


export function Formdiv ({forinput, text, type, inputid, classid, checked, toggleCheckBox, onFormSubmit, inputValue}) {

    function inputChange (e) {
        onFormSubmit(inputid, e.target.value);

    }

    if (type === "checkbox") {
        return (
            <div className={classid}>
                <label htmlFor={forinput}>{text}</label>
                <input onChange={toggleCheckBox} type={type} id={inputid} />
            </div>
        )   
    }

    if ((inputid === "enddate" || inputid === "end") && checked) {
        return (
            <div className={classid}>
                <label htmlFor={forinput}>{text}</label>
                <input type={type} id={inputid} disabled={checked} />
            </div>
        )

    }


    return (
        <div className={classid}>
            <label htmlFor={forinput}>{text}</label>
            <input type={type} id={inputid} onChange={inputChange} value={inputValue} required/>
        </div>
    )
}



