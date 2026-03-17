import React from "react";

const Boton = ({label, onClick}) =>{
    return(
        <>
        <button onClick={onClick} className="btn">{label}</button>
        </>

    )
}

export default Boton