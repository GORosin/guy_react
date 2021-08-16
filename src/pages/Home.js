import React from 'react';
import guy_portrait from './guy_portrait.jpg';

function Home(){
	return(
		<div className='home'>
			<div className='textbox'>
			<img src = {guy_portrait} id = "guy_portrait" alt = "guy"/>
			<h1 className='home-textbox'>Guy Rosin</h1>
			<h4>UMass PhD Student</h4>
			<h4>Experimental Particle Physics</h4>
			<h4>ATLAS Scientist</h4>
			</div>
		</div>
	)
}
export default Home;