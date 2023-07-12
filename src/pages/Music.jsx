import { useState, useEffect } from 'react';
import useSound from "use-sound";

import song from "https://www.youtube.com/watch?v=jfKfPfyJRdk&ab_channel=LofiGirl";
import BtnMusic from '../components/BtnMusic';

const Music = () => {
  const [musicStatus, setMusicStatus] = useState('play');
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, {pause}] = useSound(song);

  useEffect(() => {
    play();
    setIsPlaying(true);
  }, [play]);

  const changeStatus = () => {
    if (isPlaying) {
      setMusicStatus('play');
      pause();
      setIsPlaying(false);
    }
    else {
      setMusicStatus('stop');
      play();
      setIsPlaying(true);
    }
  };

  const handleSongEnd = () => {
    setMusicStatus('play');
    play();
    setIsPlaying(true);
  };

  return (
    <div className="w-full h-screen bg-cyan-400">
      <div className="container flex justify-end">
        <div className="mt-5">
          <div>
            <BtnMusic musicStatus={musicStatus} changeStatus={changeStatus} />
          </div>
        </div>
      </div>
      <audio src={song} onEnded={handleSongEnd} loop={true} />
    </div>
  );
};

export default Music;
