import React from 'react';
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as SiIcons from "react-icons/si";


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