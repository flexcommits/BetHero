const BtnMusic = ({changeStatus, musicStatus}) => {
  return (
    <input
      className="w-20 h-20 rounded-full bg-gray-100"
      type="button"
      style={{ background: 'url(./music_back.png)', backgroundSize: 'cover' }}
      onClick={e => changeStatus(e)}
      value={musicStatus}
    />
  );
};

export default BtnMusic;
