import React from 'react';
import resumepdf from './resume.pdf';

function Resume(){
	return(
		<div className='resume'>
		<iframe title = "Resume"
		style={{ width: "80%", height: "132vh",
		marginLeft: "6em", marginTop: "1em" }} 
				src={resumepdf}>
		</iframe>
		</div>
	)
}
export default Resume;