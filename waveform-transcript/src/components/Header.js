import React, {useState} from "react";
import "../App.css";
import Replay10Icon from '@material-ui/icons/Replay10';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import PauseCircleFilledIcon from '@material-ui/icons/PauseCircleFilled';
import Forward10Icon from '@material-ui/icons/Forward10';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import Button from '@material-ui/core/Button';
import { Howl, Howler } from 'howler';
import track from '../assets/wavrecordingfile.wav'
import useSound from 'use-sound'

const Header = () => {

  const [playbackRate, setPlaybackRate] = useState(1.0)

  const [play, { stop }] = useSound(track)

return (
    <div className="main-container">
        <Replay10Icon />
        <PlayCircleFilledIcon onMouseEnter={play} onMouseLeave={stop}/>
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