import React, {Component} from 'react'
import Head from 'next/head'
import Status from './Status.js'
import styled from 'styled-components'
import logo from '../images/logo.PNG'

class HomePage extends Component {
	render() {
		return (<div>
			<Head>
				<title>Service Dash</title>
				<link href='https://fonts.googleapis.com/css?family=Mulish' rel='stylesheet' />
			</Head>
			<Header>
				<div>
					<Logo src={logo} alt="Logo"></Logo>
					<Title>Service Status Dash</Title>
				</div>
			</Header>
			<Status />
		</div>)
	}
}

const Header = styled.div`
	line-height: 15px;
    vertical-align: middle;
	text-align: center;
`

const Logo = styled.img`
	max-width: 4em;
    vertical-align: middle;
`
	
const Title = styled.h1`
	width: 95%;
	display: inline-block;
	color: cornflowerblue;
	font-family: 'Mulish';
	font-size: 2em;
`

export default HomePage