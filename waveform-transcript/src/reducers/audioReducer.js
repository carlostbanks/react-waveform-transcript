import {
  PLAY_ACTIVE_TRACK,
  PAUSE_TRACK,
  RESUME_TRACK

} from "../actions/actions";

const initialState = {
  isLoading: false,
  isPlaying: false,
  audioObj: null,
}

  export const audioReducer = (state = initialState, action) => {
    switch (action.type) {
      
      case PLAY_ACTIVE_TRACK:
        action.audioObj.play();
            return {
                ...state,
                isPlaying: true,
                audioObj: action.audioObj
            };

      case PAUSE_TRACK:
        state.audioObj.pause();
        return {
            ...state,
            isPlaying: false,
            playingId: state.playingId,
        }
  
      default:
        return state;
    }
  };