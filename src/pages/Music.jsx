import { useState } from 'react';

const Music = () => {
  const [musicStatus, setMusicStatus] = useState('play');

  const changeStatus = e => {
    if(e.target.value === 'play') setMusicStatus('stop');
    else setMusicStatus('play');
  };

  return (
    <div className="w-full h-screen bg-cyan-400">
      <div className="container flex justify-end">
        <div className="mt-5">
          <div>
            <input
              className="w-20 h-20 rounded-full bg-gray-100"
              type='button'
              style={{ background: 'url(./music_back.png)', backgroundSize: 'cover' }}
              onClick={e => changeStatus(e)}
              value={musicStatus}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Music;
