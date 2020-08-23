
// sets active track
export const PLAY_ACTIVE_TRACK = "PLAY_ACTIVE_TRACK";
export const playTrack = (trackId, audioObj) => {
    return {
        type: PLAY_ACTIVE_TRACK,
        trackId: trackId,
        audioObj: audioObj,
    }
}

export const PAUSE_TRACK = 'PAUSE_TRACK'
export const pauseTrack = () => {
    return {
        type: PAUSE_TRACK,
    }
}

export const RESUME_TRACK = 'RESUME_TRACK'
export const resumeTrack = () => {
    return {
        type: RESUME_TRACK,
    }
}
