import React, {Component} from 'react'
import AdminPanel from './AdminPanel.js'
import ServiceBlock from './ServiceBlock.js'
import * as Style from './globalstyles.js'
import logo from '../images/logo.PNG'

class HomePage extends Component {

	constructor() {
		super()
		this.state = {
			latencyCheck: [],
			pinging: true,
			newUrl: ""
		}
		// Exposes the method and state
		this.adminPanelRef = React.createRef()
    	this.pingHandler = this.pingHandler.bind(this)
	}
	
	pingHandler() {
		this.setState(prevState => ({
			latencyCheck: prevState.latencyCheck, pinging: !prevState.pinging, newUrl: prevState.newUrl
		}), this.initPings)
	}
	
	endpoints = () => {
        fetch('/api/endpointNames')
    		.then(results => {
                if (!results.ok) {
                	console.log("Failed getting endpoint names: " + results.statusText)
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
					// TODO: If 504 Gateway timeout cancel 5s refresh?
                	console.log("Failed getting endpoints data: " + results.statusText + "; is the server running?")
  					clearInterval(this.interval)
					this.setState((prevState) => {
						return {latencyCheck: prevState.latencyCheck, pinging: false, newUrl: prevState.newUrl};
					})
					this.adminPanelRef.current.togglePinging()
                }
				return results.json()
			})
            .then(data => {
                this.setState({latencyCheck: data})
            })
    }

    componentDidMount() {
		this.endpoints()
		this.doLatencyChecks()
		this.initPings()
	}

	componentWillUnmount() {
  		clearInterval(this.interval)
	}

	shouldComponentUpdate(nextProps) {
		return this.state.pinging !== nextProps.pinging;
	}
	
	initPings() {
		if (this.state.pinging) {
			this.interval = setInterval(() => this.doLatencyChecks(), 5000)
		}
		else {
  			clearInterval(this.interval)
		}
	}
	
	render() {
		var listLength = this.state != null && this.state.endpointList != null ? this.state.endpointNames.length : 0
		return (<div>
			<Style.Header>
				<div>
					<Style.Logo src={logo} alt="Logo"></Style.Logo>
					<div>
						<Style.Title>Service Status Dash</Style.Title>
						<Style.Sub>Page refreshes every 5s {listLength > 0 ? '; There are ' + listLength + ' endpoints' : ''}</Style.Sub>
					</div>
					<ServiceBlock latencyMap={this.state.latencyCheck} />
				</div>
			</Style.Header>
			<br />
			<Style.Header>
				<AdminPanel pingHandler={this.pingHandler} pinging={this.state.pinging} ref={this.adminPanelRef}/>
			</Style.Header>
		</div>)
	}
}

export default HomePage