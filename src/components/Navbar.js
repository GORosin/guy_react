import React, {useState, useEffect } from 'react';
import * as AiIcons from "react-icons/ai";
import * as FaIcons from "react-icons/fa";
import {Link } from 'react-router-dom';
import {SidebarData} from './SidebarData';
import './Navbar.css';
import {IconContext} from 'react-icons';


function Navbar(){
	const [sidebar, setSidebar] = useState(true);

	const showSidebar = () => setSidebar(!sidebar);
	
	return(
	<div>
		<IconContext.Provider value={{color: '#fff'}}>
		<div className="navbar">
			<Link to='#' className = 'menu-bars'>
			   <FaIcons.FaBars onClick={showSidebar}/>
			</Link>
			<span>
				<a href="https://www.linkedin.com/in/grosin/">
				LinkedIn</a>
				<a href="https://github.com/GORosin">
				Github</a>
				<a href="https://gitlab.cern.ch/grosin">
				Gitlab</a>
				<a href="https://jovian.ai/guy-rosin1">
				Jovian</a>		
			</span>
		</div>
		<nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
		
			<ul className='nav-menu-items'>
				<li className='navbar-toggle'>
					<Link to='#' className = 'menu-bars'>
						<FaIcons.FaBars onClick={showSidebar}/>
					</Link>
				</li>
				{SidebarData.map((item,index)=>{
					return(
						<li key={index} className={item.cName}>
							<Link to={item.path}>
								{item.icon}
								<span>
									{item.title}
								</span>
							</Link>
						</li>
					)
				})}
				<li className='contact'>
					<a className='contact-me'>Contact Me</a>
				</li>
				<li>
					<a className='contact-info' href="https://guy.rosin1@gmail.com">
					guy.rosin1@gmail.com</a>
				</li>
				<li>
					<a className='contact-info'>617-669-9397</a>
				</li>
			</ul>
		</nav>
		</IconContext.Provider>
	</div>
	)
}
export default Navbar;