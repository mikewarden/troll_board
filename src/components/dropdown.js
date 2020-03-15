import React from "react"
import { useState } from 'react'
import Dropdown from 'react-bootstrap/Dropdown'

    const SheriffMenu = (props) => {

        const onChange = (e) => {
            console.log(e.target.name);
            const name = `This week's Sheriff is ${e.target.name}`;
            props.onChange(name);
        }
        return (
        <Dropdown>
        <Dropdown.Toggle variant="warning" id="dropdown-basic">
            Choose the Sheriff
        </Dropdown.Toggle>

        <Dropdown.Menu onClick={onChange}>
                <Dropdown.Item name="Rigo">Rigo</Dropdown.Item>
                <Dropdown.Item name="Dick Wyn">Dick Wyn</Dropdown.Item>
                <Dropdown.Item name="Juan">Juan</Dropdown.Item>
                <Dropdown.Item name="Josh">Josh</Dropdown.Item>
                <Dropdown.Item name="Brandon">Brandon</Dropdown.Item>
                <Dropdown.Item name="Jaeho">Jaeho</Dropdown.Item>
                <Dropdown.Item name="Mike">Mike</Dropdown.Item>
                <Dropdown.Item name="Guest">Guest</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
        )
    }

    export default SheriffMenu;