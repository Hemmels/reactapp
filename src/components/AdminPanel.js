import React, {Component} from 'react'
import * as Style from './globalstyles.js'
import styled from 'styled-components'
import { Button, FormControl, Form, InputGroup } from 'react-bootstrap';

class AdminPanel extends Component {

	constructor(props) {
		super(props)
		
		this.state = {
			newUrl: "",
			allEnabled: false,
			pinging: this.props.pinging
		}
		this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
	}
	
	handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        }) 
    }
    
    handleSubmit(event) {
		event.preventDefault()
		this.addNewUrl()
	}

	addNewUrl() {
		const requestOptions = {
			method: 'POST',
			body: this.state.newUrl
    	}
		fetch('/api/endpoint/add', requestOptions).then(response => response.json())
	}

	enableAll() {
		const isAllEnabled = this.state.allEnabled
		const requestOptions = {
			method: 'POST',
			body: isAllEnabled
    	}
		fetch('/api/endpoint/enableall', requestOptions).then(response => response.json())
		this.setState({
			newUrl: this.state.newUrl,
			allEnabled: !isAllEnabled,
			pinging: this.state.pinging
		})
	}

	togglePinging() {
		this.setState(prevState => ({
			newUrl: prevState.newUrl,
			allEnabled: prevState.allEnabled,
			pinging: !prevState.pinging
		}))
	}
	
	render() {
		var PingLabel
		if (this.state.pinging) {
			PingLabel = <Form.Label as={Style.AdminLabel} style={{color: "lightseagreen"}}>
				Pinging
			</Form.Label>
		}
		else {
			PingLabel = <Form.Label as={Style.AdminLabel} style={{color: "darkred"}}>
				Off
			</Form.Label>
		}

		
		var EnableLabel = <Form.Label as={Style.AdminLabel}>
				{this.state.allEnabled ? 'Disable all' : 'Enable all'}
		</Form.Label>

		return (<Form as={Style.AdminPanelStyle} onSubmit={this.handleSubmit}>
				{/* TitleBlock Adds to the global Title style */}
				<Style.Title as={TitleBlock}>Admin Panel</Style.Title>
				<InputGroup as={Style.MyFormGroup}>
					{PingLabel}
					<Button as={Style.MyFormBtn} type="button" onClick={() => {this.togglePinging(); this.props.pingHandler()}}>Toggle</Button>
				</InputGroup>
				<InputGroup as={Style.MyFormGroup}>
					<FormControl as={Style.MyFormControl}
						type="text"
						name="newUrl" 
						value={this.state.newUrl}
						onChange={this.handleChange} 
						placeholder="Add url to ping" 
					/>
					<InputGroup.Append>
						<Button>Add</Button>
					</InputGroup.Append>
				</InputGroup>
				<InputGroup as={Style.MyFormGroup}>
					<Form.Label as={Style.AdminLabel}>
						{EnableLabel}
					</Form.Label>
					<Button as={Style.MyFormBtn} type="button" onClick={() => this.enableAll()}>Go</Button>
				</InputGroup>
			</Form>)
	}
}

export const AdminLabel = styled.label`
	color: #647eed;
	vertical-align: middle;
	width: 40%;
	line-height: 2em;
	text-align: left;
`

export const TitleBlock = styled.label`
	margin-bottom: -0.5em;
`

export default AdminPanel