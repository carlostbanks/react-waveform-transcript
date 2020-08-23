import React from "react";
import "../App.css";


const Waveform = (props) => {

  
    return (
      <div className='waveform'>
      {Math.round(props.state.time)} / {Math.round(props.state.duration)}
      </div>
    );
  };

export default Waveform;