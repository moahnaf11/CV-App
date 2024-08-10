import { Children, useState } from 'react'
import downIcon from "./down.svg"
import React from 'react';
import { Button } from './Button';
export function General ({text, children, onFormSubmit, formValues}) {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [checked, setChecked] = useState(false);
    const [localFormValues, setLocalFormValues] = useState({}); // Local state for form inputs

    function handleInputChange (id, value) {
        setLocalFormValues(
            {
                ...localFormValues,
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
        onFormSubmit(text, localFormValues);
        console.log("formvalues", localFormValues)
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
            {text !== "General Info" && formValues[text] && formValues[text].map((item) => (
                <div 
                    className="viewbar" key={item.key}>
                    <div>{item.school || item.company}</div>
                    <div className="button-container">
                        <Button text="edit"></Button>
                        <Button>
                            <img src="./src/delete.svg" alt="trash icon" />
                        </Button>
                    </div>
                </div>

            ))}

            {dialogOpen && <div className={`dialog ${dialogOpen ? `open`: `closed`}`}>
                <form action="" method="" onSubmit={(e) => formSubmit(e)}>
                {React.Children.map(children, child => 
                    React.cloneElement(child, {
                        ...child.props,       // Spread the existing props of the child
                        checked,              // Add or override with new props
                        toggleCheckBox,
                        onFormSubmit: handleInputChange,
                        inputValue: localFormValues[child.props.inputid] || "",
                    })
                )} 
                </form>
            </div>}
        </div>
    )
}