import { configureStore } from "@reduxjs/toolkit";
import { songsReducer, addSong, removeSong } from "./slices/songsSlice";
import { moviesReducer, addMovie, removeMovie } from "./slices/moviesSlice";
import { reset } from "./actions";

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer,
  },
});

const startingState = store.getState();
console.log(startingState);

// store.dispatch(songsSlice.actions.addSong("New Song"));

const finalState = store.getState();
console.log(finalState);

export { store, reset, addSong, removeSong, addMovie, removeMovie };
