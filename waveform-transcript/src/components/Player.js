import React, {useState } from 'react';
import Replay10Icon from '@material-ui/icons/Replay10';
import Forward10Icon from '@material-ui/icons/Forward10';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import VolumeUp from '@material-ui/icons/VolumeUp';

import "../App.css";
import { List } from '@material-ui/core';


const Player = (props) => {

    const [value,setValue]=useState('');

    const handleSelect=(e)=>{
        setValue(e)
      }

  return (
    <div className='player'>
      {props.element}
      <Replay10Icon 
      className='rewind'
      onClick={() => props.controls.seek(props.state.time - 10)}>-10 sec</Replay10Icon>
      <button
        onClick={() => {
            props.state.paused ? props.controls.play() : props.controls.pause();
        }}
      >
        {props.state.paused ? <PlayCircleFilledIcon className='play'/> : <PauseCircleFilledIcon className='pause'/>}
      </button>
      <Forward10Icon 
      className='forward'
      onClick={() => props.controls.seek(props.state.time + 10)}>+10 sec</Forward10Icon>

      <DropdownButton
      alignLeft
      title={props.state.playbackRate * Number(100 / 100).toPrecision(2) + '.0x'}
      id="dropdown-menu-align-right"
      onSelect={handleSelect}
      className='dropdown'
        >
            <div className='list'>
            <Dropdown.Item eventKey="option-1" className='dropdownitem'>0.5x</Dropdown.Item>
              <Dropdown.Item eventKey="option-2" className='dropdownitem'>1.0x</Dropdown.Item>
              <Dropdown.Item eventKey="option-3" className='dropdownitem'>1.5x</Dropdown.Item>
              <Dropdown.Item eventKey="option-3" className='dropdownitem'>2.0x</Dropdown.Item>
              <Dropdown.Item eventKey="option-3" className='dropdownitem'>2.5x</Dropdown.Item>
              <Dropdown.Item eventKey="option-3" className='dropdownitem'>3.0x</Dropdown.Item>
            </div>


      </DropdownButton>

      {/* <input
        onChange={e => props.controls.setPlaybackRate(e.target.value / 100)}
        type="number"
        value={props.state.playbackRate * 100}
      /> */}
      <VolumeUp className='volume'/>
    </div>
  );
};

export default Player;