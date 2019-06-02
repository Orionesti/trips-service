import './list.css'
import React from 'react'
import Table from 'react-bootstrap/Table'

export default function List({ tripsList }) {
	return (
		<Table className="trips-table" striped bordered hover size="sm">
			<thead>
			<tr>
				<th>Transport</th>
				<th>From</th>
				<th>To</th>
				<th>Departure</th>
				<th>Arrival</th>
			</tr>
			</thead>
			<tbody>
			{tripsList.map(trip => (
				<tr key={ trip.id }>
					<td>{ trip.vehicle }</td>
					<td>{ trip.fromName }</td>
					<td>{ trip.toName }</td>
					<td>{ trip.departAt }</td>
					<td>{ trip.arrivalAt }</td>
				</tr>
			))}
			</tbody>
		</Table>
	)
}