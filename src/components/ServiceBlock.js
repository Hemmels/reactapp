import React, {Component} from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Status from './Status.js'

class ServiceBlock extends Component {

	render() {
		var keyVals1 = Object.entries(this.props.latencyMap).map(([name, latency], idx) => {
			return idx % 4 === 0 ? <Status key={idx} service={name} latency={latency} /> : null
		})
		var keyVals2 = Object.entries(this.props.latencyMap).map(([name, latency], idx) => {
			return idx % 4 === 1 ? <Status key={idx} service={name} latency={latency} /> : null
		})
		var keyVals3 = Object.entries(this.props.latencyMap).map(([name, latency], idx) => {
			return idx % 4 === 2 ? <Status key={idx} service={name} latency={latency} /> : null
		})
		var keyVals4 = Object.entries(this.props.latencyMap).map(([name, latency], idx) => {
			return idx % 4 === 3 ? <Status key={idx} service={name} latency={latency} /> : null
		})
		return (
			<Container fluid>
  				<Row>
					<Col xs={8} sm={6} md={4} lg={3}>
						{keyVals1}
					</Col>
					<Col xs={8} sm={6} md={4} lg={3}>
						{keyVals2}
					</Col>
					<Col xs={8} sm={6} md={4} lg={3}>
						{keyVals3}
					</Col>
					<Col xs={8} sm={6} md={4} lg={3}>
						{keyVals4}
					</Col>
				</Row>
			</Container >
		)
	}
}

export default ServiceBlock