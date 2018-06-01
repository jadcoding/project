import React from 'react';
import './Bmi.css'
import ModalExampleScrollingContent from './modal.js'
import Healthy from './healthy.js'
class BMIBox extends React.Component {
    render() {
      let style = {
        marginTop: '20px',
        marginBottom: '20px'
      }
      return (
        <div className="bmi-box">
          <div className="ribbon"><span></span></div>
          <header className="text-center">
            <img alt='' className="qwerty" src={require("./body.svg")} height="80"/>
            <h3 style={style}>BMI CALCULATOR</h3>
          </header>
          <BodyForm />
        </div>
      );
    }
  }
  
class DisplayBMI extends React.Component{
    render() {
      let showAlert;
      if (this.props.result !== '' ) {
        showAlert = <div className="displayBMI text-center">
                      <div className="alert alert-info">{this.props.result}</div>
                    </div>
      }
      return (
        showAlert || null
      )
    }
  }

class BodyForm extends React.Component{
    state() {
      return {
        displayBMI: ''
      }
    }
  
    updateDisplayBMI = () => {
      let myWeight = this.refs.myWeight.value,
          myHeight = this.refs.myHeight.value,
          myGender = this.refs.myGender.value;
      this.setState({
        displayBMI: this.doCalc(myWeight, myHeight, myGender)
      })
    }
  
    resetDisplayBMI = () => {
      this.setState({
        displayBMI: ''
      });
      this.refs.myWeight.value = '';
      this.refs.myHeight.value = '';
      this.refs.myGender.value = '0';
    }
  
    doCalc = (myWeight, myHeight, myGender) => {
      let finalBmi = myWeight/(myHeight/100*myHeight/100);
      if (!(myWeight > 0 && myHeight > 0)) return "Please Fill in everything correctly"
      if (finalBmi < 18.5) {
        return 
      }
      if (finalBmi > 18.5 && finalBmi < 25) {
        return <Healthy/>
      }
      if (finalBmi > 25) {
        return <ModalExampleScrollingContent/>
      }
    }
  
    render = () => {
      return (
        <div>
          <DisplayBMI result={this.state.displayBMI} />
          <div className="bodyForm">
            <div className="form-group">
              <div className="input-group">
                <input type="text" ref="myWeight" placeholder="Your weight in kg. Ex: 68" className="form-control"/>
                <span className="input-group-addon">kg</span>
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <input type="text" ref="myHeight" placeholder="Yout height in cm. Ex: 160" className="form-control"/>
                <span className="input-group-addon">cm</span>
              </div>
            </div>
            <div className="form-group">
              <select className="form-control" ref="myGender">
                <option value="0">Select your gender</option>
                <option value="M">Man</option>
                <option value="W">Woman</option>
              </select>
            </div>
            <div className="pull-right">
              <a href="" className="btn btn-link" onClick={this.resetDisplayBMI}>reset</a>
              <button type="submit" className="btn btn-primary" onClick={this.updateDisplayBMI}>Calculate</button>
            </div>
          </div>
        </div>
      )
    }
  }
  
export default BMIBox;
  