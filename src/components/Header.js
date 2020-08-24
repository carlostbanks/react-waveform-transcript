import React from "react";
import "../App.css";
import Button from '@material-ui/core/Button';
import Player from './Player'
import Share from '../assets/share.png'

const Header = (props) => {

return (
    <div className="header">
        <Player element={props.element} state={props.state} controls={props.controls}/>
        <Button
        variant="contained"
        color="Primary" 
        className='share-button'   
      >
          <img className='arrow' src={Share} alt='share'/>
          Share
          </Button>
    </div>
  );
};

export default Header;