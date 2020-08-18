import React, {Component} from 'react'
import * as Style from './globalstyles.js'
import { Button, FormControl, Form, InputGroup } from 'react-bootstrap';

class AdminPanel extends Component {

	constructor() {
		super()
		
		this.state = {
			newUrl: ""
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
		fetch('/api/addendpoint', requestOptions).then(response => response.json())
	}
	
	render() {
		return (<Form as={Style.AdminPanelStyle} onSubmit={this.handleSubmit}>
				<Style.Title>Admin Panel</Style.Title>
				<InputGroup as={Style.MyFormGroup}>
					<FormControl as={Style.MyFormControl}
						type="text"
						name="newUrl" 
						value={this.state.newUrl}
						onChange={this.handleChange} 
						placeholder="Add url to ping" 
					/>
					<InputGroup.Append>
						<Button as={Style.MyFormBtn}>Add</Button>
					</InputGroup.Append>
				</InputGroup>
			</Form>)
	}
}

export default AdminPanel