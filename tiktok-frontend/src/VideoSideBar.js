import React, {useState} from 'react'
import './VideoSideBar.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function VideoSideBar({likes, messages, shares}) {
    const [liked, setliked] = useState(false)

    return (
        <div className="videoSideBar">
            <div className="videoSideBar__button">
                { liked ? (
                    <FavoriteIcon fontSize="large" onClick={(e) => setliked(false)}/>
                ) : (
                    <FavoriteBorderIcon
                    fontSize="large"
                    onClick={(e) => setliked(true)}
                    />
                )
                }
                <p><b>{liked ? (likes)+1 : likes}</b></p>
            </div>

            <div className="videoSideBar__button">
                <MessageIcon fontSize="large" />
                <p><b>{messages}</b></p>
            </div>

            <div className="videoSideBar__button">
                <ShareIcon fontsize="large" />
                <p><b>{shares}</b></p>
            </div>
        </div>
    )
}

export default VideoSideBar
