import React from 'react';
import styled from 'styled-components';
import guy_image from './guy.jpg';
import atlas from './atlas_detector.png';

const GridWrapper = styled.div`
  margin-left: 5em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
  background-color:  #000066;
`;
export const Home = (props) => (
  <GridWrapper>
<img src = {guy_image} id = "guy" alt = "guy"/>
	   <h1>Guy Rosin</h1>
	   <p>I'm a physics Ph.D. student in University of Massachusetts, Amherst, doing experimental particle physics in the ATLAS collaberation. My dissertation focuses on the Inner Tracker project and a measurement of the Higgs to WW decay cross sections. The Inner tracker (ITk) is the largest planned overhaul of the ATLAS detector for the next phase of the Large Hadron Collider run.I worked in Brookhaven National lab with leading ATLAS scientists to research and develope the silicon strip detectors that will make up the large radius portion of ITk.</p>
	   <hr/>
	   <img src = {atlas} id = "block" alt = "atlas"/>
<p>Studies of the Higgs Boson is one of the most promising potential windows into new physics beyond the standard model. Since most direct searches for new particles or interactions have not yielded any results, the next possible findings of new physics could be from new hidden interactions with standard model particles like the Higgs. To study these potential hidden iteractions, we must make accurate measurements of the propeties of the Higgs boson. This analysis promises to be the most accurate measurement of the Higgs decay rate, with larger statistics and new analysis methods levarging advances in machine learning.</p>
<p>I love hobbyist electronics, statistics and data. Some of my current pojects are a raspberry pi weather station for my backyard chicken coop and developing a constume resnet for protein predictions in a kaggle competition. </p>
<hr/>
  </GridWrapper>
)