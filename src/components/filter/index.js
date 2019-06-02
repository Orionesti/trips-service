import './filter.css'

import React, {Component} from 'react'
import Form from 'react-bootstrap/Form'

class Filter extends Component {

	state = {
		from: '',
		to: ''
	}

	onChange = field => e => {
		const {value} = e.target

		this.setState({ [field]: value })

		const filters = {
			...this.state,
			[field]: value
		}

		this.props.onSearch(filters)
	}

	render() {
		return [
			<Form.Control className="filter-input" placeholder="From" onChange={ this.onChange('from') }/>,
			<Form.Control className="filter-input" placeholder="To" onChange={ this.onChange('to') }/>
		]
	}
}

export default Filter
