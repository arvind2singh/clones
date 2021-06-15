import React from 'react'
import "./sidebarRow.css";

function SidebarRow(props) {
    return (
        <div className="sidebarRow">
            <props.icon className="sidebarRow__icon" />
            <h2 className="sidebarRow__title">{props.title}</h2>
        </div>
    )
}

export default SidebarRow
