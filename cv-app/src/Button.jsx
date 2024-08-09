import { useState } from "react";

export function Button ({type="button", text}) {
    return (
        <button type={type}>{text}</button>
    )
}