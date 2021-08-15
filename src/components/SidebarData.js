import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as SiIcons from "react-icons/si";
import * as GiIcons from "react-icons/gi";


export const SidebarData = [
	{
		title: 'Home',
		path: '/guy_react',
		icon: <AiIcons.AiFillHome />,
		cName: 'nav-text'
	},
	{
		title: 'About Me',
		path: '/about',
		icon: <IoIcons.IoIosPerson />,
		cName: 'nav-text'
	},
	{
		title: 'Research',
		path: '/research',
		icon: <SiIcons.SiMoleculer />,
		cName: 'nav-text'
	},	
	{
		title: 'Papers',
		path: '/papers',
		icon: <IoIcons.IoIosPaper />,
		cName: 'nav-text'
	},
	{
		title: 'Resume',
		path: '/resume',
		icon: <AiIcons.AiOutlinePaperClip />,
		cName: 'nav-text'
	},
]