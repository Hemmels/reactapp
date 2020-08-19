import React, {Component} from 'react'
import styled from 'styled-components'

class Status extends Component {

	shouldComponentUpdate(nextProps) {
		return this.props.latency !== nextProps.latency;
	}

	render() {
		const AVERAGE_PING = 100
		const HIGH_PING = 300
		const DISABLED = 999

		const latency = this.props.latency;

		let statusBox;
		if (latency === DISABLED) {
			statusBox = <StatusBox theme={{background: "#808080"}}>{latency}ms</StatusBox>
		} else if (latency < AVERAGE_PING) {
			statusBox = <StatusBox theme={{background: "#409920"}}>{latency}ms</StatusBox>
		} else if (latency < HIGH_PING) {
			statusBox = <StatusBox theme={{background: "#999120"}}>{latency}ms</StatusBox>
		} else {
			statusBox = <StatusBox theme={{background: "#994020"}}>{latency}ms</StatusBox>
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

const StatusBox = styled.div`
	border-style: groove;
	border-width: 2px;
	height: 2em;
	width: 17em;
	background-color: ${props => props.theme.background};
    vertical-align: middle;
	text-align: center;
	color: white;
	font-family: 'Mulish';
	font-weight: 100;
	margin-left: 2em;
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
