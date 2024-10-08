import { useState } from "react";

export function Formdiv ({forinput, text, type, inputid, classid, checked, toggleCheckBox, onFormSubmit, inputValue, placeholder}) {

    function inputChange (e) {
        onFormSubmit(inputid, e.target.value);

    }

    if (type === "checkbox") {
        return (
            <div className={classid}>
                <label htmlFor={forinput}>{text}</label>
                <input onChange={toggleCheckBox} type={type} id={inputid} checked={checked} />
            </div>
        )   
    }

    if ((inputid === "enddate" || inputid === "end") && checked) {
        return (
            <div className={classid}>
                <label htmlFor={forinput}>{text}</label>
                <input type={type} id={inputid} disabled={checked} value={inputValue} />
            </div>
        )

    }

    if (inputid === "responsibility" || inputid === "description") {
        return (
            <div className={classid}>
                <label htmlFor={forinput}>{text}</label>
                <textarea id={inputid} onChange={inputChange} value={inputValue} required placeholder={placeholder}></textarea>
            </div>
        );
    }


    return (
        <div className={classid}>
            <label htmlFor={forinput}>{text}</label>
            <input type={type} id={inputid} onChange={inputChange} value={inputValue} required placeholder={placeholder}/>
        </div>
    )
}



