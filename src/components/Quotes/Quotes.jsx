import React, { useRef }  from 'react';
import Subtitle from './Subtitle';

const Quotes = ({ src, subtitles }) => {
    const audioRef = useRef(null);
  return (
    <div className="quotes">
      <audio ref={audioRef} controls>
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <Subtitle subtitles={subtitles} audioRef={audioRef}/>
    </div>
  );
};

export default Quotes;
