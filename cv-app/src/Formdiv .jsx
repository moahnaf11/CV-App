import { useState } from "react";

export function Formdiv ({forinput, text, type, inputid  }) {
    return (
        <div>
            <label htmlFor={forinput}>{text}</label>
            <input type={type} id={inputid} />
        </div>
    )
}



