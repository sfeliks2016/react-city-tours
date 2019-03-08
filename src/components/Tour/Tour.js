import React, { Component } from 'react'
import './Tour.scss';

export default class Tour extends Component {

  state = {
    showInfo: false
  }

  handleInfo = () => {
    this.setState({
      showInfo: !this.state.showInfo
    })
  }

  render() {

    const { id, city, img, name, info } = this.props.tour;
    const { removeTour } = this.props;

    return (
      <article className="tour">
        <div className="img-container">
          {/* <img width="200" src="https://images.pexels.com/photos/548084/pexels-photo-548084.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="city-tours image" /> */}
          <img src={img} alt="" />
          <span className="close-btn" onClick={() => { removeTour(id) }}>
            <i className="fas fa-window-close"></i>
          </span>
        </div>

        <div className="tour-info">
          {/* <h3>city</h3> */}
          <h3>{city}</h3>
          {/* <h4>name</h4> */}
          <h4>{name}</h4>
          <h5>
            info {" "}
            <span onClick={this.handleInfo}>
              <i className="fas fa-caret-square-down"></i>
            </span>
          </h5>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur rem eligendi fugiat fugit est cumque dolore numquam quibusdam praesentium. Beatae.
          </p> */}

          {this.state.showInfo && <p>{info}</p>}

        </div>
      </article>
    )
  }
}



