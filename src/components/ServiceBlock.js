import React, {Component} from 'react'
import Status from './Status.js'

class ServiceBlock extends Component {

	render() {
		var keyVals = Object.entries(this.props.latencyMap).map(([name, latency], idx) => {
			return <Status key={idx} name={name} latency={latency} />
		})
		return (
			<div>
				 {keyVals}
			</div>
		)
	}
}
			
export default ServiceBlock