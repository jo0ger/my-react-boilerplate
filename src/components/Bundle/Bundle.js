import { Component } from 'react'
import PropTypes from 'prop-types'

// see https://reacttraining.cn/web/guides/code-splitting
export class Bundle extends Component {

  static propTyps = {
    load: PropTypes.func.isRequired
  }

  state = {
    // the short for 'module'
    mod: null
  }
  
  componentWillMount() {
    this.load(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps)
    }
  }
  
  load (props) {
    this.setState({ mode: null })
    props.load(mod => {
      this.setState({
        mode: mod.default ? mod.default : mod
      })
    })
  }

  render () {
    return this.props.children(this.state.mode)
  }

}

export default Bundle
