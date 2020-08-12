import React, {Component, useState} from 'react'
import Head from 'next/head'
import Status from './Status.js'
import styled from 'styled-components'
import logo from '../images/logo.PNG'

class HomePage extends Component {

	constructor() {
        super()
        this.state = {
            numSWPeople: 0,
            numGhibPeople: 0
        }
	}
	
    callServlet() {
        fetch('https://swapi.dev/api/people/?format=json')
            .then(results => {
                if (!results.ok) {
                	console.log("Failed getting swapi data: " + results.statusText)
                    throw Error(results.statusText)
                }
                return results.json();
            }).then(data => {
                console.log("SWAPI data fetched; there are " + data.results.length)
                this.setState({ numSWPeople: data.results.length })
            }).catch(error => {
                console.log(error)
            });
        fetch('https://ghibliapi.herokuapp.com/people/?format=json')
            .then(results => {
                if (!results.ok) {
                	console.log("Failed getting Ghibli data: " + results.statusText)
                    throw Error(results.statusText)
                }
                return results.json();
            }).then(data => {
                console.log("Ghibli data fetched; there are " + data.length)
                this.setState({ numGhibPeople: data.length })
            }).catch(error => {
                console.log(error)
            });
    }

    componentDidMount() {
		this.interval = setInterval(() => this.callServlet(), 5000)
		console.log("Page interval set to 5s")
	}

	componentWillUnmount() {
  		clearInterval(this.interval)
		console.log("Page interval cleared")
	}
	
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
					<Sub>Page refreshes every 5s</Sub>
				</div>
			</Header>
			<Status name="google.co.uk" quality="1" />
			<Status name="bbc.co.uk" quality="1" />
			<Status name="swapi.co" quality="0" />
			<Status name="swapi.dev" quality="1" people={this.state.numSWPeople} />
			<Status name="ghibliapi.herokuapp.com" quality="1" people={this.state.numGhibPeople} />
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
	
const Sub = styled.h3`
	display: inline-block;
	color: #647eed;
	font-family: 'Mulish';
	margin: 0em;
`

export default HomePage