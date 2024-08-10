import { Children, useState } from "react";

export function Button ({type="button", text="", children}) {
    return (
        <button type={type}>{text}
            {children}
        </button>
    )
}