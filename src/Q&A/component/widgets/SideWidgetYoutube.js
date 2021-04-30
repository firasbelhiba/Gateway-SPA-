import React, {useEffect, useState} from "react";
import VideoItem from "./youtubeRec/VideoItem";
import {youtubeRec} from "../../../actions/questions";
import {connect, useDispatch, useSelector} from "react-redux";
import {Header} from "semantic-ui-react";

const SideWidgetYoutube = ({search, youtubeRec, videos: {loading}}) => {
    const dispatch = useDispatch();
    useEffect(() => {
        youtubeRec(search);
    }, [dispatch]);

    const Videos = useSelector((state) => state.question.videos.videos);

    const renderedVideos = Videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video}/>
    });
    console.log(loading)
    return loading ? (
        <>
            <div className="ui raised segment">
                <div>
                    <Header as='h6'>Recommended Blogs</Header>
                </div>
            </div>
            <div className="ui segments">
                <div className="ui active inverted dimmer">
                    <div className="ui indeterminate text loader">Loading Blogs</div>
                </div>
                <div className="ui segment">
                    <div className="ui placeholder">
                        <div className="header">
                            <div className="image"/>
                        </div>
                    </div>
                </div>
                <div className="ui segment">
                    <div className="ui placeholder">
                        <div className="header">
                            <div className="image"/>
                        </div>
                    </div>
                </div>
                <div className="ui segment">
                    <div className="ui placeholder">
                        <div className="header">
                            <div className="image"/>
                        </div>
                    </div>
                </div>
                <div className="ui segment">
                    <div className="ui placeholder">
                        <div className="header">
                            <div className="image"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    ) : (
        <>
            <div className="ui raised segment"
                 style={{display: 'flex', marginBottom: '10px', justifyContent: 'space-between'}}>
                <div>
                    <Header as='h6'>Youtube videos recommendation</Header>
                </div>
            </div>
            <div className="ui relaxed divided list ui segment" style={{paddingBottom: '10px'}}>
                {renderedVideos}
            </div>
        </>
    );
}

const mapStateToProps = (state) => ({
    videos: state.question.videos
});
export default connect(mapStateToProps, {youtubeRec})(SideWidgetYoutube);
