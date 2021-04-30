import React, {useEffect, useState} from "react";
import VideoItem from "./youtubeRec/VideoItem";
import {getQuestion, youtubeRec} from "../../../actions/questions";
import {useDispatch, useSelector} from "react-redux";
import {Header} from "semantic-ui-react";

const SideWodgetYoutube = ({search}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(search)
        dispatch(youtubeRec(search));
    }, [dispatch]);

    const videos = useSelector((state) => state.question.videos);

    console.log(videos)
    const renderedVideos = videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video}/>
    });
    return (
        <>
            <div className="ui raised segment"
                 style={{display: 'flex', marginBottom: '10px', justifyContent: 'space-between'}}>
                <div>
                    <Header as='h6'>Youtube videos recommendation</Header>
                </div>
            </div>
            <div className="ui relaxed divided list ui segment">
                {renderedVideos}
            </div>
        </>
    );
}

export default SideWodgetYoutube;
