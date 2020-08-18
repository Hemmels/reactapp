import React, {Component} from 'react'
import Head from 'next/head'
import AdminPanel from './AdminPanel.js'
import ServiceBlock from './ServiceBlock.js'
import styled from 'styled-components'
import * as Style from './globalstyles.js'
import logo from '../images/logo.PNG'

class HomePage extends Component {

	constructor() {
		super()
		this.state = {
			latencyCheck: [],
			newUrl: ""
		}
	}
	
    callPeopleServices() {
        fetch('https://swapi.dev/api/people/?format=json')
            .then(results => {
                if (!results.ok) {
                	console.log("Failed getting swapi data: " + results.statusText)
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
                }
				return results.json()
			})
            .then(data => {
                this.setState({endpointNames: data})
            })
    }
	
	doLatencyChecks = () => {
        fetch('/api/latencyCheck')
    		.then(results => {
                if (!results.ok) {
                	console.log("Failed getting endpoints data: " + results.statusText)
                }
				return results.json()
			})
            .then(data => {
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
					<Style.Logo src={logo} alt="Logo"></Style.Logo>
					<div>
						<Title>Service Status Dash</Title>
						<Sub>Page refreshes every 5s {listLength > 0 ? '; There are ' + listLength + ' endpoints' : ''}</Sub>
					</div>
					<ServiceBlock latencyMap={latencyCheckMap} />
				</div>
			</Header>
			<br />
			<Header>
				<AdminPanel />
			</Header>
		</div>)
	}
}

export default HomePage