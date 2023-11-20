import ReactPlayer from 'react-player';
import React, { useRef } from 'react';
const VIDEO_PATH = 'https://www.youtube.com/watch?v=2xb9Ty-1frw&pp=ygUbYmVhc3RzIG9mIG5vIG5hdGlvbiB0cmFpbGVy';
function PlayerComponent() {
   const playerRef = useRef(null);
   return (
      <div className='video'>
         <iframe width="100%" height="500" src="https://www.youtube.com/embed/2xb9Ty-1frw?si=jEnx6Wgu4koWi-ES" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
   )
};
export default PlayerComponent;