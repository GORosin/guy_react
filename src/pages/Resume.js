import React from 'react';

function Resume(){
	return(
		<div className='resume'>
		<iframe title = "Resume"
		style={{ width: "80%", height: "132vh",
		marginLeft: "6em", marginTop: "1em" }} src="resume.pdf">
		</iframe>
		</div>
	)
}
export default Resume;