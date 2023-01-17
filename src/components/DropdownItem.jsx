import React from 'react';


const DropdownItem = (props) => {
    return (
        <li>
            {props.icon ? props.icon : '-'}
            &nbsp;&nbsp;
            <a href="">{props.text}</a>
        </li>
    )
}

export default DropdownItem