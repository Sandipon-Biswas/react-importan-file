import React from 'react'

import {Link} from 'react-router-dom'
import { NavLink } from "react-router-dom";
const Link1 = () => {
    return (
        <div>
            <div className=" d-flex text-center bg-dark">
                            <h5>link</h5>
                            <NavLink style={({ isActive }) => ({color: isActive ? '#fff' : '',background: isActive ? '#7600dc' : '',})} className=" nav-link text-light "  to="/home">home </NavLink>
                            <NavLink  className={(navInfo)=>navInfo.isActive?"active":"unactive"}   to="/ami">contact </NavLink>
                            <NavLink  className={(navInfo)=>navInfo.isActive?"active":"unactive"}   to="/about">About </NavLink>
                        </div>
        </div>
    )
}

export default Link1
