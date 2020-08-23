import React from "react";
import "../App.css";

const Waveform = (props) => {

  // time conversion for current
  var current = Math.round(props.state.time).toPrecision(3)
  var hours = Math.floor(current / 60 / 60);
  var minutes = Math.floor(current / 60) - (hours * 60);
  var seconds = current % 60;
  var formatted = minutes.toString().padStart(2, '0') + 
  ':' + seconds.toString().padStart(2, '0');
  
  // time conversion for total
  var total = Math.round(props.state.duration).toPrecision(4)
  var hoursTotal = Math.floor(total / 60 / 60);
  var minutesTotal = Math.floor(total / 60) - (hoursTotal * 60);
  var secondsTotal = total % 60;
  var formattedTotal = minutesTotal.toString().padStart(2, '0') + 
  ':' + secondsTotal.toString().padStart(2, '0');

    return (
      <div className='waveform-container'>
        <div className='time'> 
        {formatted} / {formattedTotal}
        </div>
          <div className='waveform'>
            <div className='persons'>
              <div>
                <h2>person 1</h2>
                <h1>Sounds1 here</h1>
              </div> 
              <div>
                <h2>person 2</h2>
                <h1>Sounds2 here</h1>
              </div> 
            </div>
        </div>
      </div>
    );
  };

export default Waveform;