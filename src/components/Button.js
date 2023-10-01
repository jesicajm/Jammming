import React from "react";

const button = {
    marginTop: '2rem',
    borderRadius: 18,
    padding: 12,
    backgroundColor: 'blueviolet',
    borderColor: 'blueviolet',
    color: 'white',
    fontSize: 16,
}

function Button({text}){
    return <button style={button} type="button">{text}</button>
}


export default Button;
