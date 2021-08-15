import React from 'react';

function Papers(){
	return(
		<div className='papers'>
			<h1> Papers </h1>
			<ul style={{marginLeft:"50px",listStyleType:"none"}}>
				<li>
				<h4>Electrical Tests of ATLAS ITk Barrel Strip Tracker at Brookhaven National Lab</h4>
			<p>The ATLAS experiment is currently running with pp collisions at
13 TeV and preparing for an upgrade of the inner tracking detector for High-Luminosity LHC operation, which is scheduled to start in 2026. An all-silicon Inner Tracker (ITk) is proposed with a pixel detector surrounded by a strip detector. The mechanical building blocks of the ITk barrel layers are the staves. These units consist of a low mass central stave local support for the strip modules and host the common electrical, optical and cooling services. The first full electrical stave consisting of twelve modules was assembled in July 2018.We performed electrical and functional tests before and after loading to characterize these modules.This talk will present the methods we used to characterize the stave and the results of the studies conducted to understand the causes of a few anomalies.Although the results remain inconclusive in some aspects, the studies produced interesting results such as the effects of eddy currents on the noise and the effects of temperature and strobe delay settings on the expected gain.
</p>
			<a className="paper" href="http://meetings.aps.org/Meeting/APR19/Session/G09.6">
			http://meetings.aps.org/Meeting/APR19/Session/G09.6
			</a>
			<hr/>
				</li>
				<li>
				<h4>Effects Of Gamma Irradiation On Leakage Current In CMOS Readout Chips For Atlas Upgrades Silicon Strip Tracker</h4>
			<p>
			An irradiation experiment using a 60Co source was carried out at Brookhaven National Lab to characterize the leakage current from the ABC star front end readout chip as a function of the total ionizing dose (TID). The chips were at conditions similar to what is expected in the HL-LHC. Three ABCStar chips were held at -10o C and received a dose rate of 2.5 Krad/h, 1.1 Krad/h and 0.6 Krad/h respectively. A fourth ABCStar was held at 0o C and received a dose rate of 0.6 Krad/h. The outcome of the ABCStar irradiation is presented and compared with previous irradiation campaigns utilizing the prototype readout chips, the ABC130, which were irradiated under similar dose rates and temperatures. The results will help provide an understanding of the physical processes behind the TID effects.
			</p>
			<a className="paper" href="https://indico.cern.ch/event/799025/contributions/3486387/">
			https://indico.cern.ch/event/799025/contributions/3486387/
			</a>
			<hr/>
				</li>
				<li>
			<h4>A search for the decays of stopped long-lived particles at s√=13 TeV with the ATLAS detector</h4>
			<p>A search for long-lived particles, which have come to rest within the ATLAS detector, is presented. The subsequent decays of these long-lived particles can produce high-momentum jets, resulting in large out-of-time energy deposits in the ATLAS calorimeters. These decays are detected using data collected during periods in the LHC bunch structure when collisions are absent. The analysed dataset is composed of events from proton-proton collisions produced by the Large Hadron Collider at a centre-of-mass energy of s√=13 TeV and recorded by the ATLAS experiment during 2017 and 2018. The dataset used for this search corresponds to a total live time of 579 hours. The results of this search are used to derive lower limits on the mass of gluino R-hadrons, assuming a branching fraction B(g~→qq¯χ~01)=100%, with masses of up to 1.4 TeV excluded for gluino lifetimes of 10−5 to 103 s.
			</p>
			<a className="paper" href="https://cds.cern.ch/record/2760104?ln=en">
			https://cds.cern.ch/record/2760104?ln=en
			</a>
			<hr/>
				</li>
				<li>
			<h4>The ABC130 barrel module prototyping programme for the ATLAS strip tracker</h4>
			<p>For the Phase-II Upgrade of the ATLAS Detector, its Inner Detector, consisting of silicon pixel, silicon strip and transition radiation sub-detectors, will be replaced with an all new 100 % silicon tracker, composed of a pixel tracker at inner radii and a strip tracker at outer radii. The future ATLAS strip tracker will include 11,000 silicon sensor modules in the central region (barrel) and 7,000 modules in the forward region (end-caps), which are foreseen to be constructed over a period of 3.5 years. The construction of each module consists of a series of assembly and quality control steps, which were engineered to be identical for all production sites. In order to develop the tooling and procedures for assembly and testing of these modules, two series of major prototyping programs were conducted: an early program using readout chips designed using a 250 nm fabrication process (ABCN-25) and a subsequent program using a follow-up chip set made using 130 nm processing (ABC130 and HCC130 chips). This second generation of readout chips was used for an extensive prototyping program that produced around 100 barrel-type modules and contributed significantly to the development of the final module layout. This paper gives an overview of the components used in ABC130 barrel modules, their assembly procedure and findings resulting from their tests.
			</p>
			<a className="paper" href="https://arxiv.org/abs/2009.03197">
			https://arxiv.org/abs/2009.03197
			</a>
			<hr/>
				</li>
				<li>
			<h4>Effect of gamma irradiation on leakage current in CMOS read-out chips for the ATLAS upgrade silicon strip tracker at the HL-LHC</h4>
			<p>The increase of the leakage current of NMOS transistors in detector readout chips in certain 130 nm CMOS technologies during exposure to ionising radiation needs special consideration in the design of detector systems, as this can result in a large increase of the supply current and power dissipation. As part of the R&D; program for the upgrade of the ATLAS inner detector tracker for the High Luminosity upgrade of the LHC at CERN, a dedicated set of irradiations have been carried out with the 60Co gamma-ray source at the Brookhaven National Laboratory. Measurements will be presented that characterise the increase in the digital leakage current in the 130 nm-technology ABC130 readout chips. The variation of the current as a function of time and total ionising dose has been studied under various conditions of dose rate, temperature and power applied to the chip. The range of variation of dose rates and temperatures has been set to be close to those expected at the High Luminosity LHC, i.e. in the range 0.6 krad h−1 - 2.5 krad h −1 and between -10 ℃ and + 10 ℃. Two of the chips under test were pre-irradiated with high doses of X-rays at Rutherford Appleton Laboratory. The results show the dependence of the leakage current with the parameters under study and provide valuable information for the understanding of the underlying mechanisms responsible for radiation damage in transistors and detector readout chips.
			</p>
			<a className="paper" href="https://cds.cern.ch/record/2312291">
			https://cds.cern.ch/record/2312291
			</a>
				</li>
			</ul>
		</div>
	)
}
export default Papers;