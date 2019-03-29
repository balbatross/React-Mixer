import React, {
  Component
} from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import './index.css';
export default class Mixer extends Component {
  constructor(props){
    super(props);
    this.state = {
      channels: 8,
      controlValue:[],
    }
  }

  _controlChanged(index, value){
  console.log(value)
    let controlValue = this.state.controlValue
    controlValue[index] = value;
    this.setState({controlValue: controlValue})
  }   

  _controlInputChanged(index, evt){
    
    let controlValue = this.state.controlValue
    controlValue[index] = evt.target.value;
    this.setState({controlValue: controlValue})
  }

  _renderChannels(){
    let channels = []

    for(var i = 0; i < this.state.channels; i++){

      channels.push((
        <div className="mixer-channel">
          <div className="mixer-channel__header">
            <input type="checkbox" />
            <span>Channel  {i + 1}</span>
            <input type="number" onChange={this._controlInputChanged.bind(this, i)} value={this.state.controlValue[i]} />          
          </div>
          <div className="mixer-channel__controls">
            <Slider value={this.state.controlValue[i]} onChange={this._controlChanged.bind(this, i)} vertical/>

          </div>
        </div>
      ));
    }
    return (
      <div className="channels">
      {channels}
      </div>
    )
  }

  render(){
    return (
      <div className="garden-mixer">
        {this._renderChannels()}  
      </div>
    );
  }
}
