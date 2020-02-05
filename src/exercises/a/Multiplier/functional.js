import React, { useState } from 'react'
import PropTypes from 'prop-types'

// Edit here!

function Multiplier () {
  return (
    <div className='multiplier'>
      <input type='number' />
      <div className='x'> x </div>
      <input type='number' />
      <p>? * ? = ?</p>
    </div>
  )
}

Multiplier.propTypes = {
  initialNum: PropTypes.number,
  initialMultiplyBy: PropTypes.number
}

export default React.memo(Multiplier)
