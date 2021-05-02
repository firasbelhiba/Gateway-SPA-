import HorizontalScroll from 'react-scroll-horizontal'
import React, {useEffect} from "react";
import ImgMediaCard from "./ImgMediaCard"
import {newsRec} from "../../../actions/questions";
import {connect, useDispatch, useSelector} from "react-redux";
import {Loading_spinner} from "../../../Shared/layouts/Loading_spinner";

function NewsScrollSkillsSection({search, loading, news}) {

    const News = []
    for (let i in news) {
        console.log(news[i].subtitle.toUpperCase().includes(search.toUpperCase()))
        console.log(search.toUpperCase())
        News.push(news[i]);
    }
    console.log(news)
    return loading ? (
        <div
        >
            <h3 className="ui block header" style={{marginTop: 15}}>
                <i className="fa-newspaper-o icon"/>
                {search}
            </h3>
            <div className="ui segment" style={{height: 345}}>
                <div className="ui active inverted dimmer">
                    <div className="ui indeterminate text loader">Loading News Feed</div>
                </div>
                <div className="ui placeholder" style={{paddingLeft: '10px', width: "300px", height: 300}}>
                    <div className="header">
                        <div className="image"/>
                    </div>
                </div>

            </div>
        </div>
    ) : (
        <div>
            <h3 className="ui block header" style={{marginTop: 15}}>
                <i className="fa-newspaper-o icon"/>
                {search}
            </h3>
            <HorizontalScroll
                pageLock={true}
                reverseScroll={true}
                style={{height: 350}}
                //config        = {{ stiffness: int, damping: int }}
                //className     = { "ui segment" }
                //animValues    = { int }
            >
                {News.map(item => (
                    <ImgMediaCard item={item}/>
                ))}
            </HorizontalScroll>
        </div>

    );

}


export default NewsScrollSkillsSection;
