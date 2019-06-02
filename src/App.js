import './app.css'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import Alert from 'react-bootstrap/Alert'

import { loadTrips } from './actions/trips'
import { getTrips } from './reducers'
import List from './components/list'
import Filter from './components/filter'
import Message from './components/message'

const normalizeString = str => str.toLowerCase().trim()

class App extends Component {
  state = {
    filterValues: {
      from: '',
      to  : ''
    }
  }

  componentDidMount() {
    this.props.loadTrips()
  }

  onSearch = ({ from, to }) => {
    this.setState({
      filterValues: {
        from,
        to
      }
    })
  }

  getData = () => {
    const { from, to } = this.state.filterValues

    return this.props.tripsList.filter(({ fromName, toName }) => {
      const fromMatches = normalizeString(fromName).includes(normalizeString(from))
      const toMatches = normalizeString(toName).includes(normalizeString(to))

      return fromMatches && toMatches
    })
  }

  renderError = error => (
    <Alert variant="danger">
      { error }
    </Alert>
  )

  // could be not just a string, but the idea is clear
  renderSpinner = () => (
    <div>
      Loading...
    </div>
  )

  render() {
    const tripsList = this.getData()
    const { error, loaded } = this.props
    const hasResults = tripsList.length > 0

    if (error) {
      return this.renderError(error)
    }

    if (!loaded) {
      return this.renderSpinner()
    }

    return (
      <div className="main">
        <Filter onSearch={ this.onSearch }/>
        <Message show={ !hasResults }/>
        { hasResults && <List tripsList={ tripsList }/> }

        <div className="total-count">
          Found { tripsList.length } result(s)
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { error, loaded, list: tripsList } = getTrips(state)

  return {
    tripsList,
    error,
    loaded
  }
}

export default connect(mapStateToProps, { loadTrips })(App)
