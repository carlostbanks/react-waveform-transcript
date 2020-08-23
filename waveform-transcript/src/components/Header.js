import React from "react";
import "../App.css";
import Replay10Icon from '@material-ui/icons/Replay10';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import Forward10Icon from '@material-ui/icons/Forward10';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import Button from '@material-ui/core/Button';

const Header = (props) => {

return (
    <div className="main-container">
        <Replay10Icon />
        <PlayCircleFilledIcon />
        <PauseCircleFilledIcon />
        <Forward10Icon />
        <VolumeUpIcon />
        <Button
        variant="contained"
        color="Primary"    
      >
          Share
          </Button>
    </div>
  );
};

export default Header;