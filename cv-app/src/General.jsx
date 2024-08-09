import { Children, useState } from 'react'
import downIcon from "./down.svg"
import React from 'react';

export function General ({text, children}) {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [checked, setChecked] = useState(false);
    const [formValues, setFormValues] = useState({});

    function handleInputChange (id, value) {
        setFormValues(
            {
                ...formValues,
                [id]: value,
            }
        )
    }


    function toggleCheckBox () {
        setChecked(!checked);
    }


    function toggleDialog () {
        setDialogOpen(!dialogOpen);
    }

    function formSubmit (e) {
        e.preventDefault();
        console.log("form submitted");
        console.log("formvalues", formValues)
        toggleDialog();
    }


    
    return (
        <div className='generaldiv'>
            <h2>
                {text}
                <img src={downIcon} alt="down icon" onClick={() => toggleDialog()}
                    className={dialogOpen ? `rotate` : ``}
                 />

            </h2>
            {dialogOpen && <div className={`dialog ${dialogOpen ? `open`: `closed`}`}>
                <form action="" method="" onSubmit={(e) => formSubmit(e)}>
                {React.Children.map(children, child => 
                    React.cloneElement(child, {
                        ...child.props,       // Spread the existing props of the child
                        checked,              // Add or override with new props
                        toggleCheckBox,
                        handleInputChange,
                        inputValue: formValues[child.props.inputid] || "",
                    })
                )} 
                </form>
            </div>}
        </div>
    )
}