import React from 'react'
import { NavLink } from 'react-router-dom'

const NavFeature = ({Icon, title, toPath,reqClass}) => {
  const classNames = `nav-item ${reqClass || ''}`;
  return (

    <div className={classNames}>
        <NavLink to={toPath}>
            <Icon></Icon>
            <span>{title}</span>
        </NavLink>
    </div>
  )
}

export default NavFeature