import React, { useRef, useState } from 'react'
import "./Video.css"
import VideoFooter from './VideoFooter'
import VideoSideBar from './VideoSideBar'

function Video({url}) {
const [playing, setPlaying] = useState(false)
const videoRef = useRef(null)

const handleVideoPress = () => {
    if (playing){
        videoRef.current.pause();
        setPlaying(false);
    }
    else{
        videoRef.current.play();
        setPlaying(true);
    }
}

    return (
        <div className="video">
            <video 
            onClick={handleVideoPress}
            loop
            ref={videoRef}
            className="video_player">
                <source src={url} type="video/mp4"/>
            </video>

            <VideoFooter Channel="BassilOraby" Desc="Man Under Multicolored Lights" Song='Toulouse-Nicky Romero'/>
            <VideoSideBar likes={111} messages={34} shares = {42} />
        </div>
    )
}

export default Video
