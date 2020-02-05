import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

// Edit here

function CrazyTimer ({  initialInterval = 1000, colours = ['red', 'green', 'blue', 'purple', 'orange', 'gold'] }) {
  return (
    <div className='crazy-timer'>
      <input type='number' step={99} min={1} />
      <div className='counter-container'>
        <div className='counter'>?</div>
        <button>Reset</button>
      </div>
    </div>
  )
}

CrazyTimer.propTypes = {
  initialInterval: PropTypes.number,
  colours: PropTypes.array
}

export default React.memo(CrazyTimer)
