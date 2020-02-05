import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class CrazyTimer extends PureComponent {
  static propTypes = {
    initialInterval: PropTypes.number,
    colours: PropTypes.array
  }
  static defaultProps = {
    initialInterval: 1000,
    colours: ['red', 'green', 'blue', 'purple', 'orange', 'gold']
  }

  constructor (props) {
    super(props)
    this.state = {
      interval: props.initialInterval,
      count: 0
    }
    this._handleIntervalChanged = this._handleIntervalChanged.bind(this)
    this._handleReset = this._handleReset.bind(this)
    this._runInterval = this._runInterval.bind(this)
  
    this._runInterval()
    this._counterTextRef = React.createRef()
  }

  _handleReset () {
    this.setState({ count: 0 })
  }

  _handleIntervalChanged (e) {
    if (e.target.value) this.setState({ interval: e.target.value })
  }

  _runInterval () {
    clearInterval(this._loop)
    this._loop = setInterval(() => {
      this.setState(({ count }) => ({ count: ++count }))
      const randomColour = this.props.colours[Math.floor(Math.random() * this.props.colours.length)]
      this._counterTextRef.current.style.color = randomColour
    }, this.state.interval)
  }

  componentDidUpdate (_, prevState) {
    if (this.state.interval !== prevState.interval) this._runInterval()
  }

  componentWillUnmount () {
    clearInterval(this._loop)
  }

  render () {
    return (
      <div className='crazy-timer'>
        <input type='number' value={this.state.interval} step={99} min={1} onChange={this._handleIntervalChanged} />
        <div className='counter-container'>
          <div className='counter' ref={this._counterTextRef}>{this.state.count}</div>
          <button onClick={this._handleReset}>Reset</button>
        </div>
      </div>
    )
  }
}
