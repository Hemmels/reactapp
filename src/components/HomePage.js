import React, {Component} from 'react'
import Head from 'next/head'
import ServiceBlock from './ServiceBlock.js'
import styled from 'styled-components'
import logo from '../images/logo.PNG'

class HomePage extends Component {

	state = {
		latencyCheck: []
	}
	
    callPeopleServices() {
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
            })
	}
	
	endpoints = () => {
        fetch('/api/endpointNames')
    		.then(results => {
                if (!results.ok) {
                	console.log("Failed getting endpoints data: " + results.statusText)
                    throw Error(results.statusText)
                }
				return results.json()
			})
            .then(data => {
                console.log("endpoints names fetched: " + data)
                this.setState({endpointNames: data})
            })
    }
	
	doLatencyChecks = () => {
        fetch('/api/latencyCheck')
    		.then(results => {
                if (!results.ok) {
                	console.log("Failed getting endpoints data: " + results.statusText)
                    throw Error(results.statusText)
                }
				return results.json()
			})
            .then(data => {
                console.log("latencyCheck data fetched: " + JSON.stringify(data))
                this.setState({latencyCheck: data})
            })
    }

    componentDidMount() {
		this.endpoints()
		this.doLatencyChecks();
		this.interval = setInterval(() => this.doLatencyChecks(), 5000)
		console.log("Page interval set to 5s")
	}

	componentWillUnmount() {
  		clearInterval(this.interval)
		console.log("Page interval cleared")
	}
	
	render() {
		var listLength = this.state != null && this.state.endpointList != null ? this.state.endpointNames.length : 0
		var latencyCheckMap = this.state != null && this.state.latencyCheck != null ? this.state.latencyCheck : []
		return (<div>
			<Head>
				<title>Service Dash</title>
				<link href='https://fonts.googleapis.com/css?family=Mulish' rel='stylesheet' />
			</Head>
			<Header>
				<div>
					<Logo src={logo} alt="Logo"></Logo>
					<div>
						<Title>Service Status Dash</Title>
						<Sub>Page refreshes every 5s; {listLength > 0 ? 'There are ' + listLength + ' endpoints' : ''}</Sub>
					</div>
					<ServiceBlock latencyMap={latencyCheckMap} />
				</div>
			</Header>
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