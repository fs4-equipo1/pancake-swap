import { useState } from "react"


export default function Toggle() {
    
    const [activado, setActivado] = useState(false);

    return (
        <button onClick={ ()=> setActivado(!activado) }> {activado?"Activado":"Desactivado"} </button>
    )
}