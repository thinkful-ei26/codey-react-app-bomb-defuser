import React from 'react';
import '../css/Button.css'

export default function Button(props) {
    return(
        <button 
            type="button" 
            className={props.class}
            onClick={props.onClick}>
            {props.name}
        </button>
    );
}