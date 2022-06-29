import { FC, useRef } from 'react';
import React = require('react');

const PlayPause: FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const Play = async () => {
    const video = videoRef.current as HTMLVideoElement;
    if (video.paused) {
      await video.play();
    } else {
      video.pause();
    }
  };
  return (
    <fieldset>
      <legend>
        <h3>Opsi 3: Play and Stop</h3>
      </legend>
      <video
        ref={videoRef}
        autoPlay
        loop
        src="https://media.tenor.com/videos/632c96bbc411d8baa3f7f43692474808/webm"
        aria-label="video"
      />
      <br />
      <button type="button" onClick={Play}>
        click
      </button>
    </fieldset>
  );
};
export default PlayPause;
