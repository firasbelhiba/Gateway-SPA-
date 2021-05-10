import React from 'react';
import './video.css';
import {Button, Icon, Modal} from "semantic-ui-react";

const VideoItem = ({video}) => {
    const [open, setOpen] = React.useState(false)

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <Modal
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size='small'
            trigger={<div className=' video-item item'>
                <img className="ui tiny rounded image" src={video.snippet.thumbnails.medium.url}
                     alt={video.snippet.description}/>
                <div className='content'>
                    <div className='header '>{video.snippet.title}</div>
                </div>
            </div>}
        >
            <Modal.Content>
                <div>
                    <div className='ui embed'>
                        <iframe src={videoSrc} allowFullScreen title='Video player'/>
                    </div>
                    <div className='ui segment'>
                        <h4 className='ui header'>{video.snippet.title}</h4>
                        <p>{video.snippet.description}</p>
                    </div>
                </div>
            </Modal.Content>
        </Modal>
    )
};
export default VideoItem;
