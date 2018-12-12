import React from 'react';
import '../css/Clicks.css';

export default function Clicks(props) {
    const colors = props.colors.map((color, index) => {
        return (
            <li className={color} key={index}>
                {color}
            </li>
        );
    });
    return <ul className="clicks-list">{colors}</ul>
}