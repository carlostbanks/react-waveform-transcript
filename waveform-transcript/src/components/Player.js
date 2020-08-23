import React from 'react';
import Replay10Icon from '@material-ui/icons/Replay10';
import Forward10Icon from '@material-ui/icons/Forward10';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import "../App.css";


const Player = (props) => {


  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  onMouseEnter() {
    this.setState({dropdownOpen: true});
  }

  onMouseLeave() {
    this.setState({dropdownOpen: false});
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
      <Dropdown className="d-inline-block" onMouseOver={this.onMouseEnter} onMouseLeave={this.onMouseLeave} isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Dropdown
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem disabled>Action</DropdownItem>
          <DropdownItem>Another Action</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      <input
        onChange={e => props.controls.setPlaybackRate(e.target.value / 100)}
        type="number"
        value={props.state.playbackRate * 100}
      />
    </div>
  );
};

export default Player;