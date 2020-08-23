import React, { useState } from "react";
import "../App.css";
import Header from './Header';
import Waveform from './Waveform';
import Transcript from './Transcript'


const Audioplayer = (props) => {



return (
    <div className="main-container">
        <h1>Welcome to the Apollo.io Audio Transcriber</h1>
        <Header />
        <Waveform />
        <Transcript />
    </div>
  );
};

export default Audioplayer;