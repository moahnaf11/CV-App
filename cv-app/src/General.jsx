import { act, Children, useState } from 'react'
import downIcon from "./down.svg"
import React from 'react';


export function General ({text, children, onFormSubmit, formValues, setCurrentKeyAction, currentKeyAction}) {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [checked, setChecked] = useState(false);
    const [localFormValues, setLocalFormValues] = useState({}); // Local state for form inputs

    function handleInputChange (id, value) {
        setLocalFormValues((prevValues) => {
            return {
                ...prevValues,
                [id]: value,
            }

        })
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
        onFormSubmit(text, localFormValues, currentKeyAction);
        console.log("formvalues", localFormValues)
        toggleDialog();
    }

    // edit/ delete button click function

    function handleButtonClick (e, itemKey) {
        let target = e.target;
        if (target.className === "del") {
            setCurrentKeyAction((prevState) => {
                const newKeyAction = { key: itemKey, action: "del" };
                onFormSubmit(text, null, newKeyAction)
                return newKeyAction;
            });
        }   else if (target.className === "edit") {
            
            setCurrentKeyAction((prevState) => {
                const newKeyAction = { key: itemKey, action: "edit" };
                const itemToEdit = formValues[text].find(item => item.key === itemKey);
                setLocalFormValues(itemToEdit);
                toggleDialog();
                return newKeyAction;
            });

        }
        

       


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
                    className="viewbar" key={item.key} onClick={(e) => handleButtonClick(e, item.key)}>
                    <div>{item.school || item.company}</div>
                    <div className="button-container">
                        <button className="edit" type='button'>Edit</button>
                        <button className="del" type='button'>
                            <img src="./src/delete.svg" alt="trash icon" />
                        </button>
                    </div>
                </div>

            ))}

            {dialogOpen && <div className={`dialog ${dialogOpen ? `open`: `closed`}`}>
                <form action="" method="" onSubmit={(e) => formSubmit(e)}>
                {React.Children.map(children, child => 
                    React.cloneElement(child, {
                        ...child.props,
                        ...(child.type === 'input' && { checked }),       // Spread the existing props of the child
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