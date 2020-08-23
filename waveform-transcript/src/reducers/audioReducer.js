import React from "react";

import {
  FETCH_AUDIO_START,
  FETCH_AUDIO_SUCCESS,
  FETCH_AUDIO_FAILURE,
  FETCH_AUDIO_SPECIFIC,
  FETCH_AUDIO_SPECIFIC_SUCCESS,
  FETCH_AUDIO_SPECIFIC_FAILURE,
} from "../actions/actions";

const initialState = {
    isFetching: false,
    isFetchingDetails: false,
    audio: [],
    audioDetails: null,
    error: null,
    errorDetails: null,
  };

  export const audioReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_AUDIO_START:
        return {
          ...state,
          isFetching: true,
        };
      case FETCH_AUDIO_SUCCESS:
        return {
          ...state,
          isFetching: false,
          AUDIOs: action.payload.slice(0, 10),
        };
      case FETCH_AUDIO_FAILURE:
        return {
          ...state,
          isFetching: false,
          error: action.payload,
        };
      case FETCH_AUDIO_SPECIFIC:
        return {
          ...state,
          isFetchingDetails: true,
        };
      case FETCH_AUDIO_SPECIFIC_SUCCESS:
        return {
          ...state,
          isFetchingDetails: false,
          AUDIOsDetails: action.payload,
        };
      case FETCH_AUDIO_SPECIFIC_FAILURE:
        return {
          ...state,
          isFetchingDetails: false,
          errorDetails: action.payload,
        };
  
      default:
        return state;
    }
  };