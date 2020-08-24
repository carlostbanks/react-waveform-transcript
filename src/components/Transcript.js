import React from "react";
import "../App.css";
import TextField from '@material-ui/core/TextField';


const Transcript = () => {

return (
    <div className="transcript">
          <TextField className='search' id="outlined-basic" label="Search call transcript" variant="outlined" />
          <div className='textbox first-purple'>
            <h2>0:01</h2>
            <h3>This is Brian Isaacson with Guardian mortgage company at the sound of the tone, please leave your name phone number and a brief message, and I will return your call. Thank you.</h3>
          </div> 
          <div className='textbox offset second-blue '>
            <h2>0:12</h2>
            <h3>Sounds good.</h3>
          </div> 
    </div>
  );
};

export default Transcript;