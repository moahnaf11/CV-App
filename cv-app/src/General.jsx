import { useState } from 'react'
import downIcon from "./down.svg"
import React from 'react';

export function General ({text, children}) {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [checked, setChecked] = useState(false);

    function toggleCheckBox () {
        setChecked(!checked);
    }


    function toggleDialog () {
        setDialogOpen(!dialogOpen);
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
                <form action="" method="">
                {React.Children.map(children, child => 
                    React.cloneElement(child, {
                        ...child.props,       // Spread the existing props of the child
                        checked,              // Add or override with new props
                        toggleCheckBox
                    })
                )} 
                </form>
            </div>}
        </div>
    )
}