import React, { useState, useEffect, useRef, useCallback } from 'react'
import PropTypes from 'prop-types'

function CrazyTimer ({  initialInterval = 1000, colours = ['red', 'green', 'blue', 'purple', 'orange', 'gold'] }) {
  const [interval, setTheInterval] = useState(initialInterval)
  const [count, setCount] = useState(0)
  const counterTextRef = useRef()

  const handleReset = useCallback(() => {
    setCount(0)
  }, [])

  const handleIntervalChanged = useCallback((e) => {
    setTheInterval(e.target.value)
  }, [])

  useEffect(() => {
    const loop = setInterval(() => {
      setCount((count) => ++count)
      const randomColour = colours[Math.floor(Math.random() * colours.length)]
      counterTextRef.current.style.color = randomColour
    }, interval)
    return () => clearInterval(loop)
  }, [interval, colours])

  return (
    <div className='crazy-timer'>
      <input type='number' value={interval} step={99} min={1} onChange={handleIntervalChanged} />
      <div className='counter-container'>
        <div className='counter' ref={counterTextRef}>{count}</div>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  )
}

CrazyTimer.propTypes = {
  initialInterval: PropTypes.number,
  colours: PropTypes.array
}

export default React.memo(CrazyTimer)
