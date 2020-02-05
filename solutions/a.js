import React, { useState } from 'react'
import PropTypes from 'prop-types'

function useNumberChangeInput (initialValue) {
  const [value, setValue] = useState(initialValue)
  const onChange = (e) => setValue(e.target.value)
  return { value, onChange }
}

function Multiplier ({ initialNum = 0, initialMultiplyBy = 0 }) {
  const numInput = useNumberChangeInput(initialNum)
  const multiplyByInput = useNumberChangeInput(initialMultiplyBy)

  return (
    <div className='multiplier'>
      <input type='number' {...numInput} />
      <div className='x'> x </div>
      <input type='number'  {...multiplyByInput} />
      <p>{numInput.value} * {multiplyByInput.value} = {numInput.value * multiplyByInput.value}</p>
    </div>
  )
}

Multiplier.propTypes = {
  initialNum: PropTypes.number,
  initialMultiplyBy: PropTypes.number
}

export default React.memo(Multiplier)
