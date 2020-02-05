import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Multiplier extends PureComponent {
  static propTypes = {
    initialNum: PropTypes.number,
    initialMultiplyBy: PropTypes.number
  }
  static defaultProps = {
    initialNum: 1,
    initialMultiplyBy: 1
  }

  constructor (props) {
    super(props)
    this.state = {
      num: props.initialNum,
      multiplyBy: props.initialMultiplyBy
    }
    this._handleNumChanged = this._handleNumChanged.bind(this)
    this._handleMulitplyByChanged = this._handleMulitplyByChanged.bind(this)
  }

  _handleNumChanged (e) {
    this.setState({ num: e.target.value })
  }

  _handleMulitplyByChanged (e) {
    this.setState({ multiplyBy: e.target.value })
  }

  render () {
    return (
      <div className='multiplier'>
        <input type='number' value={this.state.num} size={2} onChange={this._handleNumChanged} />
        <div className='x'> x </div>
        <input type='number' value={this.state.multiplyBy} size={2} onChange={this._handleMulitplyByChanged} />
        <p>{this.state.num} * {this.state.multiplyBy} = {this.state.num * this.state.multiplyBy}</p>
      </div>
    )
  }
}
