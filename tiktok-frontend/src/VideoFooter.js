import React from 'react'
import "./VideoFooter.css"
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker';

function VideoFooter({Channel, Desc, Song}) {
    return (
        <div className="videoFooter">
            <div className="videoFooter_text">
                <h3>@{Channel}</h3>
                <p>{Desc}</p>
                <div className="videoFooter__ticker">
                    <MusicNoteIcon
                    className="videoFooter__icon"></MusicNoteIcon>
                    <Ticker mode="smooth">
                        {({i}) => (<p>{Song}</p>)}
                    </Ticker>
                </div>
            </div>
        </div>
    )
}

export default VideoFooter
