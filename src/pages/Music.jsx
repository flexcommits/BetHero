import { useState, useEffect } from 'react';
import useSound from 'use-sound';
import axios from 'axios';

import BtnMusic from '../components/BtnMusic';

const musicUrl = {
  method: 'GET',
  url: 'https://www.youtube.com/watch?v=jfKfPfyJRdk&ab_channel=LofiGirl',
};

const Music = () => {
  const [musicStatus, setMusicStatus] = useState('play');
  const [isPlaying, setIsPlaying] = useState(false);
  const [song, setSong] = useState();
  const [play, { pause }] = useSound(song);

  useEffect(() => {
    try {
      const song = axios.request(musicUrl);
      setSong(song);
    } catch (error) {
      throw error;
    }
  }, []);

  useEffect(() => {
    play();
    setIsPlaying(true);
  }, [play]);

  const changeStatus = () => {
    if (isPlaying) {
      setMusicStatus('play');
      pause();
      setIsPlaying(false);
    } else {
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
