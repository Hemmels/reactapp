import React, {Component} from 'react'
import styled from 'styled-components'
import { Button } from 'react-bootstrap';

class Status extends Component {

	constructor(props) {
		super(props);
		this.doRemoveService = this.doRemoveService.bind(this);
	}

	doRemoveService() {
		fetch('/api/endpoint/remove?url=' + this.props.service)
    		.then(results => {
                if (!results.ok) {
					console.log("Failed removing endpoint")
                }
				return results.json()
			})
		;
	}

	shouldComponentUpdate(nextProps) {
		return this.props.latency !== nextProps.latency;
	}

	render() {
		const AVERAGE_PING = 150
		const HIGH_PING = 500
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
			<div>
				<div>
					<Label>{this.props.service}</Label>
					<Button as={StatusBtn} variant="info" type="button" size="sm" 
							onClick={this.showHistory}>History</Button>
					<Button as={StatusBtn} variant="danger" type="button" size="sm" 
							onClick={this.doRemoveService}>Remove</Button>
				</div>
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
	width: 100%;
	background-color: ${props => props.theme.background};
    vertical-align: middle;
	text-align: center;
	color: white;
	font-family: 'Mulish';
	font-weight: 100;
	display: flex;
	align-items: center;
	justify-content: center;
`

const StatusBtn = styled.div`
	display: flex;
	align-items: center;
	float: right;
	margin-top: 0.7em;
`
					

const Label = styled.div`
	display: flex;
	font-family: 'Mulish';
	height: 2em;
	width: 5em;
	margin: 0em;
	margin-top: 1em;
	float: left;
`

export default Status;
