// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  mangoValue = () => {
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  bananaValue = () => {
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bg-container">
        <h1 className="main-heading">
          Bob ate <span className="span">{mango}</span> mangoes{' '}
          <span className="span">{banana}</span> bananas
        </h1>
        <div className="inner-container">
          <div className="img-container">
            <img
              className="img"
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
            />
            <button
              className="custom-btn"
              type="submit"
              onClick={this.mangoValue}
            >
              Eat Mango
            </button>
          </div>
          <div className="img-container">
            <img
              className="img"
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
            />
            <button
              className="custom-btn"
              type="submit"
              onClick={this.bananaValue}
            >
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
