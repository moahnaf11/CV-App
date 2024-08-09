import { Children, useState } from 'react'
import downIcon from "./down.svg"

export function General ({text, children}) {
    const [dialogOpen, setDialogOpen] = useState(false);

    function toggleDialog () {
        setDialogOpen(!dialogOpen);
    }

    
    return (
        <div className='generaldiv'>
            <h2>
                {text}
                <img src={downIcon} alt="down icon" onClick={() => toggleDialog()} />

            </h2>
            {dialogOpen && <div className={`dialog ${dialogOpen ? `open`: `closed`}`}>
                <form action="" method="">
                    {children} 
                </form>
            </div>}
        </div>
    )
}