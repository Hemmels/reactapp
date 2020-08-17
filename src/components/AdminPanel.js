import React, {Component} from 'react'
import styled from 'styled-components'
import {Title} from './globalstyles.js'
import { Button, FormControl, Form, InputGroup } from 'react-bootstrap';

class AdminPanel extends Component {

	state = {
		newUrl: ""
	}

	render() {
		return (<Form as={AdminPanelStyle} onSubmit={this.handleSubmit}>
				<Title>Admin Panel</Title>
				<InputGroup as={MyFormGroup}>
					<FormControl as={MyFormControl}
						type="text"
						name="newUrl" 
						value={this.state.newUrl}
						onChange={this.handleChange} 
						placeholder="Add url to ping" 
					/>
					<InputGroup.Append>
						<Button as={MyFormBtn}>Add</Button>
					</InputGroup.Append>
				</InputGroup>
			</Form>)
	}
}

const AdminPanelStyle = styled.form`
	background-color: pink;
	margin: 1em;
	width: 40%;
`

const MyFormGroup = styled.div`
	margin: 1em; 
	max-width: 95%;
`

const MyFormControl = styled.input`
	margin: 0.5em;
`

const MyFormBtn = styled.button`
	margin: 0.5em; 
`

export default AdminPanel