import React, { useState, useEffect } from 'react';
import "./subtitle.css"

const Subtitle = ({ subtitles, audioRef }) => {
  const [currentSubtitle, setCurrentSubtitle] = useState('');

  useEffect(() => {
    const audio = audioRef.current;

    const handleTimeUpdate = () => {
      const currentTime = audio.currentTime;

      // Find the active subtitle based on current audio time
      const activeSubtitle = subtitles.find(subtitle => {
        return currentTime >= subtitle.start && currentTime <= subtitle.end;
      });

      // Update subtitle text
      if (activeSubtitle) {
        setCurrentSubtitle(activeSubtitle.text);
      } else {
        setCurrentSubtitle('');
      }
    };

    // Add event listener for audio time updates
    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      // Remove event listener when component unmounts
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, [subtitles, audioRef]);

  // Function to replace newline characters with <br> tags
  const renderSubtitle = () => {
    return currentSubtitle.split('\n').map((line, index) => {
      return <React.Fragment key={index}>{line}<br/></React.Fragment>;
    });
  };

  return (
    <div className="subtitle-container">
      <p className="subtitle-text">{renderSubtitle()}</p>
    </div>
  );
};

export default Subtitle;
