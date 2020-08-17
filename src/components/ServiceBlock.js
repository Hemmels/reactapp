import React, {Component} from 'react'
import Status from './Status.js'
import styled from 'styled-components'

class ServiceBlock extends Component {

	render() {
		var keyVals = Object.entries(this.props.latencyMap).map(([name, latency], idx) => {
			return <Status key={idx} name={name} latency={latency} />
		})
		return (
			<BlockFormat>
				 {keyVals}
			</BlockFormat>
		)
	}
}
		

const BlockFormat = styled.div`
	margin-left: 0.5em;
`

export default ServiceBlock