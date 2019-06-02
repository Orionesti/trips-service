import React from 'react'

export default function Message({ show }) {
  if (!show) {
    return null
  }

  return (
    <div className="not-found-message">
      Sorry, we didn't find matched results
    </div>
  )
}
