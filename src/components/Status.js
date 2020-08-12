import React from 'react';
import styled from 'styled-components';

function Status() {
	return (
		<div>
			<link href='https://fonts.googleapis.com/css?family=Mulish' rel='stylesheet' />
			<div>
				<Label>google.co.uk</Label>
				<StatusBoxGood>10ms</StatusBoxGood>
			</div>
			<div>
				<Label>bbc.co.uk</Label>
				<StatusBoxGood>10ms</StatusBoxGood>
			</div>
			<div>
				<Label>badservice.co.uk</Label>
				<StatusBoxBad>499ms</StatusBoxBad>
			</div>
		</div>
	)
}

const StatusBoxGood = styled.div`
	border-style: groove;
	border-width: 2px;
	height: 2em;
	width: 20em;
	background-color: #409920;
    vertical-align: middle;
	text-align: center;
	color: white;
	font-family: 'Mulish';
	font-weight: 100;
	margin-left: 1em;
	display: flex;
	align-items: center;
	justify-content: center;
`

const StatusBoxBad = styled.div`
	border-style: groove;
	border-width: 2px;
	height: 2em;
	width: 20em;
	background-color: #994020;
    vertical-align: middle;
	text-align: center;
	color: white;
	font-family: 'Mulish';
	font-weight: 400;
	margin-left: 1em;
	display: flex;
	align-items: center;
	justify-content: center;
`

const Label = styled.p`
	display: flex;
	align-items: center;
	font-family: 'Mulish';
	height: 2em;
	width: 5em;
`

export default Status;
