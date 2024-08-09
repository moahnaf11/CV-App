import { useState } from 'react'
import downIcon from "./down.svg"

export function General () {
    const [dialogOpen, setDialogOpen] = useState(false);

    
    return (
        <div className='generaldiv'>
            <h2>
                General Info
                <img src={downIcon} alt="down icon" onClick={() => {
                    if (dialogOpen) {
                        setDialogOpen(false);
                    }   else {
                        setDialogOpen(true);
                    }
                }} />

            </h2>
            <dialog open={dialogOpen}>
                <form action="" method="dialog">
                    <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id='name' placeholder='name'/>
                    </div>
                    <div>
                        <label htmlFor="mail">Email</label>
                        <input type="email" id="mail" placeholder='ahnaf@top.com'/>
                    </div>
                    <div>
                        <label htmlFor="address">Address</label>
                        <input type="text" id="address" placeholder='UAE'/>
                    </div>
                    <div>
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" id="phone" placeholder='xxx-xxx-xxxx' />
                    </div>
                </form>
            </dialog>
        </div>
    )
}