import React from 'react';

export default function Procedure(props) {
    const colors = props.colors.map((color, index) => {
        return (
            <li className={color} key={index}>
                {color}
            </li>
        );
    });
    return <ul className="procedure-list">{colors}</ul>
}