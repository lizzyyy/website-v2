import React, { Component } from 'react';
import Fish from './fish'
import * as s from "../styles/projects.module.css";

class Aquarium extends Component {

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', () => this.handleResize());
  }

  handleResize() {
    this.setState({
      height: "100%",
      width: "100%"
    })
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.handleResize());
  }

  render() {
    return (
      <div className={s.tank}>
        <div className={s.water} style={{ ...this.state, zIndex:-1 }}></div>
        <div className={s.water} style={{ ...this.state, zIndex:-10 }}></div>
        <div className={s.water} style={{ ...this.state, zIndex:-20 }}></div>
        <div className={s.water} style={{ ...this.state, zIndex:-30 }}></div>
        <div className={s.water} style={{ ...this.state, zIndex:-40 }}></div>
        <div className={s.water} style={{ ...this.state, zIndex:-50 }}></div>
        <div className={s.water} style={{ ...this.state, zIndex:-60 }}></div>
        <Fish image='../images/goldfish.gif'/>
        <Fish image='../images/goldfish.gif'/>
        <Fish image='../images/goldfish.gif'/>
        <Fish image='../images/goldfish.gif'/>
        <Fish image='../images/goldfish.gif'/>
        <Fish image='../images/goldfish.gif'/>
        <Fish image='../images/goldfish.gif'/>
      </div>
    );
  }
}

export default Aquarium;