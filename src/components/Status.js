import React, {Component} from 'react'
import styled from 'styled-components'

class Status extends Component {

	shouldComponentUpdate(nextProps) {
		return this.props.latency !== nextProps.latency;
	}

	render() {
		const numPeople = this.props.people;
		const latency = this.props.latency;
		let statusBox;
		if (numPeople > 0) {
			statusBox = <StatusBoxGood>Service contains {numPeople} people</StatusBoxGood>
		} else {
			if (latency < 70) {
				statusBox = <StatusBoxGood>{latency}ms</StatusBoxGood>
			} else {
				statusBox = <StatusBoxBad>{latency}ms</StatusBoxBad>
			}
		}
		return (
		<div>
			<link href='https://fonts.googleapis.com/css?family=Mulish' rel='stylesheet' />
			<div>
				<Label>{this.props.name}</Label>
				{statusBox}
			</div>
		</div>
		)
	}
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
	margin: 0em;
	margin-top: 1em;
`

export default Status;
