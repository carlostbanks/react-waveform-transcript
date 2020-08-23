import React from "react";
import "../App.css";
import TextField from '@material-ui/core/TextField';


const Transcript = () => {

return (
    <div className="main-container">
          <TextField id="outlined-basic" label="Search call transcript" variant="outlined" />
          <div>
            <h2>person1 time stamp</h2>
            <h1>person1 text</h1>
          </div> 
          <div>
            <h2>person2 time stamp</h2>
            <h1>person2 text</h1>
          </div> 
    </div>
  );
};

export default Transcript;