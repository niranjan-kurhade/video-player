import React, { useRef, useState } from "react";

const VideoPlayer = () => {
  const ref = useRef();
  const [src, setSrc] = useState(
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
  );

  
  const videos = [
    {
      name: "Big Buck Bunny (Online)",
      url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    { name: "Local Video 1", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { name: "Local Video 2", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
    { name: "Local Video 3", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" },
  ];

  function handlePlay() {
    ref.current.play();
  }

  function handlePause() {
    ref.current.pause();
  }

  function handleSkip(seconds) {
    ref.current.currentTime += seconds;
  }

  function handleFullScreen() {
    if (ref.current.requestFullscreen) {
      ref.current.requestFullscreen();
    }
  }

  function handleChange(e) {
    setSrc(e.target.value);
    // Auto play when user changes video
    setTimeout(() => {
      ref.current.play();
    }, 100);
  }

  return (
    <div>
      <h2>Video Player</h2>

      <video ref={ref} src={src} width="600" controls={false}></video>

      <div style={{ marginTop: "10px" }}>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={() => handleSkip(-5)}>Rewind</button>
        <button onClick={() => handleSkip(5)}>Forward</button>
        <button onClick={handleFullScreen}>FullScreen</button>
      </div>

      <div style={{ marginTop: "10px" }}>
        <label htmlFor="videoSelect">Choose Video: </label>
        <select id="videoSelect" onChange={handleChange} value={src}>
          {videos.map((video, index) => (
            <option key={index} value={video.url}>
              {video.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default VideoPlayer;
