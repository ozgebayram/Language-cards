import logo from '../../assets/react.svg'
import "./Header.css"

import React from 'react'

const Header = () => {
  return (
	<div className='logo'>
		<img className='logoImg' src={logo} alt="img" width="200px" height="200px"/>
	</div>
  )
}

export default Header