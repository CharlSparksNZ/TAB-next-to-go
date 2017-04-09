import React, {PureComponent, PropTypes} from 'react'

import css from './styles.scss'

export default class ButtonLink extends PureComponent {
  static propTypes = {
    linkValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    handleClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired
  }

  constructor () {
    super()

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    const {linkValue, handleClick} = this.props

    handleClick(linkValue)
  }

  render () {
    const {label} = this.props

    return (
      <button className={css.button} onClick={this.handleClick}>
        {label}
      </button>
    )
  }
}
