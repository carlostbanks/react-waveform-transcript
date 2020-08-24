import React from "react";
import "../App.css";
import Header from './Header';
import Waveform from './Waveform';
import Transcript from './Transcript';
import useAudio from '../hooks/useAudio';


const Audioplayer = (props) => {

  const { element, state, controls } = useAudio({
    src:
      'https://zenprospect-production.s3.amazonaws.com/uploads/phone_call/uploaded_content/59e106639d79684277df770d.wav',
  });

return (
    <div className="main-container">
        <h1>Welcome to the Apollo.io Audio Transcriber</h1>
        <Header element={element} state={state} controls={controls}/>
        <Waveform element={element} state={state} controls={controls}/>
        <Transcript />
    </div>
  );
};

export default Audioplayer;