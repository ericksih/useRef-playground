import { FC, useRef, useState } from 'react';
import React = require('react');

type PlayPauseProps = {
  onClick: (isPlaying: boolean) => void;
  playPause?: string;
};

const PlayPause: FC<PlayPauseProps> = ({ onClick }) => {
  const [playPause, setPlayPause] = useState('play');
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setPlayPause('pause');
      } else {
        videoRef.current.pause();
        setPlayPause('play');
      }
    }
    onClick(!videoRef.current?.paused);
  };

  return (
    <fieldset>
      <legend>
        <h3>Opsi 3: Play And Stop Video</h3>
      </legend>
      <video
        ref={videoRef}
        autoPlay
        loop
        src="https://media.tenor.com/videos/632c96bbc411d8baa3f7f43692474808/webm"
        aria-label="video"
      />
      <br />

      <button onClick={handleClick}>{playPause}</button>
    </fieldset>
  );
};

export default PlayPause;
